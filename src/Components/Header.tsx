// import React from "react";
// import "../Styles/Header.css";
// import headerlogo from "../Assests/headerlogo.webp";
// import profilepic from "../Assests/profilepic.webp";

// const Header = () => {
//   return (
//     <section className="Header">
//       <div className="custom-container">
//         <div className="row">
//           <div className="col-lg-2">

//             <div className="header-logo">
//               <img src={headerlogo} width={200} />
//             </div>
//           </div>
//           <div className="col-lg-4">
//             <div className="round-searchbar">
//               <i className="ri-search-2-line search-icon"></i>
//               <input
//                 type="text"
//                 className="search-input"
//                 placeholder="Search something here"
//               />
//               <i className="ri-equalizer-2-fill filter-icon"></i>
//             </div>
//           </div>

//           <div className="col-lg-6">
//             <div className="header-icons">
//               <div className="headericon-circle">
//                 <i className="ri-heart-3-fill"></i>
//               </div>
//               <div className="headericon-circle">
//                 <i className="ri-notification-2-fill"></i>
//               </div>
//               <div className="headericon-circle">
//                 <i className="ri-settings-3-fill"></i>
//               </div>
//               <div className="profilepicimg">
//                 <img src={profilepic} width={45} />

//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Header;

// Components/Header.tsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Header.css";
import headerlogo from "../Assests/headerlogo.webp";
import profilepic from "../Assests/profilepic.webp";

const Header = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Common search suggestions
  const commonSuggestions = [
    "SUV",
    "Sports Car",
    "Toyota",
    "BMW",
    "Mercedes",
    "Red Car",
    "2023 Model",
    "Electric",
    "Luxury",
    "Economy",
    "Automatic",
    "Manual",
    "Family Car",
    "Convertible",
  ];

  // Filter suggestions based on input
  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = commonSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
      setShowSuggestions(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    navigate(`/search?q=${encodeURIComponent(suggestion)}`);
    setShowSuggestions(false);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setShowSuggestions(false);
  };

  return (
    <section className="Header">
      <div className="custom-container">
        <div className="row align-items-center">
          <div className="col-lg-2">
            <div className="header-logo">
              <img
                src={headerlogo}
                width={200}
                alt="Logo"
                onClick={() => navigate("/")}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>

          <div className="col-lg-4" ref={searchRef}>
            <div className="round-searchbar search-container">
              <i
                className="ri-search-2-line search-icon"
                onClick={handleSearch}
                style={{ cursor: "pointer" }}
                title="Search"
              ></i>
              <input
                type="text"
                className="search-input"
                placeholder="Search cars by brand, model, color, type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                onFocus={() => searchTerm.trim() && setShowSuggestions(true)}
              />

              {searchTerm && (
                <i
                  className="ri-close-line clear-icon"
                  onClick={handleClearSearch}
                  style={{ cursor: "pointer" }}
                  title="Clear search"
                ></i>
              )}

              <i
                className="ri-equalizer-2-fill filter-icon"
                onClick={() => navigate("/carrent")}
                style={{ cursor: "pointer" }}
                title="Advanced filters"
              ></i>

              {/* Search Suggestions Dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="search-suggestions">
                  <div className="suggestions-header">
                    <small className="text-muted">Suggestions:</small>
                  </div>
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="suggestion-item"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      <i className="ri-search-line me-2"></i>
                      {suggestion}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="header-icons">
              <div
                className="headericon-circle"
                onClick={() => navigate("/favorites")}
              >
                <i className="ri-heart-3-fill"></i>
              </div>
              <div className="headericon-circle">
                <i className="ri-notification-2-fill"></i>
              </div>
              <div className="headericon-circle">
                <i className="ri-settings-3-fill"></i>
              </div>
              <div className="profilepicimg">
                <img src={profilepic} width={45} alt="Profile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
