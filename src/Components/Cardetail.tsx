import React from "react";
import "../Styles/Cardetail.css";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import detailmain from "../Assests/detailmain.webp";
import detailthumb2 from "../Assests/detailthumb2.webp";
import detailthumb3 from "../Assests/detailthumb3.webp";
import thumb1 from "../Assests/thumb1.webp";
import profilepic from "../Assests/profilepic.webp";
import carrent1 from "../Assests/carrent1.webp";
import carrent2 from "../Assests/carrent2.webp";
import carrent6 from "../Assests/carrent6.webp";
import carrent4 from "../Assests/carrent4.webp";
import carrent8 from "../Assests/carrent8.webp";
import carrent9 from "../Assests/carrent9.webp";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import Footer from "./Footer";
// button route add this
import { useNavigate } from "react-router";
const Cardetail = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [count, setCount] = useState(0);
  // button
  const navigate = useNavigate();
  return (
    <>
      <section className="Cardetail">
        <div className="parentdetailcar">
          {/* left */}
          <div className="type-leftside">
            {/* new */}

            <div className="type-filter">
              <h3 className="filter-heading">TYPE</h3>
              <ul className="filter-options">
                <li>
                  <label className="checkbox-label">
                    <input type="checkbox" checked />
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
                      <input type="checkbox" checked />
                      <span className="custom-check"></span>2 Person{" "}
                      <span className="count">(10)</span>
                    </label>
                  </li>
                  <li>
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span className="custom-check"></span>4 Person{" "}
                      <span className="count">(14)</span>
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
                      <span className="custom-check"></span>6 Person{" "}
                      <span className="count">(12)</span>
                    </label>
                  </li>
                  <li>
                    <label className="checkbox-label">
                      <input type="checkbox" checked />
                      <span className="custom-check"></span>8 or More{" "}
                      <span className="count">(16)</span>
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
          {/* left */}
          {/* right */}
          <div className="cardetail-right">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="parentswiper">
                    <div className="main__swiper">
                      <Swiper
                        spaceBetween={10}
                        // navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                      >
                        <SwiperSlide>
                          <div className="swipermainback">
                            <img src={thumb1} />
                            <div className="maintext">
                              <p className="textdetail">
                                Sports car with the best design and acceleration
                              </p>
                              <p className="textpara">
                                Safety and comfort while driving a futuristic
                                and elegant sports car
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        
                          <SwiperSlide>
                          <img src={detailthumb2} />
                        </SwiperSlide>

                        <SwiperSlide>
                          <img src={detailthumb3} />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className="swiper__thumb">
                      <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                      >
                        <SwiperSlide>
                          <img src={thumb1} />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={detailthumb2} />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={detailthumb3} />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="fulldesc">
                    <div className="cardetailname">
                      <div className="detailnamecar">
                        <h2 className="cardetail-headcomp">Nissan GT - R </h2>
                        <i className="ri-heart-3-fill"></i>
                      </div>
                      <div className="detailcar-favstars">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-line greycolor"></i>
                        <p className="reviews">440+ Reviewer</p>
                      </div>
                      <div className="cardetaildescription">
                        <p className="car-detail-text">
                          NISMO has become the embodiment of Nissan's
                          outstanding performance, inspired by the most
                          unforgiving proving ground, the "race track".
                        </p>
                      </div>
                      <div className="cartype">
                        <div className="type-car">
                          <p className="car-typedetail">Type Car</p>
                          <p className="car-typedetail">Steering </p>
                        </div>
                        <div className="car-function">
                          <p className="car-sport">Sport</p>
                          <p className="car-sport">Manual </p>
                        </div>
                        <div className="type-car">
                          <p className="car-typedetail">Steering</p>
                          <p className="car-typedetail">Gasoline </p>
                        </div>
                         <div className="car-function">
                          <p className="car-sport">2 Person</p>
                          <p className="car-sport">70L </p>
                        </div>
                       
                      </div>
                      {/* 2 */}
                      {/* yy */}
                      <div className="nissancar">
                        <div className="detailcar-price">
                          <p className="detailcar-totalprice">
                            $80.00/
                            <span className="detailcar-day"> day</span>
                            <p className="priceintotal">$100.00</p>
                          </p>
                          <button
                            className="rentnowbtn"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              navigate("/payment");
                            }}
                          >
                            Rent Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* reviews */}
                <div className="col-lg-12">
                  <div className="reviews-section">
                    <div className="reviewcount">
                      <p className="review-head">Reviews</p>
                      <div className="review-no">13</div>
                    </div>
                    <div className="people-review">
                      <div className="profile-review">
                        <div className="left-review">
                          <img src={profilepic} width={50} height={50} />
                          <div className="review-tag">
                            <h2 className="review-name">Alex Stanton</h2>
                            <p className="review-role"> CEO at Bukalapak</p>
                          </div>
                        </div>
                        <div className="fav-reviewstars">
                          <p className="review-date">21 July 2022</p>
                          <div className="detailcar-favstars">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-line changecolor"></i>
                          </div>
                        </div>
                      </div>
                      <p className="review-text">
                        We are very happy with the service from the MORENT App.
                        Morent has a low price and also a large variety of cars
                        with good and comfortable facilities. In addition, the
                        service provided by the officers is also very friendly
                        and very polite.
                      </p>
                    </div>
                    {/* ppp */}
                    <div className="people-review">
                      <div className="profile-review">
                        <div className="left-review">
                          <img src={profilepic} width={50} height={50} />
                          <div className="review-tag">
                            <h2 className="review-name">Skylar Dias</h2>
                            <p className="review-role">CEO at Amazon</p>
                          </div>
                        </div>
                        <div className="fav-reviewstars">
                          <p className="review-date">21 July 2022</p>
                          <div className="detailcar-favstars">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-line changecolor"></i>
                          </div>
                        </div>
                      </div>
                      <p className="review-text">
                        We are greatly helped by the services of the MORENT
                        Application. Morent has low prices and also a wide
                        variety of cars with good and comfortable facilities. In
                        addition, the service provided by the officers is also
                        very friendly and very polite.
                      </p>
                      <div className="show-all">
                        <p className="showallcontent">
                          Show All <i className="ri-arrow-down-s-line"></i>
                        </p>
                      </div>
                    </div>
                    {/* pp */}
                  </div>
                </div>
                {/* rect */}
                <div className="col-lg-12">
                  <div className="Recent-cars">
                    <h2 className="recent-head">Recent Car</h2>
                    <a href="#" className="recent-view">
                      View all
                    </a>
                  </div>
                </div>
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
                {/* recom */}
                <div className="col-lg-12">
                  <div className="Recent-cars">
                    <h2 className="recent-head">Recomendation Car</h2>
                    <a href="#" className="recent-view">
                      View all
                    </a>
                  </div>
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cardetail;
