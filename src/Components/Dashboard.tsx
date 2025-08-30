import React from "react";
import "../Styles/Dashboard.css";
import { Link } from "react-router";
import map from "../Assests/map.webp";
import cardpic1 from "../Assests/cardpic1.webp";
import card2 from "../Assests/card2.webp";
import car1 from "../Assests/car1.webp";
import car2 from "../Assests/car2.webp";
import car3 from "../Assests/car3.webp";
import car4 from "../Assests/car4.webp";
import { useEffect, useRef } from "react";
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

const Dashboard = () => {
  // chart

  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null); 

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      // Create new chart
      chartInstance.current = new Chart(chartRef.current, {
        type: "doughnut",
        data: {
          labels: ["Sport Car", "SUV", "Coupe", "Hatchback", "MPV"],

          datasets: [
            {
              label: "My First Dataset",
              data: [100, 100, 100, 100],

              backgroundColor: [
                "rgb(166, 206, 242)",
                "rgb(54, 162, 235)",
                "rgb(13, 53, 89)",
                "rgb(32, 132, 222)",
              ],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "right",
              labels: {
                usePointStyle: true,
                pointStyle: "circle",
                boxWidth: 10,
                font: {
                  size: 14,
                },
                color: "#000",
              },
            },
          },
          cutout: "70%",
        },
      });
    }
  }, []);

  // chart
  return (
    <section className="Dashboard">
      <div className="dashboardparent">
        <div className="Mainmenuparent">
          <div className="Menu-left">
            <div className="Mainmenu">
              <h2 className="main-headmenu">M A I N M E N U</h2>
              <ul className="mainmenulist">
                <li>
                  <Link to="/">
                    <i className="ri-home-5-fill"></i>Dashboard
                  </Link>
                </li>
                {/* car rent route */}
                <li>
                  <Link to="carrent">
                    <i className="ri-car-line"></i>Car Rent
                  </Link>
                </li>
                <li>
                  <Link to="insight">
                    <i className="ri-bar-chart-line"></i>Insight
                  </Link>
                </li>
                <li>
                  <Link to="reimburse">
                    <i className="ri-projector-fill"></i>Reimburse
                  </Link>
                </li>
                <li>
                  <Link to="inbox">
                    <i className="ri-message-3-line"></i>Inbox
                  </Link>
                </li>
                <li>
                  <Link to="calender">
                    <i className="ri-calendar-2-line"></i>Calender
                  </Link>
                </li>
              </ul>
            </div>
            <div className="Mainmenu">
              <h2 className="mainhead">P R E F E R E N C E S</h2>
              <ul className="mainmenulist">
                <li>
                  <Link to="setting">
                    <i className="ri-settings-line"></i>Setting
                  </Link>
                </li>
                <li>
                  <Link to="carrent">
                    <i className="ri-error-warning-line"></i>Help & Center
                  </Link>
                </li>
                <li>
                  <Link to="insight">
                    <i className="ri-briefcase-4-line"></i>Dark Mode
                  </Link>
                  <div className="modeparent">
                    <div className="brightmode-circle">
                      <i className="ri-sun-fill sun-icon"></i>{" "}
                    </div>
                    <i className="ri-moon-line moon-icon"></i>
                  </div>
                </li>
                <li className="logoutsec">
                  <Link to="logout">
                    <i className="ri-logout-box-line"></i> Log Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* next card left */}
          <div className="menu-right">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="detailcardbackground">
                    <div className="detailcard">
                      <h2 className="detail-head">Details Rental</h2>
                      <img src={map} width={517} />
                      <div className="card-pic">
                        <div className="car-name-head">
                          <img src={cardpic1} width={117} height={71} />
                          <div className="card-head">
                            <h2 className="card-model">Nissan GT - R</h2>
                            <p className="card-name">Sport Car</p>
                          </div>
                        </div>
                        <div className="modelcar">
                          <p className="car-model">#9761</p>
                        </div>
                      </div>
                      {/* pickup */}
                      {/* new */}
                      <div className="pickupparent ">
                        <input
                          type="radio"
                          id="pick-up"
                          name="payment"
                          className="pickup-radio"
                          checked
                        />
                        <label htmlFor="pick-up" className="pickup-label">
                          <div className="pickup"></div>
                          <h2 className="picup-head">Pick - Up</h2>
                        </label>
                      </div>
                      {/* time */}
                      <div className="location-parent">
                        <div className="location-head">
                          <h2 className="loaction-name">Locations</h2>
                          <div className="loc-name">
                            <p className="loc-para">Kota Semarang</p>
                            <i className="ri-arrow-down-s-line"></i>
                          </div>
                        </div>
                        {/* 2 */}
                        <div className="location-head ">
                          <h2 className="loaction-name">Date</h2>
                          <div className="loc-name">
                            <p className="loc-para">20 July 2022</p>
                            <i className="ri-arrow-down-s-line"></i>
                          </div>
                        </div>
                        {/* 2 */}
                        {/* 3 */}
                        <div className="location-head location-border">
                          <h2 className="loaction-name">Time</h2>
                          <div className="loc-name">
                            <p className="loc-para">07.00</p>
                            <i className="ri-arrow-down-s-line"></i>
                          </div>
                        </div>
                        {/* 3 */}
                      </div>

                      {/* 22222 */}
                      <div className="pickupparent ">
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
                      {/* time */}
                      <div className="location-parent">
                        <div className="location-head">
                          <h2 className="loaction-name">Locations</h2>
                          <div className="loc-name">
                            <p className="loc-para">Kota Semarang</p>
                            <i className="ri-arrow-down-s-line"></i>
                          </div>
                        </div>
                        {/* 2 */}
                        <div className="location-head loc-gap">
                          <h2 className="loaction-name">Date</h2>
                          <div className="loc-name">
                            <p className="loc-para">20 July 2022</p>
                            <i className="ri-arrow-down-s-line"></i>
                          </div>
                        </div>
                        {/* 2 */}
                        {/* 3 */}
                        <div className="location-head location-border">
                          <h2 className="loaction-name">Time</h2>
                          <div className="loc-name">
                            <p className="loc-para">07.00</p>
                            <i className="ri-arrow-down-s-line"></i>
                          </div>
                        </div>
                        {/* 3 */}
                      </div>
                      <div className="location-end"></div>

                      {/* 2222 */}
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
                <div className="col-lg-6">
                  <div className="card2">
                    <canvas className="chart-style" ref={chartRef}></canvas>
                  </div>
                  {/* down col if we use col under same width we just have close the up divv we create dont need to close col */}
                  <div className="col-lg-12">
                    <div className="cardrightparent">
                      <div className="recent">
                        <div className="recenttransaction">
                          <p className="recenthead">Recent Transaction</p>
                          <p className="recentbtn">View All</p>
                        </div>
                        {/* car */}
                        <div className="card-pic">
                          <div className="car-name-head">
                            <img src={car1} width={117} height={71} />
                            <div className="card-head">
                              <h2 className="card-model  car-smallfont">
                                Nissan GT - R
                              </h2>
                              <p className="card-name card-smallname">
                                Sport Car
                              </p>
                            </div>
                          </div>
                          <div className="modelcar">
                            <p className="car-model">20July</p>
                            <p className="car-pricetotal">$80.00</p>
                          </div>
                        </div>

                        {/* car */}
                        {/* car2 */}
                        <div className="card-pic">
                          <div className="car-name-head">
                            <img src={car2} width={117} height={71} />
                            <div className="card-head">
                              <h2 className="card-model  car-smallfont">
                                Koegnigsegg
                              </h2>
                              <p className="card-name card-smallname">
                                Sport Car
                              </p>
                            </div>
                          </div>
                          <div className="modelcar">
                            <p className="car-model">19July</p>
                            <p className="car-pricetotal">$99.00</p>
                          </div>
                        </div>

                        {/* car2 */}
                        {/* car3 */}
                        <div className="card-pic">
                          <div className="car-name-head">
                            <img src={car3} width={117} height={71} />
                            <div className="card-head">
                              <h2 className="card-model  car-smallfont">
                                Rolls - Royce
                              </h2>
                              <p className="card-name card-smallname">
                                Sport Car
                              </p>
                            </div>
                          </div>
                          <div className="modelcar">
                            <p className="car-model">18July</p>
                            <p className="car-pricetotal">$96.00</p>
                          </div>
                        </div>

                        {/* car3 */}
                        {/* car4 */}
                        <div className="card-pic">
                          <div className="car-name-head">
                            <img src={car4} width={117} height={71} />
                            <div className="card-head">
                              <h2 className="card-model  car-smallfont">
                                CR - V
                              </h2>
                              <p className="card-name card-smallname">
                                Sport Car
                              </p>
                            </div>
                          </div>
                          <div className="modelcar">
                            <p className="car-model">17July</p>
                            <p className="car-pricetotal">$80.00</p>
                          </div>
                        </div>

                        {/* car4 */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
