import React from "react";
import "../Styles/Header.css";
import headerlogo from "../Assests/headerlogo.webp";
import profilepic from "../Assests/profilepic.webp";

const Header = () => {
  return (
    <section className="Header">
      <div className="custom-container">
        <div className="row">
          <div className="col-lg-2">
       

            <div className="header-logo">
              <img src={headerlogo} width={200} />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="round-searchbar">
              <i className="ri-search-2-line search-icon"></i>
              <input
                type="text"
                className="search-input"
                placeholder="Search something here"
              />
              <i className="ri-equalizer-2-fill filter-icon"></i>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="header-icons">
              <div className="headericon-circle">
                <i className="ri-heart-3-fill"></i>
              </div>
              <div className="headericon-circle">
                <i className="ri-notification-2-fill"></i>
              </div>
              <div className="headericon-circle">
                <i className="ri-settings-3-fill"></i>
              </div>
              <div className="profilepicimg">
                <img src={profilepic} width={45} />

              </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
