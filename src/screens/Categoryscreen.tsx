// components/CategoryScreen.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Categorycar.css";
import { getCar } from "../services/GlobalService";
import { Car } from "../@types/ApiResponses";

// Import static images as fallback
import carrent1 from "../Assests/carrent1.webp";
import carrent2 from "../Assests/carrent2.webp";
// import carrent3 from "../Assests/carrent3.webp";
import carrent4 from "../Assests/carrent4.webp";
import carrent5 from "../Assests/carrent5.webp";
import carrent6 from "../Assests/carrent6.webp";
import carrent7 from "../Assests/carrent7.webp";
import carrent8 from "../Assests/carrent8.webp";
import carrent9 from "../Assests/carrent9.webp";

const CategoryScreen = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    type: "",
    capacity: "",
    price: 100,
  });

  // Static image mapping
  const carImages = [
    carrent1, carrent2, carrent1, carrent4, carrent5,
    carrent6, carrent7, carrent8, carrent9
  ];

  const getCarImage = (index: number) => {
    return carImages[index % carImages.length];
  };

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const data = await getCar();
        setCars(data.cars);
        setFilteredCars(data.cars);
      } catch (error) {
        console.error("Error fetching cars:", error);
        setError("Failed to load cars. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchCars();
  }, []);

  // Apply filters whenever filters change
  useEffect(() => {
    let result = [...cars];

    if (filters.type) {
      result = result.filter(car => 
        car.car_type?.toLowerCase() === filters.type.toLowerCase()
      );
    }

    if (filters.capacity) {
      const capacityNum = parseInt(filters.capacity);
      result = result.filter(car => 
        car.capacity === capacityNum
      );
    }

    // Filter by price (assuming price is in format "$99.00")
    if (filters.price < 100) {
      result = result.filter(car => {
        const carPrice = parseFloat(car.price.replace('$', ''));
        return carPrice <= filters.price;
      });
    }

    setFilteredCars(result);
  }, [filters, cars]);

  const handleTypeFilter = (type: string) => {
    setFilters(prev => ({
      ...prev,
      type: prev.type === type ? "" : type
    }));
  };

  const handleCapacityFilter = (capacity: string) => {
    setFilters(prev => ({
      ...prev,
      capacity: prev.capacity === capacity ? "" : capacity
    }));
  };

  const handlePriceChange = (price: number) => {
    setFilters(prev => ({
      ...prev,
      price
    }));
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading cars...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <>
      <section className="Categorycar">
        <div className="parent-type">
          {/* Left Side - Filters */}
          <div className="type-leftside">
            {/* Type Filter */}
            <div className="type-filter">
              <h3 className="filter-heading">TYPE</h3>
              <ul className="filter-options">
                {['Sport', 'SUV', 'MPV', 'Sedan', 'Coupe', 'Hatchback'].map(type => {
                  const count = cars.filter(car => car.car_type === type).length;
                  return (
                    <li key={type}>
                      <label className="checkbox-label">
                        <input 
                          type="checkbox" 
                          checked={filters.type === type}
                          onChange={() => handleTypeFilter(type)}
                        />
                        <span className="custom-check"></span>
                        {type} <span className="count">({count})</span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Capacity Filter */}
            <div className="capacitymenu">
              <div className="type-filter">
                <h3 className="filter-heading">CAPACITY</h3>
                <ul className="filter-options">
                  {[2, 4, 6, 8].map(capacity => {
                    const count = cars.filter(car => car.capacity === capacity).length;
                    return (
                      <li key={capacity}>
                        <label className="checkbox-label">
                          <input 
                            type="checkbox" 
                            checked={filters.capacity === capacity.toString()}
                            onChange={() => handleCapacityFilter(capacity.toString())}
                          />
                          <span className="custom-check"></span>
                          {capacity} Person <span className="count">({count})</span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Price Filter */}
            <div className="price-menu">
              <h2 className="mainhead">PRICE</h2>
              {/* <div className="range-bar-container"> */}
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={filters.price}
                  onChange={(e) => handlePriceChange(parseInt(e.target.value))}
                  className="price-range"
                />
              {/* </div> */}
              <p className="max-range">Max. ${filters.price.toFixed(2)}</p>
            </div>
          </div>

          {/* Right Side - Car Listings */}
          <div className="category-rightside">
            <section className="categorysidecard">
              <div className="container">
                <div className="row">
                  {/* Pickup and Drop-off Section */}
                  <div className="col-lg-6">
                    <div className="categorycardback">
                      {/* Pickup section remains static */}
                      <div className="pickupparent pickup-category">
                        <input
                          type="radio"
                          id="pick-up"
                          name="payment"
                          className="pickup-radio"
                          defaultChecked
                        />
                        <label htmlFor="pick-up" className="pickup-label car-pickup">
                          <div className="pickup"></div>
                          <h2 className="picup-head">pick-up</h2>
                        </label>
                      </div>
                      {/* ... pickup location/date/time inputs ... */}
                    </div>
                  </div>
                  
                  <div className="col-lg-6">
                    <div className="categorycardback">
                      {/* Drop-off section remains static */}
                      <div className="pickupparent pickup-category">
                        <input
                          type="radio"
                          id="drop-off"
                          name="payment"
                          className="pickup-radio"
                        />
                        <label htmlFor="drop-off" className="pickup-label car-pickup">
                          <div className="pickup"></div>
                          <h2 className="picup-head">Drop-off</h2>
                        </label>
                      </div>
                      {/* ... drop-off location/date/time inputs ... */}
                    </div>
                  </div>

                  {/* Dynamic Car Cards from API */}
                  {filteredCars.length > 0 ? (
                    filteredCars.map((car, index) => (
                      <div key={car.id} className="col-lg-4 mb-4">
                        <Link
                          to={`/car/${car.car.toLowerCase().replace(/\s+/g, '-')}-${car.car_model.toLowerCase().replace(/\s+/g, '-')}`}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <div className="detail-carrent">
                            <div className="detail-desc">
                              {/* Top Section */}
                              <div className="fav-card">
                                <div className="head-name">
                                  <h2 className="detail-head">{car.car} {car.car_model}</h2>
                                  <p className="detail-carname">{car.car_type || 'Car'}</p>
                                </div>
                                <i className={car.isFavorite ? "ri-heart-3-fill" : "ri-heart-line nocolor"}></i>
                              </div>

                              {/* Car Image */}
                              <div className="carrentimg">
                                <img 
                                  src={getCarImage(index)} 
                                  alt={`${car.car} ${car.car_model}`}
                                  width={300}
                                />
                              </div>

                              {/* Car Details */}
                              <div className="detailcar-logos">
                                <div className="logos-car">
                                  <i className="ri-gas-station-fill"></i>
                                  <p className="logos-desc">{car.fuel_capacity || 'N/A'}</p>
                                </div>
                                <div className="logos-car">
                                  <i className="ri-loader-3-line"></i>
                                  <p className="logos-desc">{car.transmission || 'Manual'}</p>
                                </div>
                                <div className="logos-car">
                                  <i className="ri-group-line"></i>
                                  <p className="logos-desc">{car.capacity || 4} People</p>
                                </div>
                              </div>

                              {/* Price and Action */}
                              <div className="detailcar-price">
                                <p className="detailcar-totalprice">
                                  {car.price || '$99.00'}/
                                  <span className="detailcar-day"> day</span>
                                  {car.discount_price && (
                                    <span className="priceintotal">{car.discount_price}</span>
                                  )}
                                </p>
                                <button 
                                  className={`rentnowbtn ${!car.availability ? 'disabled' : ''}`}
                                  disabled={!car.availability}
                                >
                                  {car.availability ? 'Rent Now' : 'Unavailable'}
                                </button>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))
                  ) : (
                    <div className="col-lg-12">
                      <div className="no-cars-found">
                        <p>No cars found matching your filters.</p>
                        <button 
                          onClick={() => setFilters({ type: "", capacity: "", price: 100 })}
                          className="rentnowbtn"
                        >
                          Clear Filters
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Show More Button */}
                  {filteredCars.length > 0 && (
                    <div className="col-lg-12">
                      <div className="showmorebtn">
                        <button className="rentnowbtn">Show more car</button>
                        <p className="carno">{filteredCars.length} car{filteredCars.length !== 1 ? 's' : ''}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryScreen;