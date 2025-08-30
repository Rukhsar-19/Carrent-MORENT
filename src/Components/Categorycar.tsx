import React from "react";
import { Link } from "react-router";
import "../Styles/Categorycar.css";
import carrent1 from "../Assests/carrent1.webp";
import carrent2 from "../Assests/carrent2.webp";
import carrent3 from "../Assests/carrent3.webp";
import carrent4 from "../Assests/carrent4.webp";
import carrent5 from "../Assests/carrent5.webp";
import carrent6 from "../Assests/carrent6.webp";
import carrent7 from "../Assests/carrent7.webp";
import carrent8 from "../Assests/carrent8.webp";
import carrent9 from "../Assests/carrent9.webp";
import Footer from "./Footer";
const Categorycar = () => {
  return (
    <>
      <section className="Categorycar">
        <div className="parent-type">
          {/* leftside */}
          <div className="type-leftside">
            {/* new */}

            <div className="type-filter">
              <h3 className="filter-heading">TYPE</h3>
              <ul className="filter-options">
                <li>
                  <label className="checkbox-label">
                    <input type="checkbox"  checked/>
                    <span className="custom-check"></span>
                    Sport <span className="count">(10)</span>
                  </label>
                </li>
                <li>
                  <label className="checkbox-label">
                    <input type="checkbox" checked />
                    <span className="custom-check"></span>
                    SUV <span className="count">(12)</span>
                  </label>
                </li>
                <li>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span className="custom-check"></span>
                    MPV <span className="count">(16)</span>
                  </label>
                </li>
                <li>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span className="custom-check"></span>
                    Sedan <span className="count">(20)</span>
                  </label>
                </li>
                <li>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span className="custom-check"></span>
                    Coupe <span className="count">(14)</span>
                  </label>
                </li>
                <li>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span className="custom-check"></span>
                    Hatchback <span className="count">(14)</span>
                  </label>
                </li>
              </ul>
            </div>

            {/* new */}
            <div className="capacitymenu">
              <div className="type-filter">
              <h3 className="filter-heading">C A P A C I T Y</h3>
              <ul className="filter-options">
                <li>
                  <label className="checkbox-label">
                    <input type="checkbox"  checked/>
                    <span className="custom-check"></span>
                    2 Person  <span className="count">(10)</span>
                  </label>
                </li>
                <li>
                  <label className="checkbox-label">
                    <input type="checkbox"  />
                    <span className="custom-check"></span>
                    4 Person <span className="count">(14)</span>
                  </label>
                </li>
                <li>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span className="custom-check"></span>
                    MPV <span className="count">(16)</span>
                  </label>
                </li>
                <li>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span className="custom-check"></span>
                    6 Person <span className="count">(12)</span>
                  </label>
                </li>
                <li>
                  <label className="checkbox-label">
                    <input type="checkbox" checked/>
                    <span className="custom-check"></span>
                    8 or More <span className="count">(16)</span>
                  </label>
                </li>
              
              </ul>
            </div>
            
            </div>

            <div className="price-menu">
              <h2 className="mainhead">PRICE</h2>
              <div className="range-bar-container">
                <div className="range-circle"></div>
              </div>
              <p className="max-range">Max. $100.00</p>
            </div>
          </div>
          {/* right side*/}
          <div className="category-rightside">
            <section className="categorysidecard">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="categorycardback">
                      <div className="pickupparent  pickup-category">
                        <input
                          type="radio"
                          id="pick-up"
                          name="payment"
                          className="pickup-radio"
                          checked
                        />
                        <label
                          htmlFor="pick-up"
                          className="pickup-label  car-pickup"
                        >
                          <div className="pickup"></div>
                          <h2 className="picup-head">pick-up</h2>
                        </label>
                      </div>

                      {/* time */}
                      <div className="location-parent">
                        <div className="location-head nogap">
                          <h2 className="loaction-name">Locations</h2>
                          <div className="loc-name loct-dist">
                            <p className="loc-para">Select your city</p>
                            <i className="ri-arrow-down-s-line"></i>
                          </div>
                        </div>
                        {/* 2 */}
                        <div className="location-head">
                          <h2 className="loaction-name">Date</h2>
                          <div className="loc-name  loct-dist">
                            <p className="loc-para">Select your date</p>
                            <i className="ri-arrow-down-s-line"></i>
                          </div>
                        </div>
                        {/* 2 */}
                        {/* 3 */}
                        <div className="location-head location-border">
                          <h2 className="loaction-name">Time</h2>
                          <div className="loc-name loct-dist ">
                            <p className="loc-para">Select your time</p>
                            <i className="ri-arrow-down-s-line"></i>
                          </div>
                        </div>
                        {/* 3 */}
                      </div>

                      {/* btn */}
                      {/* yyy */}

                      {/* yyy */}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="categorycardback">
                      <div className="pickupparent  pickup-category">
                        <input
                          type="radio"
                          id="drop-off"
                          name="payment"
                          className="pickup-radio"
                          checked
                        />
                        <label
                          htmlFor="drop-off"
                          className="pickup-label  car-pickup"
                        >
                          <div className="pickup"></div>
                          <h2 className="picup-head">Drop-off</h2>
                        </label>
                      </div>
                      {/* time */}
                      <div className="location-parent">
                        <div className="location-head nogap">
                          <h2 className="loaction-name">Locations</h2>
                          <div className="loc-name loct-dist">
                            <p className="loc-para">Select your city</p>
                            <i className="ri-arrow-down-s-line"></i>
                          </div>
                        </div>
                        {/* 2 */}
                        <div className="location-head ">
                          <h2 className="loaction-name">Date</h2>
                          <div className="loc-name  loct-dist">
                            <p className="loc-para">Select your date</p>
                            <i className="ri-arrow-down-s-line"></i>
                          </div>
                        </div>
                        {/* 2 */}
                        {/* 3 */}
                        <div className="location-head location-border">
                          <h2 className="loaction-name">Time</h2>
                          <div className="loc-name loct-dist">
                            <p className="loc-para">Select your time</p>
                            <i className="ri-arrow-down-s-line"></i>
                          </div>
                        </div>
                        {/* 3 */}
                      </div>

                      {/* btn */}
                      <button className="locationbtn">
                        <i className="ri-arrow-up-down-line"></i>
                      </button>
                      {/* btn */}
                    </div>
                  </div>
                  {/* cards1  link with car name*/}
                  <Link
                    to="/car/koenigsegg"
                    style={{ textDecoration: "none", color: "inherit" }}
                    className="col-lg-4"
                  >
                    <div className="detail-carrent">
                      <div className="detail-desc">
                        <div className="fav-card">
                          <div className="head-name">
                            <h2 className="detail-head">Koenigsegg</h2>
                            <p className="detail-carname">Sports</p>
                          </div>
                          <i className="ri-heart-3-fill"></i>
                        </div>
                        <div className="carrentimg">
                          <img src={carrent1} width={300} />
                        </div>
                        <div className="detailcar-logos">
                          <div className="logos-car">
                            <i className="ri-gas-station-fill"></i>
                            <p className="logos-desc">90L</p>
                          </div>
                          <div className="logos-car">
                            <i className="ri-loader-3-line"></i>
                            <p className="logos-desc">Manual</p>
                          </div>
                          <div className="logos-car">
                            <i className="ri-group-line"></i>
                            <p className="logos-desc">2 People</p>
                          </div>
                        </div>
                        <div className="detailcar-price">
                          <p className="detailcar-totalprice">
                            $99.00/
                            <span className="detailcar-day"> day</span>
                          </p>
                          <button className="rentnowbtn">Rent Now</button>
                        </div>
                      </div>
                    </div>
                  </Link>
                  {/* card2 */}
                  <div className="col-lg-4">
                    <div className="detail-carrent">
                      <div className="detail-desc">
                        <div className="fav-card">
                          <div className="head-name">
                            <h2 className="detail-head">Nissan GT - R</h2>
                            <p className="detail-carname">Sports</p>
                          </div>
                          <i className="ri-heart-line nocolor"></i>
                        </div>
                        <div className="carrentimg">
                          <img src={carrent2} width={300} />
                        </div>
                        <div className="detailcar-logos">
                          <div className="logos-car">
                            <i className="ri-gas-station-fill"></i>
                            <p className="logos-desc">80L</p>
                          </div>
                          <div className="logos-car">
                            <i className="ri-loader-3-line"></i>
                            <p className="logos-desc">Manual</p>
                          </div>
                          <div className="logos-car">
                            <i className="ri-group-line"></i>
                            <p className="logos-desc">2 People</p>
                          </div>
                        </div>
                        <div className="detailcar-price">
                          <p className="detailcar-totalprice">
                            $80.00/
                            <span className="detailcar-day"> day</span>
                            <p className="priceintotal">$100.00</p>
                          </p>

                          <button className="rentnowbtn">Rent Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card2 */}
                  {/* card3 */}
                  <div className="col-lg-4">
                    <div className="detail-carrent">
                      <div className="detail-desc">
                        <div className="fav-card">
                          <div className="head-name">
                            <h2 className="detail-head">Koenigsegg</h2>
                            <p className="detail-carname">Sports</p>
                          </div>
                          <i className="ri-heart-line nocolor"></i>
                        </div>
                        <div className="carrentimg">
                          <img src={carrent1} width={300} />
                        </div>
                        <div className="detailcar-logos">
                          <div className="logos-car">
                            <i className="ri-gas-station-fill"></i>
                            <p className="logos-desc">90L</p>
                          </div>
                          <div className="logos-car">
                            <i className="ri-loader-3-line"></i>
                            <p className="logos-desc">Manual</p>
                          </div>
                          <div className="logos-car">
                            <i className="ri-group-line"></i>
                            <p className="logos-desc">2 People</p>
                          </div>
                        </div>
                        <div className="detailcar-price">
                          <p className="detailcar-totalprice">
                            $99.00/
                            <span className="detailcar-day"> day</span>
                          </p>
                          <button className="rentnowbtn">Rent Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card3 */}
                  {/* card4 */}
                  <div className="col-lg-4">
                    <div className="detail-carrent">
                      <div className="detail-desc">
                        <div className="fav-card">
                          <div className="head-name">
                            <h2 className="detail-head">All New Rush</h2>
                            <p className="detail-carname">SUV</p>
                          </div>
                          <i className="ri-heart-line nocolor"></i>
                        </div>
                        <div className="carrentimg">
                          <img src={carrent4} width={300} />
                        </div>
                        <div className="detailcar-logos">
                          <div className="logos-car">
                            <i className="ri-gas-station-fill"></i>
                            <p className="logos-desc">70L</p>
                          </div>
                          <div className="logos-car">
                            <i className="ri-loader-3-line"></i>
                            <p className="logos-desc">Manual</p>
                          </div>
                          <div className="logos-car">
                            <i className="ri-group-line"></i>
                            <p className="logos-desc">6 People</p>
                          </div>
                        </div>
                        <div className="detailcar-price">
                          <p className="detailcar-totalprice">
                            $72.00/
                            <span className="detailcar-day"> day</span>
                            <p className="priceintotal">$80.00</p>
                          </p>

                          <button className="rentnowbtn">Rent Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card4 */}
                  {/* card5 */}
                  <div className="col-lg-4">
                    <div className="detail-carrent">
                      <div className="detail-desc">
                        <div className="fav-card">
                          <div className="head-name">
                            <h2 className="detail-head">CR- V</h2>
                            <p className="detail-carname">SUV</p>
                          </div>
                          <i className="ri-heart-3-fill"></i>
                        </div>
                        <div className="carrentimg">
                          <img src={carrent5} width={300} />
                        </div>
                        <div className="detailcar-logos">
                          <div className="logos-car">
                            <i className="ri-gas-station-fill"></i>
                            <p className="logos-desc">80L</p>
                          </div>
                          <div className="logos-car">
                            <i className="ri-loader-3-line"></i>
                            <p className="logos-desc">Manual</p>
                          </div>
                          <div className="logos-car">
                            <i className="ri-group-line"></i>
                            <p className="logos-desc">6 People</p>
                          </div>
                        </div>
                        <div className="detailcar-price">
                          <p className="detailcar-totalprice">
                            $80.00/
                            <span className="detailcar-day"> day</span>
                          </p>
                          <button className="rentnowbtn">Rent Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card5 */}
                  {/* card6 */}
                  <div className="col-lg-4">
                    <div className="detail-carrent">
                      <div className="detail-desc">
                        <div className="fav-card">
                          <div className="head-name">
                            <h2 className="detail-head">All New Terios</h2>
                            <p className="detail-carname">SUV</p>
                          </div>
                          <i className="ri-heart-line nocolor"></i>
                        </div>
                        <div className="carrentimg">
                          <img src={carrent6} width={300} />
                        </div>
                        <div className="detailcar-logos">
                          <div className="logos-car">
                            <i className="ri-gas-station-fill"></i>
                            <p className="logos-desc">90L</p>
                          </div>
                          <div className="logos-car">
                            <i className="ri-loader-3-line"></i>
                            <p className="logos-desc">Manual</p>
                          </div>
                          <div className="logos-car">
                            <i className="ri-group-line"></i>
                            <p className="logos-desc"> 6 People</p>
                          </div>
                        </div>
                        <div className="detailcar-price">
                          <p className="detailcar-totalprice">
                            $74.00/
                            <span className="detailcar-day"> day</span>
                            {/* <p className="priceintotal">$100.00</p> */}
                          </p>

                          <button className="rentnowbtn">Rent Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card6 */}
                  {/* card7 */}
                  <div className="col-lg-4">
                    <div className="detail-carrent">
                      <div className="detail-desc">
                        <div className="fav-card">
                          <div className="head-name">
                            <h2 className="detail-head">MG ZX Exclusice</h2>
                            <p className="detail-carname">Hatchback</p>
                          </div>
                          <i className="ri-heart-line nocolor"></i>
                        </div>
                        <div className="carrentimg">
                          <img src={carrent7} width={300} />
                        </div>
                        <div className="detailcar-logos">
                          <div className="logos-car">
                            <i className="ri-gas-station-fill"></i>
                            <p className="logos-desc">70L</p>
                          </div>
                          <div className="logos-car">
                            <i className="ri-loader-3-line"></i>
                            <p className="logos-desc">Electric</p>
                          </div>
                          <div className="logos-car">
                            <i className="ri-group-line"></i>
                            <p className="logos-desc"> 4 People</p>
                          </div>
                        </div>
                        <div className="detailcar-price">
                          <p className="detailcar-totalprice">
                            $76.00/
                            <span className="detailcar-day"> day</span>
                            <p className="priceintotal">$80.00</p>
                          </p>

                          <button className="rentnowbtn">Rent Now</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* card7 */}
                  {/* card8 */}
                  <div className="col-lg-4">
                    <div className="detail-carrent">
                      <div className="detail-desc">
                        <div className="fav-card">
                          <div className="head-name">
                            <h2 className="detail-head">New MG ZS</h2>
                            <p className="detail-carname">SUV</p>
                          </div>
                          <i className="ri-heart-line nocolor"></i>
                        </div>
                        <div className="carrentimg">
                          <img src={carrent8} width={300} />
                        </div>
                        <div className="detailcar-logos">
                          <div className="logos-car">
                            <i className="ri-gas-station-fill"></i>
                            <p className="logos-desc">80L</p>
                          </div>
                          <div className="logos-car">
                            <i className="ri-loader-3-line"></i>
                            <p className="logos-desc">Manual</p>
                          </div>
                          <div className="logos-car">
                            <i className="ri-group-line"></i>
                            <p className="logos-desc"> 6 People</p>
                          </div>
                        </div>
                        <div className="detailcar-price">
                          <p className="detailcar-totalprice">
                            $80.00/
                            <span className="detailcar-day"> day</span>
                            {/* <p className="priceintotal">$100.00</p> */}
                          </p>

                          <button className="rentnowbtn">Rent Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card8 */}
                  {/* card9 */}
                  <div className="col-lg-4">
                    <div className="detail-carrent">
                      <div className="detail-desc">
                        <div className="fav-card">
                          <div className="head-name">
                            <h2 className="detail-head">MG ZX Excite</h2>
                            <p className="detail-carname">Hatchback</p>
                          </div>
                          <i className="ri-heart-3-fill"></i>
                        </div>
                        <div className="carrentimg">
                          <img src={carrent9} width={300} />
                        </div>
                        <div className="detailcar-logos">
                          <div className="logos-car">
                            <i className="ri-gas-station-fill"></i>
                            <p className="logos-desc">80L</p>
                          </div>
                          <div className="logos-car">
                            <i className="ri-loader-3-line"></i>
                            <p className="logos-desc">Manual</p>
                          </div>
                          <div className="logos-car">
                            <i className="ri-group-line"></i>
                            <p className="logos-desc">6 People</p>
                          </div>
                        </div>
                        <div className="detailcar-price">
                          <p className="detailcar-totalprice">
                            $74.00/
                            <span className="detailcar-day"> day</span>
                          </p>
                          <button className="rentnowbtn">Rent Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card9 */}

                  <div className="col-lg-12">
                    <div className="showmorebtn">
                      <button className="rentnowbtn">Show more car</button>
                      <p className="carno">120car</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Categorycar;
