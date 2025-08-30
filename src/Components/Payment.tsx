import React from "react";
import { useState } from "react";

import "../Styles/Payment.css";
import look from "../Assests/look.webp";
import visa from "../Assests/visa.webp";
import visa2 from "../Assests/visa2.webp";
import paypal from "../Assests/paypal.webp";
import bitcoin from "../Assests/bitcoin.webp";
import layer from "../Assests/layer.webp";
import Footer from "./Footer";
const Payment = () => {
  // dropdwn
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  const cities = ["New York", "London", "Tokyo", "Karachi", "Lahore"];

  const handleSelect = (city: string) => {
    setSelectedCity(city);
    setShowDropdown(false);
  };

  return (
    <>
      <section className="Payment">
        <div className="custom-container">
          <div className="row">
            <div className="col-lg-7">
              {/* billing-info */}
              <div className="payment-billinginfo">
                <p className="bill-head">Billing Info</p>
                <div className="billing-desc">
                  <p className="billing-detail">
                    Please enter your billing info
                  </p>
                  <p className="billing-detail">Step 1 of 4</p>
                </div>
                {/* nested columns used */}
                <div className="row">
                  <div className="col-lg-6">
                    <div className="billing-input">
                      <h2 className="billing-name">Name</h2>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        className="input-field"
                      ></input>
                    </div>
                    <div className="billing-input">
                      <h2 className="billing-name">Phone Number</h2>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Phone Number"
                        className="input-field"
                      ></input>
                    </div>
                  </div>

                  {/* gg */}
                  <div className="col-lg-6">
                    <div className="billing-input">
                      <h2 className="billing-name">Address</h2>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Address"
                        className="input-field"
                      ></input>
                    </div>
                    <div className="billing-input">
                      <h2 className="billing-name">Town / City</h2>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Town or city"
                        className="input-field"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              {/* rentalinfo */}
              <div className="col-lg-12">
                <div className="rental-comp">
                  <div className="payment-billinginfo">
                    <p className="bill-head">Rental Info</p>
                    <div className="billing-desc">
                      <p className="billing-detail">
                        Please select your rental date
                      </p>
                      <p className="billing-detail">Step 2 of 4</p>
                    </div>
                    {/* pickup */}
                    <div className="pickupparent">
                      <input
                        type="radio"
                        id="pick-up"
                        name="payment"
                        className="pickup-radio"
                        checked
                      />
                      <label htmlFor="pick-up" className="pickup-label  creditlabel">
                        <div className="pickup"></div>
                        <h2 className="picup-head">Pick-up</h2>
                      </label>
                    </div>
                    {/*  new nested row */}
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="billing-input">
                          <h2 className="billing-name">Locations</h2>
                          {/* new */}
                          <div className="dropdown-wrapper">
                            <input
                              type="text"
                              placeholder="Select your city"
                              className="input-field"
                              value={selectedCity}
                              readOnly
                              onClick={() => {
                                console.log("Input clicked");
                                setShowDropdown(!showDropdown);
                              }}
                            />
                            <span
                              className="dropdown-icon"
                              onClick={() => setShowDropdown(!showDropdown)}
                            >
                              <i className="ri-arrow-down-s-line"></i>
                            </span>

                            {showDropdown && (
                              <ul className="dropdown-menu">
                                {cities.map((city, index) => (
                                  <li
                                    key={index}
                                    onClick={() => handleSelect(city)}
                                  >
                                    {city}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                        <div className="billing-input">
                          <h2 className="billing-name">Time</h2>
                          {/* drop down input */}
                          <div className="dropdown-wrapper">
                            <input
                              type="text"
                              placeholder="Select your time"
                              className="input-field"
                              value={selectedCity}
                              readOnly
                              onClick={() => {
                                console.log("Input clicked");
                                setShowDropdown(!showDropdown);
                              }}
                            />
                            <span
                              className="dropdown-icon"
                              onClick={() => setShowDropdown(!showDropdown)}
                            >
                              <i className="ri-arrow-down-s-line"></i>
                            </span>

                            {showDropdown && (
                              <ul className="dropdown-menu">
                                {cities.map((city, index) => (
                                  <li
                                    key={index}
                                    onClick={() => handleSelect(city)}
                                  >
                                    {city}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* gg */}
                      <div className="col-lg-6">
                        <div className="billing-input">
                          <h2 className="billing-name">Date</h2>
                          <div className="dropdown-wrapper">
                            <input
                              type="text"
                              placeholder="Select your Date"
                              className="input-field"
                              value={selectedCity}
                              readOnly
                              onClick={() => {
                                console.log("Input clicked");
                                setShowDropdown(!showDropdown);
                              }}
                            />
                            <span
                              className="dropdown-icon"
                              onClick={() => setShowDropdown(!showDropdown)}
                            >
                              <i className="ri-arrow-down-s-line"></i>
                            </span>

                            {showDropdown && (
                              <ul className="dropdown-menu">
                                {cities.map((city, index) => (
                                  <li
                                    key={index}
                                    onClick={() => handleSelect(city)}
                                  >
                                    {city}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* drop down drop off */}
                    <div className="pickupparent">
                      <input
                        type="radio"
                        id="drop-off"
                        name="payment"
                        className="pickup-radio"
                        checked
                      />
                      <label htmlFor="drop-off" className="pickup-label">
                        <div className="pickup"></div>
                        <h2 className="picup-head">Drop-off</h2>
                      </label>
                    </div>
                    {/*  new nested row */}
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="billing-input">
                          <h2 className="billing-name">Locations</h2>
                          {/* new */}
                          <div className="dropdown-wrapper">
                            <input
                              type="text"
                              placeholder="Select your city"
                              className="input-field"
                              value={selectedCity}
                              readOnly
                              onClick={() => {
                                console.log("Input clicked");
                                setShowDropdown(!showDropdown);
                              }}
                            />
                            <span
                              className="dropdown-icon"
                              onClick={() => setShowDropdown(!showDropdown)}
                            >
                              <i className="ri-arrow-down-s-line"></i>
                            </span>

                            {showDropdown && (
                              <ul className="dropdown-menu">
                                {cities.map((city, index) => (
                                  <li
                                    key={index}
                                    onClick={() => handleSelect(city)}
                                  >
                                    {city}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                        <div className="billing-input">
                          <h2 className="billing-name">Time</h2>
                          {/* drop down input */}
                          <div className="dropdown-wrapper">
                            <input
                              type="text"
                              placeholder="Select your time"
                              className="input-field"
                              value={selectedCity}
                              readOnly
                              onClick={() => {
                                console.log("Input clicked");
                                setShowDropdown(!showDropdown);
                              }}
                            />
                            <span
                              className="dropdown-icon"
                              onClick={() => setShowDropdown(!showDropdown)}
                            >
                              <i className="ri-arrow-down-s-line"></i>
                            </span>

                            {showDropdown && (
                              <ul className="dropdown-menu">
                                {cities.map((city, index) => (
                                  <li
                                    key={index}
                                    onClick={() => handleSelect(city)}
                                  >
                                    {city}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* gg */}
                      <div className="col-lg-6">
                        <div className="billing-input">
                          <h2 className="billing-name">Date</h2>
                          <div className="dropdown-wrapper">
                            <input
                              type="text"
                              placeholder="Select your Date"
                              className="input-field"
                              value={selectedCity}
                              readOnly
                              onClick={() => {
                                console.log("Input clicked");
                                setShowDropdown(!showDropdown);
                              }}
                            />
                            <span
                              className="dropdown-icon"
                              onClick={() => setShowDropdown(!showDropdown)}
                            >
                              <i className="ri-arrow-down-s-line"></i>
                            </span>

                            {showDropdown && (
                              <ul className="dropdown-menu">
                                {cities.map((city, index) => (
                                  <li
                                    key={index}
                                    onClick={() => handleSelect(city)}
                                  >
                                    {city}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* gggg */}
                  </div>
                </div>
              </div>
              {/* payemnt */}
              <div className="col-lg-12">
                <div className="rental-comp">
                  <div className="payment-billinginfo">
                    <p className="bill-head">Payment Method</p>
                    <div className="billing-desc">
                      <p className="billing-detail">
                        Please enter your payment method
                      </p>
                      <p className="billing-detail">Step 3 of 4</p>
                    </div>
                    <div className="creditcard-backcolorappear">
                      <div className="credit-card">
                        <div className="pickupparent  card-visa">
                          <input
                            type="radio"
                            id="credit"
                            name="payment"
                            className="pickup-radio"
                            defaultChecked
                          />
                        <label htmlFor="credit" className="pickup-label  creditlabel">

                            <div className="pickup"></div>
                            <h2 className="picup-head">Credit Card</h2>
                          </label>
                        </div>
                        <div className="credit-card-logos">
                          <img src={visa} width={50} />
                          <img src={visa2} width={50} />
                        </div>
                      </div>
                      {/* creditcard */}
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="billing-input">
                            <h2 className="billing-name">Card Number</h2>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              placeholder="Card number"
                              className="input-field  custom-color"
                            ></input>
                          </div>
                          <div className="billing-input">
                            <h2 className="billing-name">Card Holder</h2>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              placeholder="Card holder"
                              className="input-field custom-color"
                            ></input>
                          </div>
                        </div>

                        {/* creditcard*/}
                        <div className="col-lg-6">
                          <div className="billing-input">
                            <h2 className="billing-name">Expration Date</h2>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              placeholder="DD / MM / YY"
                              className="input-field  custom-color"
                            ></input>
                          </div>
                          <div className="billing-input">
                            <h2 className="billing-name">CVC</h2>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              placeholder="CVC"
                              className="input-field  custom-color"
                            ></input>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* paypal */}
                    <div className="col-lg-12">
                      <div className="payment-option">
                        <div className="payment-left">
                          <input
                            type="radio"
                            name="payment"
                            id="paypal"
                            checked
                          />
                          <span className="custom-radio"></span>
                          <span className="radio-label">PayPal</span>
                        </div>
                        <img
                          src={paypal}
                          alt="PayPal Logo"
                          className="paypal-logo"
                        />
                      </div>
                    </div>
                    {/* bitcoin */}
                    <div className="col-lg-12">
                      <div className="payment-option">
                        <div className="payment-left">
                          <input
                            type="radio"
                            name="payment"
                            id="paypal"
                            checked
                          />
                          <span className="custom-radio"></span>
                          <span className="radio-label">Bitcoin</span>
                        </div>
                        <img
                          src={bitcoin}
                          alt="PayPal Logo"
                          className="paypal-logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* confirmation */}
              <div className="col-lg-12">
                <div className="payment-billinginfo  confirmation">
                  <p className="bill-head">Confirmation</p>
                  <div className="billing-desc">
                    <p className="billing-detail">
                      We are getting to the end. Just few clicks and your rental
                      is ready!
                    </p>
                    <p className="billing-detail">Step 4 of 4</p>
                  </div>

                  <div className="col-lg-12">
                    <div className="payment-option  confirm-box">
                      <input type="checkbox" id="marketingConsent" />
                      <label htmlFor="marketingConsent" className="box-check">
                        I agree with receiving marketing and newsletter emails.
                        No spam, promised!
                      </label>
                    </div>
                  </div>
                  {/* ccc */}
                  <div className="col-lg-12">
                    <div className="payment-option  confirm-box">
                      <input type="checkbox" id="marketingConsent" />
                      <label htmlFor="marketingConsent" className="box-check">
                        I agree with our terms and conditions and privacy
                        policy.
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="confirm-btn">
                      <button className="rentnowbtn">Rent Now</button>
                    </div>
                    <div className="layer-logo">
                      <img src={layer} width={40} />
                    </div>
                    <p className="bill-head">All your data are safe</p>
                    <div className="billing-desc">
                      <p className="billing-detail">
                        We are using the most advanced security to provide you
                        the best experience ever.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* rental summary col inside */}

            <div className="col-lg-5">
              <div className="payment-billinginfo">
                <p className="bill-head">Rental Summary</p>
                <div className="billing-desc">
                  <p className="billing-detail">
                    Prices may change depending on the length of the rental and
                    the price of your rental car.
                  </p>
                </div>
                <div className="fulldesc  align-rent">
                  <div className="detailnamecar">
                    <img src={look} width={200} />
                  </div>
                  <div className="detailcar-favstars  rental-car">
                    <h2 className="cardetail-headcomp">Nissan GT - R </h2>
                    <div className="fav-rent">
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-line greycolor"></i>
                      <p className="reviews">440+ Reviewer</p>
                    </div>
                  </div>
                </div>
                <div className="rental-total">
                  <p className="rental-subtotal">Subtotal</p>
                  <p className="rental-dollarprice">$80.00</p>
                </div>
                <div className="rental-total">
                  <p className="rental-subtotal">Tax</p>
                  <p className="rental-dollarprice">$0</p>
                </div>
                <div className="billing-input">
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Apply promo code"
                      className="input-field"
                    />
                    <button className="apply-btn">Apply Now</button>
                  </div>
                </div>
                {/* nn */}
                <div className="rental-price">
                  <div className="total-parent">
                    <p className="rental-head">Total Rental Price</p>
                    <p className="total-rent">
                      Overall price and includes rental discount
                    </p>
                  </div>
                  <p className="rent-pricedollar">$80.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <Footer />
    </>
  );
};

export default Payment;
