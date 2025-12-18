// import React, { useEffect } from "react";
// import "../Styles/Cardetail.css";
// import { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import type { Swiper as SwiperType } from "swiper";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import detailmain from "../Assests/detailmain.webp";
// import detailthumb2 from "../Assests/detailthumb2.webp";
// import detailthumb3 from "../Assests/detailthumb3.webp";
// import thumb1 from "../Assests/thumb1.webp";
// import profilepic from "../Assests/profilepic.webp";
// import carrent1 from "../Assests/carrent1.webp";
// import carrent2 from "../Assests/carrent2.webp";
// import carrent6 from "../Assests/carrent6.webp";
// import carrent4 from "../Assests/carrent4.webp";
// import carrent8 from "../Assests/carrent8.webp";
// import carrent9 from "../Assests/carrent9.webp";
// import { Navigation, Thumbs, FreeMode } from "swiper/modules";
// import Footer from "./Footer";
// // button route add this
// import { useNavigate } from "react-router";
// import { getUser } from "../services/GlobalService";
// import { User } from "../@types/ApiResponses";
// const Cardetail = () => {
//   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
//   const [count, setCount] = useState(0);
//   // button
//   const navigate = useNavigate();
//   // gggg
//   const [users, setUsers] = useState<User[]>([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const userData = await getUser();
//         console.log("Fetched users:", userData);
//         setUsers(userData);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };
//     fetchUsers();
//   }, []);

//   // ggg
//   return (
//     <>
//       <section className="Cardetail">
//         <div className="parentdetailcar">
//           {/* left */}
//           <div className="type-leftside">
//             {/* new */}

//             <div className="type-filter">
//               <h3 className="filter-heading">TYPE</h3>
//               <ul className="filter-options">
//                 <li>
//                   <label className="checkbox-label">
//                     <input type="checkbox" checked />
//                     <span className="custom-check"></span>
//                     Sport <span className="count">(10)</span>
//                   </label>
//                 </li>
//                 <li>
//                   <label className="checkbox-label">
//                     <input type="checkbox" checked />
//                     <span className="custom-check"></span>
//                     SUV <span className="count">(12)</span>
//                   </label>
//                 </li>
//                 <li>
//                   <label className="checkbox-label">
//                     <input type="checkbox" />
//                     <span className="custom-check"></span>
//                     MPV <span className="count">(16)</span>
//                   </label>
//                 </li>
//                 <li>
//                   <label className="checkbox-label">
//                     <input type="checkbox" />
//                     <span className="custom-check"></span>
//                     Sedan <span className="count">(20)</span>
//                   </label>
//                 </li>
//                 <li>
//                   <label className="checkbox-label">
//                     <input type="checkbox" />
//                     <span className="custom-check"></span>
//                     Coupe <span className="count">(14)</span>
//                   </label>
//                 </li>
//                 <li>
//                   <label className="checkbox-label">
//                     <input type="checkbox" />
//                     <span className="custom-check"></span>
//                     Hatchback <span className="count">(14)</span>
//                   </label>
//                 </li>
//               </ul>
//             </div>

//             {/* new */}
//             <div className="capacitymenu">
//               <div className="type-filter">
//                 <h3 className="filter-heading">C A P A C I T Y</h3>
//                 <ul className="filter-options">
//                   <li>
//                     <label className="checkbox-label">
//                       <input type="checkbox" checked />
//                       <span className="custom-check"></span>2 Person{" "}
//                       <span className="count">(10)</span>
//                     </label>
//                   </li>
//                   <li>
//                     <label className="checkbox-label">
//                       <input type="checkbox" />
//                       <span className="custom-check"></span>4 Person{" "}
//                       <span className="count">(14)</span>
//                     </label>
//                   </li>
//                   <li>
//                     <label className="checkbox-label">
//                       <input type="checkbox" />
//                       <span className="custom-check"></span>
//                       MPV <span className="count">(16)</span>
//                     </label>
//                   </li>
//                   <li>
//                     <label className="checkbox-label">
//                       <input type="checkbox" />
//                       <span className="custom-check"></span>6 Person{" "}
//                       <span className="count">(12)</span>
//                     </label>
//                   </li>
//                   <li>
//                     <label className="checkbox-label">
//                       <input type="checkbox" checked />
//                       <span className="custom-check"></span>8 or More{" "}
//                       <span className="count">(16)</span>
//                     </label>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="price-menu">
//               <h2 className="mainhead">PRICE</h2>
//               <div className="range-bar-container">
//                 <div className="range-circle"></div>
//               </div>
//               <p className="max-range">Max. $100.00</p>
//             </div>
//           </div>
//           {/* left */}
//           {/* right */}
//           <div className="cardetail-right">
//             <div className="container">
//               <div className="row">
//                 <div className="col-lg-6">
//                   <div className="parentswiper">
//                     <div className="main__swiper">
//                       <Swiper
//                         spaceBetween={10}
//                         // navigation={true}
//                         thumbs={{ swiper: thumbsSwiper }}
//                         modules={[FreeMode, Navigation, Thumbs]}
//                         className="mySwiper2"
//                       >
//                         <SwiperSlide>
//                           <div className="swipermainback">
//                             <img src={thumb1} />
//                             <div className="maintext">
//                               <p className="textdetail">
//                                 Sports car with the best design and acceleration
//                               </p>
//                               <p className="textpara">
//                                 Safety and comfort while driving a futuristic
//                                 and elegant sports car
//                               </p>
//                             </div>
//                           </div>
//                         </SwiperSlide>

//                         <SwiperSlide>
//                           <img src={detailthumb2} />
//                         </SwiperSlide>

//                         <SwiperSlide>
//                           <img src={detailthumb3} />
//                         </SwiperSlide>
//                       </Swiper>
//                     </div>
//                     <div className="swiper__thumb">
//                       <Swiper
//                         onSwiper={setThumbsSwiper}
//                         spaceBetween={10}
//                         slidesPerView={4}
//                         freeMode={true}
//                         watchSlidesProgress={true}
//                         modules={[FreeMode, Navigation, Thumbs]}
//                         className="mySwiper"
//                       >
//                         <SwiperSlide>
//                           <img src={thumb1} />
//                         </SwiperSlide>
//                         <SwiperSlide>
//                           <img src={detailthumb2} />
//                         </SwiperSlide>
//                         <SwiperSlide>
//                           <img src={detailthumb3} />
//                         </SwiperSlide>
//                       </Swiper>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-6">
//                   <div className="fulldesc">
//                     <div className="cardetailname">
//                       <div className="detailnamecar">
//                         <h2 className="cardetail-headcomp">Nissan GT - R </h2>
//                         <i className="ri-heart-3-fill"></i>
//                       </div>
//                       <div className="detailcar-favstars">
//                         <i className="ri-star-fill"></i>
//                         <i className="ri-star-fill"></i>
//                         <i className="ri-star-fill"></i>
//                         <i className="ri-star-fill"></i>
//                         <i className="ri-star-line greycolor"></i>
//                         <p className="reviews">440+ Reviewer</p>
//                       </div>
//                       <div className="cardetaildescription">
//                         <p className="car-detail-text">
//                           NISMO has become the embodiment of Nissan's
//                           outstanding performance, inspired by the most
//                           unforgiving proving ground, the "race track".
//                         </p>
//                       </div>
//                       <div className="cartype">
//                         <div className="type-car">
//                           <p className="car-typedetail">Type Car</p>
//                           <p className="car-typedetail">Steering </p>
//                         </div>
//                         <div className="car-function">
//                           <p className="car-sport">Sport</p>
//                           <p className="car-sport">Manual </p>
//                         </div>
//                         <div className="type-car">
//                           <p className="car-typedetail">Steering</p>
//                           <p className="car-typedetail">Gasoline </p>
//                         </div>
//                         <div className="car-function">
//                           <p className="car-sport">2 Person</p>
//                           <p className="car-sport">70L </p>
//                         </div>
//                       </div>
//                       {/* 2 */}
//                       {/* yy */}
//                       <div className="nissancar">
//                         <div className="detailcar-price">
//                           <p className="detailcar-totalprice">
//                             $80.00/
//                             <span className="detailcar-day"> day</span>
//                             <p className="priceintotal">$100.00</p>
//                           </p>
//                           <button
//                             className="rentnowbtn"
//                             onClick={(e) => {
//                               e.preventDefault();
//                               e.stopPropagation();
//                               navigate("/payment");
//                             }}
//                           >
//                             Rent Now
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* jjjjjjjjjj */}
//                 <div className="col-lg-12">
//                   <div className="reviews-section">
//                     <div className="reviewcount">
//                       <p className="review-head">Reviews</p>
//                       <div className="review-no">{users.length}</div>
//                     </div>

//                     {users.slice(0, 2).map((user, index) => (
//                       <div className="people-review" key={index}>
//                         <div className="profile-review">
//                           <div className="left-review">
//                             <img
//                               src={`https://randomuser.me/api/portraits/${
//                                 index % 2 === 0 ? "men" : "women"
//                               }/${index + 1}.jpg`}
//                               width={50}
//                               height={50}
//                               alt={user.name}
//                             />
//                             <div className="review-tag">
//                               <h2 className="review-name">{user.name}</h2>
//                               <p className="review-role">
//                                 Customer at{" "}
//                                 {user.company?.name || "Morent Rentals"}
//                               </p>
//                             </div>
//                           </div>

//                           <div className="fav-reviewstars">
//                             <p className="review-date">21 July 2022</p>
//                             <div className="detailcar-favstars">
//                               {[...Array(5)].map((_, i) => (
//                                 <i
//                                   key={i}
//                                   className={`ri-star-${
//                                     i < 4 ? "fill" : "line"
//                                   } changecolor`}
//                                 ></i>
//                               ))}
//                             </div>
//                           </div>
//                         </div>

//                         <p className="review-text">
//                           We are very happy with the service from the MORENT
//                           App. Morent has a low price and also a large variety
//                           of cars with good and comfortable facilities. The
//                           service provided by the officers is also very friendly
//                           and polite.
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 {/* rect */}
//                 <div className="col-lg-12">
//                   <div className="Recent-cars">
//                     <h2 className="recent-head">Recent Car</h2>
//                     <a href="#" className="recent-view">
//                       View all
//                     </a>
//                   </div>
//                 </div>
//                 {/* card2 */}
//                 <div className="col-lg-4">
//                   <div className="detail-carrent">
//                     <div className="detail-desc">
//                       <div className="fav-card">
//                         <div className="head-name">
//                           <h2 className="detail-head">Nissan GT - R</h2>
//                           <p className="detail-carname">Sports</p>
//                         </div>
//                         <i className="ri-heart-line nocolor"></i>
//                       </div>
//                       <div className="carrentimg">
//                         <img src={carrent2} width={300} />
//                       </div>
//                       <div className="detailcar-logos">
//                         <div className="logos-car">
//                           <i className="ri-gas-station-fill"></i>
//                           <p className="logos-desc">80L</p>
//                         </div>
//                         <div className="logos-car">
//                           <i className="ri-loader-3-line"></i>
//                           <p className="logos-desc">Manual</p>
//                         </div>
//                         <div className="logos-car">
//                           <i className="ri-group-line"></i>
//                           <p className="logos-desc">2 People</p>
//                         </div>
//                       </div>
//                       <div className="detailcar-price">
//                         <p className="detailcar-totalprice">
//                           $80.00/
//                           <span className="detailcar-day"> day</span>
//                           <p className="priceintotal">$100.00</p>
//                         </p>

//                         <button className="rentnowbtn">Rent Now</button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* card2 */}
//                 {/* card3 */}
//                 <div className="col-lg-4">
//                   <div className="detail-carrent">
//                     <div className="detail-desc">
//                       <div className="fav-card">
//                         <div className="head-name">
//                           <h2 className="detail-head">Koenigsegg</h2>
//                           <p className="detail-carname">Sports</p>
//                         </div>
//                         <i className="ri-heart-line nocolor"></i>
//                       </div>
//                       <div className="carrentimg">
//                         <img src={carrent1} width={300} />
//                       </div>
//                       <div className="detailcar-logos">
//                         <div className="logos-car">
//                           <i className="ri-gas-station-fill"></i>
//                           <p className="logos-desc">90L</p>
//                         </div>
//                         <div className="logos-car">
//                           <i className="ri-loader-3-line"></i>
//                           <p className="logos-desc">Manual</p>
//                         </div>
//                         <div className="logos-car">
//                           <i className="ri-group-line"></i>
//                           <p className="logos-desc">2 People</p>
//                         </div>
//                       </div>
//                       <div className="detailcar-price">
//                         <p className="detailcar-totalprice">
//                           $99.00/
//                           <span className="detailcar-day"> day</span>
//                         </p>
//                         <button className="rentnowbtn">Rent Now</button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* card3 */}
//                 {/* card3 */}
//                 <div className="col-lg-4">
//                   <div className="detail-carrent">
//                     <div className="detail-desc">
//                       <div className="fav-card">
//                         <div className="head-name">
//                           <h2 className="detail-head">Koenigsegg</h2>
//                           <p className="detail-carname">Sports</p>
//                         </div>
//                         <i className="ri-heart-line nocolor"></i>
//                       </div>
//                       <div className="carrentimg">
//                         <img src={carrent1} width={300} />
//                       </div>
//                       <div className="detailcar-logos">
//                         <div className="logos-car">
//                           <i className="ri-gas-station-fill"></i>
//                           <p className="logos-desc">90L</p>
//                         </div>
//                         <div className="logos-car">
//                           <i className="ri-loader-3-line"></i>
//                           <p className="logos-desc">Manual</p>
//                         </div>
//                         <div className="logos-car">
//                           <i className="ri-group-line"></i>
//                           <p className="logos-desc">2 People</p>
//                         </div>
//                       </div>
//                       <div className="detailcar-price">
//                         <p className="detailcar-totalprice">
//                           $99.00/
//                           <span className="detailcar-day"> day</span>
//                         </p>
//                         <button className="rentnowbtn">Rent Now</button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* card3 */}
//                 {/* recom */}
//                 <div className="col-lg-12">
//                   <div className="Recent-cars">
//                     <h2 className="recent-head">Recomendation Car</h2>
//                     <a href="#" className="recent-view">
//                       View all
//                     </a>
//                   </div>
//                 </div>
//                 {/* card6 */}
//                 <div className="col-lg-4">
//                   <div className="detail-carrent">
//                     <div className="detail-desc">
//                       <div className="fav-card">
//                         <div className="head-name">
//                           <h2 className="detail-head">All New Terios</h2>
//                           <p className="detail-carname">SUV</p>
//                         </div>
//                         <i className="ri-heart-line nocolor"></i>
//                       </div>
//                       <div className="carrentimg">
//                         <img src={carrent6} width={300} />
//                       </div>
//                       <div className="detailcar-logos">
//                         <div className="logos-car">
//                           <i className="ri-gas-station-fill"></i>
//                           <p className="logos-desc">90L</p>
//                         </div>
//                         <div className="logos-car">
//                           <i className="ri-loader-3-line"></i>
//                           <p className="logos-desc">Manual</p>
//                         </div>
//                         <div className="logos-car">
//                           <i className="ri-group-line"></i>
//                           <p className="logos-desc"> 6 People</p>
//                         </div>
//                       </div>
//                       <div className="detailcar-price">
//                         <p className="detailcar-totalprice">
//                           $74.00/
//                           <span className="detailcar-day"> day</span>
//                           {/* <p className="priceintotal">$100.00</p> */}
//                         </p>

//                         <button className="rentnowbtn">Rent Now</button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* card6 */}
//                 {/* card8 */}
//                 <div className="col-lg-4">
//                   <div className="detail-carrent">
//                     <div className="detail-desc">
//                       <div className="fav-card">
//                         <div className="head-name">
//                           <h2 className="detail-head">New MG ZS</h2>
//                           <p className="detail-carname">SUV</p>
//                         </div>
//                         <i className="ri-heart-line nocolor"></i>
//                       </div>
//                       <div className="carrentimg">
//                         <img src={carrent8} width={300} />
//                       </div>
//                       <div className="detailcar-logos">
//                         <div className="logos-car">
//                           <i className="ri-gas-station-fill"></i>
//                           <p className="logos-desc">80L</p>
//                         </div>
//                         <div className="logos-car">
//                           <i className="ri-loader-3-line"></i>
//                           <p className="logos-desc">Manual</p>
//                         </div>
//                         <div className="logos-car">
//                           <i className="ri-group-line"></i>
//                           <p className="logos-desc"> 6 People</p>
//                         </div>
//                       </div>
//                       <div className="detailcar-price">
//                         <p className="detailcar-totalprice">
//                           $80.00/
//                           <span className="detailcar-day"> day</span>
//                           {/* <p className="priceintotal">$100.00</p> */}
//                         </p>

//                         <button className="rentnowbtn">Rent Now</button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* card8 */}
//                 {/* card9 */}
//                 <div className="col-lg-4">
//                   <div className="detail-carrent">
//                     <div className="detail-desc">
//                       <div className="fav-card">
//                         <div className="head-name">
//                           <h2 className="detail-head">MG ZX Excite</h2>
//                           <p className="detail-carname">Hatchback</p>
//                         </div>
//                         <i className="ri-heart-3-fill"></i>
//                       </div>
//                       <div className="carrentimg">
//                         <img src={carrent9} width={300} />
//                       </div>
//                       <div className="detailcar-logos">
//                         <div className="logos-car">
//                           <i className="ri-gas-station-fill"></i>
//                           <p className="logos-desc">80L</p>
//                         </div>
//                         <div className="logos-car">
//                           <i className="ri-loader-3-line"></i>
//                           <p className="logos-desc">Manual</p>
//                         </div>
//                         <div className="logos-car">
//                           <i className="ri-group-line"></i>
//                           <p className="logos-desc">6 People</p>
//                         </div>
//                       </div>
//                       <div className="detailcar-price">
//                         <p className="detailcar-totalprice">
//                           $74.00/
//                           <span className="detailcar-day"> day</span>
//                         </p>
//                         <button className="rentnowbtn">Rent Now</button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* card9 */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default Cardetail;



// new code


// Components/Cardetail.tsx
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import type { Swiper as SwiperType } from "swiper";
// import { Navigation, Thumbs, FreeMode } from "swiper/modules";
// import { getCar, getCarById, getCarsByIds } from "../services/GlobalService";
// import { Car } from "../@types/ApiResponses";
// import { User } from "../@types/ApiResponses";
// import "../Styles/Cardetail.css";
// import Footer from "./Footer";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import { getCarImages } from "../services/ImageService";


// // Import default images for fallback
// import defaultImage1 from "../Assests/thumb1.webp";
// import defaultImage2 from "../Assests/detailthumb2.webp";
// import defaultImage3 from "../Assests/detailthumb3.webp";

// const Cardetail = () => {
//   const { carName } = useParams<{ carName: string }>();
//   const navigate = useNavigate();
  
//   // State for main car
//   const [car, setCar] = useState<Car | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
  
//   // State for swiper
//   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  
//   // State for related cars
//   const [recentCars, setRecentCars] = useState<Car[]>([]);
//   const [recommendedCars, setRecommendedCars] = useState<Car[]>([]);
  
//   // State for reviews
//   const [reviews, setReviews] = useState<any[]>([]);

//   // Default images for swiper
//   const defaultImages = [defaultImage1, defaultImage2, defaultImage3];

//   useEffect(() => {
//     fetchCarData();
//     fetchRelatedCars();
//     // fetchReviews(); // Uncomment if you have reviews API
//   }, [carName]);

//   const fetchCarData = async () => {
//     try {
//       setLoading(true);
//       const allCars = await getCar();
      
//       // Find car by name from URL parameter
//       // Assuming carName format is "brand-model" (e.g., "nissan-gt-r")
//       const decodedCarName = carName?.replace(/-/g, ' ') || '';
      
//       const foundCar = allCars.cars.find(c => {
//         const carFullName = `${c.car} ${c.car_model}`.toLowerCase();
//         return carFullName.includes(decodedCarName.toLowerCase()) ||
//                c.car.toLowerCase().includes(decodedCarName.toLowerCase()) ||
//                c.car_model.toLowerCase().includes(decodedCarName.toLowerCase());
//       });

//       if (foundCar) {
//         setCar(foundCar);
//       } else {
//         setError("Car not found");
//       }
//     } catch (error) {
//       console.error("Error fetching car:", error);
//       setError("Failed to load car details");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchRelatedCars = async () => {
//     try {
//       const allCars = await getCar();
      
//       // Get recent cars (last 3 added)
//       const recent = [...allCars.cars]
//         .sort((a, b) => b.id - a.id) // Sort by ID descending (assuming newer cars have higher IDs)
//         .slice(0, 3);
//       setRecentCars(recent);
      
//       // Get recommended cars (filter by similar type or random)
//       const recommended = allCars.cars
//         .filter(c => c.id !== car?.id) // Exclude current car
//         .sort(() => Math.random() - 0.5) // Randomize
//         .slice(0, 3);
//       setRecommendedCars(recommended);
//     } catch (error) {
//       console.error("Error fetching related cars:", error);
//     }
//   };

//   const getCarImages = (carData: Car) => {
//     // In a real app, you would get images from the API
//     // For now, use default images or generate based on car data
//     return defaultImages.map((img, index) => ({
//       id: index,
//       src: img,
//       alt: `${carData.car} ${carData.car_model} - Image ${index + 1}`
//     }));
//   };

//   const getCarType = (carData: Car) => {
//     // Determine car type based on car name or model
//     const carName = carData.car.toLowerCase();
//     if (carName.includes('sport') || carName.includes('gt') || carData.car_model.toLowerCase().includes('gt')) {
//       return 'Sport';
//     } else if (carName.includes('suv') || carData.car_model.toLowerCase().includes('suv')) {
//       return 'SUV';
//     } else if (carName.includes('hatch') || carData.car_model.toLowerCase().includes('hatch')) {
//       return 'Hatchback';
//     } else if (carName.includes('sedan') || carData.car_model.toLowerCase().includes('sedan')) {
//       return 'Sedan';
//     } else {
//       return 'Car';
//     }
//   };

//   const getTransmissionType = () => {
//     // You could add this field to your Car type
//     return 'Manual'; // Default or from API
//   };

//   const getFuelType = () => {
//     // Determine based on car model or year
//     return 'Gasoline';
//   };

//   const getCapacity = () => {
//     // Determine based on car type
//     const type = getCarType(car!);
//     switch(type) {
//       case 'Sport': return '2 Person';
//       case 'SUV': return '6 Person';
//       case 'Hatchback': return '4 Person';
//       default: return '4 Person';
//     }
//   };

//   const getFuelCapacity = () => {
//     // Determine based on car type
//     const type = getCarType(car!);
//     switch(type) {
//       case 'Sport': return '70L';
//       case 'SUV': return '80L';
//       case 'Hatchback': return '60L';
//       default: return '70L';
//     }
//   };

//   const handleCarClick = (clickedCar: Car) => {
//     const slug = `${clickedCar.car.toLowerCase().replace(/\s+/g, '-')}-${clickedCar.car_model.toLowerCase().replace(/\s+/g, '-')}`;
//     navigate(`/car/${slug}`);
//     window.scrollTo(0, 0); // Scroll to top
//   };

//   if (loading) {
//     return (
//       <div className="loading-container">
//         <div className="spinner"></div>
//         <p>Loading car details...</p>
//       </div>
//     );
//   }

//   if (error || !car) {
//     return (
//       <div className="error-container">
//         <p className="error-message">{error || "Car not found"}</p>
//         <button 
//           className="btn btn-primary"
//           onClick={() => navigate('/carrent')}
//         >
//           Back to Cars
//         </button>
//       </div>
//     );
//   }

//   const carImages = getCarImages(car);

//   return (
//     <>
//       <section className="Cardetail">
//         <div className="parentdetailcar">
//           {/* Left Sidebar - Filters (same as before) */}
//           <div className="type-leftside">
//             {/* Keep your existing filter code here */}
//             <div className="type-filter">
//               <h3 className="filter-heading">TYPE</h3>
//               <ul className="filter-options">
//                 <li>
//                   <label className="checkbox-label">
//                     <input type="checkbox" checked />
//                     <span className="custom-check"></span>
//                     Sport <span className="count">(10)</span>
//                   </label>
//                 </li>
//                 {/* ... other filters */}
//               </ul>
//             </div>
//             {/* ... other filters */}
//           </div>

//           {/* Right Content */}
//           <div className="cardetail-right">
//             <div className="container">
//               <div className="row">
//                 {/* Car Images Swiper */}
//                 <div className="col-lg-6">
//                   <div className="parentswiper">
//                     <div className="main__swiper">
//                       <Swiper
//                         spaceBetween={10}
//                         thumbs={{ swiper: thumbsSwiper }}
//                         modules={[FreeMode, Navigation, Thumbs]}
//                         className="mySwiper2"
//                       >
//                         {carImages.map((image) => (
//                           <SwiperSlide key={image.id}>
//                             <div className="swipermainback">
//                               <img 
//                                 src={image.src} 
//                                 alt={image.alt}
//                                 style={{ width: '100%', height: 'auto' }}
//                               />
//                               <div className="maintext">
//                                 <p className="textdetail">
//                                   {car.car} {car.car_model} - {getCarType(car)}
//                                 </p>
//                                 <p className="textpara">
//                                   {car.car_color} • {car.car_model_year} • {car.price}/day
//                                 </p>
//                               </div>
//                             </div>
//                           </SwiperSlide>
//                         ))}
//                       </Swiper>
//                     </div>
                    
//                     {/* Thumbnail Swiper */}
//                     <div className="swiper__thumb">
//                       <Swiper
//                         onSwiper={setThumbsSwiper}
//                         spaceBetween={10}
//                         slidesPerView={4}
//                         freeMode={true}
//                         watchSlidesProgress={true}
//                         modules={[FreeMode, Navigation, Thumbs]}
//                         className="mySwiper"
//                       >
//                         {carImages.map((image) => (
//                           <SwiperSlide key={image.id}>
//                             <img 
//                               src={image.src} 
//                               alt={`Thumbnail ${image.id + 1}`}
//                               style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
//                             />
//                           </SwiperSlide>
//                         ))}
//                       </Swiper>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Car Details */}
//                 <div className="col-lg-6">
//                   <div className="fulldesc">
//                     <div className="cardetailname">
//                       <div className="detailnamecar">
//                         <h2 className="cardetail-headcomp">
//                           {car.car} {car.car_model}
//                         </h2>
//                         <i className="ri-heart-3-fill"></i>
//                       </div>
                      
//                       <div className="detailcar-favstars">
//                         {[...Array(5)].map((_, i) => (
//                           <i 
//                             key={i}
//                             className={`ri-star-${i < 4 ? 'fill' : 'line'} ${i === 4 ? 'greycolor' : ''}`}
//                           ></i>
//                         ))}
//                         <p className="reviews">440+ Reviewer</p>
//                       </div>
                      
//                       <div className="cardetaildescription">
//                         <p className="car-detail-text">
//                           {car.car} {car.car_model} is a {getCarType(car)} car from {car.car_model_year}. 
//                           It comes in {car.car_color} color and features {getTransmissionType().toLowerCase()} transmission.
//                           {car.availability ? ' Currently available for rent.' : ' Currently not available.'}
//                         </p>
//                       </div>
                      
//                       <div className="cartype">
//                         <div className="type-car">
//                           <p className="car-typedetail">Type Car</p>
//                           <p className="car-typedetail">Steering</p>
//                           <p className="car-typedetail">Capacity</p>
//                           <p className="car-typedetail">Gasoline</p>
//                         </div>
//                         <div className="car-function">
//                           <p className="car-sport">{getCarType(car)}</p>
//                           <p className="car-sport">{getTransmissionType()}</p>
//                           <p className="car-sport">{getCapacity()}</p>
//                           <p className="car-sport">{getFuelCapacity()}</p>
//                         </div>
//                       </div>
                      
//                       <div className="nissancar">
//                         <div className="detailcar-price">
//                           <p className="detailcar-totalprice">
//                             {car.price}/
//                             <span className="detailcar-day"> day</span>
//                             {/* You can add discount price if available */}
//                             {/* <p className="priceintotal">$100.00</p> */}
//                           </p>
//                           <button
//                             className={`rentnowbtn ${!car.availability ? 'disabled' : ''}`}
//                             onClick={(e) => {
//                               e.preventDefault();
//                               e.stopPropagation();
//                               if (car.availability) {
//                                 navigate("/payment", { state: { car } });
//                               }
//                             }}
//                             disabled={!car.availability}
//                           >
//                             {car.availability ? 'Rent Now' : 'Not Available'}
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Reviews Section (using static data for now) */}
//                 <div className="col-lg-12">
//                   <div className="reviews-section">
//                     <div className="reviewcount">
//                       <p className="review-head">Reviews</p>
//                       <div className="review-no">2</div>
//                     </div>
                    
//                     {/* Static reviews - you can replace with API data */}
//                     <div className="people-review">
//                       <div className="profile-review">
//                         <div className="left-review">
//                           <img
//                             src="https://randomuser.me/api/portraits/men/1.jpg"
//                             width={50}
//                             height={50}
//                             alt="Reviewer"
//                           />
//                           <div className="review-tag">
//                             <h2 className="review-name">John Doe</h2>
//                             <p className="review-role">Customer at Morent Rentals</p>
//                           </div>
//                         </div>
//                         <div className="fav-reviewstars">
//                           <p className="review-date">21 July 2022</p>
//                           <div className="detailcar-favstars">
//                             {[...Array(5)].map((_, i) => (
//                               <i
//                                 key={i}
//                                 className={`ri-star-${i < 4 ? 'fill' : 'line'} changecolor`}
//                               ></i>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                       <p className="review-text">
//                         We are very happy with the service from the MORENT App. 
//                         Morent has a low price and also a large variety of cars with good and comfortable facilities. 
//                         The service provided by the officers is also very friendly and polite.
//                       </p>
//                     </div>
                    
//                     <div className="people-review">
//                       <div className="profile-review">
//                         <div className="left-review">
//                           <img
//                             src="https://randomuser.me/api/portraits/women/2.jpg"
//                             width={50}
//                             height={50}
//                             alt="Reviewer"
//                           />
//                           <div className="review-tag">
//                             <h2 className="review-name">Jane Smith</h2>
//                             <p className="review-role">Customer at Morent Rentals</p>
//                           </div>
//                         </div>
//                         <div className="fav-reviewstars">
//                           <p className="review-date">15 August 2022</p>
//                           <div className="detailcar-favstars">
//                             {[...Array(5)].map((_, i) => (
//                               <i
//                                 key={i}
//                                 className={`ri-star-${i < 5 ? 'fill' : 'line'} changecolor`}
//                               ></i>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                       <p className="review-text">
//                         Excellent car rental experience! The {car.car} {car.car_model} was in perfect condition 
//                         and drove beautifully. Will definitely rent from Morent again.
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Recent Cars */}
//                 <div className="col-lg-12">
//                   <div className="Recent-cars">
//                     <h2 className="recent-head">Recent Cars</h2>
//                     <button 
//                       className="recent-view"
//                       onClick={() => navigate('/carrent')}
//                     >
//                       View all
//                     </button>
//                   </div>
//                 </div>
                
//                 {/* Recent Cars Grid */}
//                 {recentCars.map((recentCar) => (
//                   <div key={recentCar.id} className="col-lg-4 mb-4">
//                     <div 
//                       className="detail-carrent"
//                       onClick={() => handleCarClick(recentCar)}
//                       style={{ cursor: 'pointer' }}
//                     >
//                       <div className="detail-desc">
//                         <div className="fav-card">
//                           <div className="head-name">
//                             <h2 className="detail-head">
//                               {recentCar.car} {recentCar.car_model}
//                             </h2>
//                             <p className="detail-carname">{getCarType(recentCar)}</p>
//                           </div>
//                           <i className={`ri-heart-${recentCar.availability ? '3-fill' : 'line nocolor'}`}></i>
//                         </div>
//                         <div className="carrentimg">
//                           <img 
//                             src={defaultImage1} 
//                             alt={`${recentCar.car} ${recentCar.car_model}`}
//                             style={{ width: '100%', height: 'auto' }}
//                           />
//                         </div>
//                         <div className="detailcar-logos">
//                           <div className="logos-car">
//                             <i className="ri-calendar-line"></i>
//                             <p className="logos-desc">{recentCar.car_model_year}</p>
//                           </div>
//                           <div className="logos-car">
//                             <i className="ri-palette-line"></i>
//                             <p className="logos-desc">{recentCar.car_color}</p>
//                           </div>
//                           <div className="logos-car">
//                             <i className="ri-group-line"></i>
//                             <p className="logos-desc">{getCapacity()}</p>
//                           </div>
//                         </div>
//                         <div className="detailcar-price">
//                           <p className="detailcar-totalprice">
//                             {recentCar.price}/
//                             <span className="detailcar-day"> day</span>
//                           </p>
//                           <button 
//                             className={`rentnowbtn ${!recentCar.availability ? 'disabled' : ''}`}
//                             disabled={!recentCar.availability}
//                           >
//                             {recentCar.availability ? 'Rent Now' : 'Unavailable'}
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}

//                 {/* Recommended Cars */}
//                 <div className="col-lg-12">
//                   <div className="Recent-cars">
//                     <h2 className="recent-head">Recommended Cars</h2>
//                     <button 
//                       className="recent-view"
//                       onClick={() => navigate('/carrent')}
//                     >
//                       View all
//                     </button>
//                   </div>
//                 </div>
                
//                 {/* Recommended Cars Grid */}
//                 {recommendedCars.map((recommendedCar) => (
//                   <div key={recommendedCar.id} className="col-lg-4 mb-4">
//                     <div 
//                       className="detail-carrent"
//                       onClick={() => handleCarClick(recommendedCar)}
//                       style={{ cursor: 'pointer' }}
//                     >
//                       <div className="detail-desc">
//                         <div className="fav-card">
//                           <div className="head-name">
//                             <h2 className="detail-head">
//                               {recommendedCar.car} {recommendedCar.car_model}
//                             </h2>
//                             <p className="detail-carname">{getCarType(recommendedCar)}</p>
//                           </div>
//                           <i className={`ri-heart-${recommendedCar.availability ? '3-fill' : 'line nocolor'}`}></i>
//                         </div>
//                         <div className="carrentimg">
//                           <img 
//                             src={defaultImage1} 
//                             alt={`${recommendedCar.car} ${recommendedCar.car_model}`}
//                             style={{ width: '100%', height: 'auto' }}
//                           />
//                         </div>
//                         <div className="detailcar-logos">
//                           <div className="logos-car">
//                             <i className="ri-calendar-line"></i>
//                             <p className="logos-desc">{recommendedCar.car_model_year}</p>
//                           </div>
//                           <div className="logos-car">
//                             <i className="ri-palette-line"></i>
//                             <p className="logos-desc">{recommendedCar.car_color}</p>
//                           </div>
//                           <div className="logos-car">
//                             <i className="ri-group-line"></i>
//                             <p className="logos-desc">{getCapacity()}</p>
//                           </div>
//                         </div>
//                         <div className="detailcar-price">
//                           <p className="detailcar-totalprice">
//                             {recommendedCar.price}/
//                             <span className="detailcar-day"> day</span>
//                           </p>
//                           <button 
//                             className={`rentnowbtn ${!recommendedCar.availability ? 'disabled' : ''}`}
//                             disabled={!recommendedCar.availability}
//                           >
//                             {recommendedCar.availability ? 'Rent Now' : 'Unavailable'}
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default Cardetail;


// update code
// Cardetail.tsx
// Components/Cardetail.tsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import { getCar } from "../services/GlobalService";
import { Car } from "../@types/ApiResponses";
import "../Styles/Cardetail.css";
import Footer from "./Footer";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { getCarImages as getImageSet } from "../services/ImageService";

const Cardetail = () => {
  const { carName } = useParams<{ carName: string }>();
  const navigate = useNavigate();
  
  // State for main car
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // State for swiper
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  
  // State for related cars
  const [recentCars, setRecentCars] = useState<Car[]>([]);
  const [recommendedCars, setRecommendedCars] = useState<Car[]>([]);

  useEffect(() => {
    fetchCarData();
    fetchRelatedCars();
  }, [carName]);

  const fetchCarData = async () => {
    try {
      setLoading(true);
      const allCars = await getCar();
      
      // Find car by name from URL parameter
      const decodedCarName = carName?.replace(/-/g, ' ') || '';
      
      const foundCar = allCars.cars.find(c => {
        const carFullName = `${c.car} ${c.car_model}`.toLowerCase();
        return carFullName.includes(decodedCarName.toLowerCase()) ||
               c.car.toLowerCase().includes(decodedCarName.toLowerCase()) ||
               c.car_model.toLowerCase().includes(decodedCarName.toLowerCase());
      });

      if (foundCar) {
        setCar(foundCar);
      } else {
        setError("Car not found");
      }
    } catch (error) {
      console.error("Error fetching car:", error);
      setError("Failed to load car details");
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedCars = async () => {
    try {
      const allCars = await getCar();
      
      // Get recent cars (last 3 added)
      const recent = [...allCars.cars]
        .sort((a, b) => b.id - a.id)
        .slice(0, 3);
      setRecentCars(recent);
      
      // Get recommended cars
      const recommended = allCars.cars
        .filter(c => c.id !== car?.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
      setRecommendedCars(recommended);
    } catch (error) {
      console.error("Error fetching related cars:", error);
    }
  };

  // Get images for swiper
  const getCarImageSet = (carData: Car) => {
    // Get images from ImageService
    const imageSet = getImageSet(carData.car, carData.car_model);
    
    // Convert to swiper format
    return [
      { id: 1, src: imageSet.main, alt: `${carData.car} main image` },
      ...imageSet.thumbnails.map((img, index) => ({
        id: index + 2,
        src: img,
        alt: `${carData.car} thumbnail ${index + 1}`
      }))
    ];
  };

  // Helper functions
  const getCarType = (carData: Car) => {
    const carName = carData.car.toLowerCase();
    if (carName.includes('sport') || carName.includes('gt') || carData.car_model.toLowerCase().includes('gt')) {
      return 'Sport';
    } else if (carName.includes('suv') || carData.car_model.toLowerCase().includes('suv')) {
      return 'SUV';
    } else if (carName.includes('hatch') || carData.car_model.toLowerCase().includes('hatch')) {
      return 'Hatchback';
    } else if (carName.includes('sedan') || carData.car_model.toLowerCase().includes('sedan')) {
      return 'Sedan';
    } else if (carName.includes('mpv') || carData.car_model.toLowerCase().includes('mpv')) {
      return 'MPV';
    } else if (carName.includes('coupe') || carData.car_model.toLowerCase().includes('coupe')) {
      return 'Coupe';
    } else {
      return 'Car';
    }
  };

  const getTransmissionType = () => 'Manual';
  const getFuelType = () => 'Gasoline';
  
  const getCapacity = (carData: Car) => {
    const type = getCarType(carData);
    switch(type) {
      case 'Sport': return '2 Person';
      case 'SUV': return '6 Person';
      case 'MPV': return '8 Person';
      case 'Hatchback': return '4 Person';
      default: return '4 Person';
    }
  };

  const getFuelCapacity = (carData: Car) => {
    const type = getCarType(carData);
    switch(type) {
      case 'Sport': return '70L';
      case 'SUV': return '80L';
      case 'MPV': return '90L';
      case 'Hatchback': return '60L';
      default: return '70L';
    }
  };

  const handleCarClick = (clickedCar: Car) => {
    const slug = `${clickedCar.car.toLowerCase().replace(/\s+/g, '-')}-${clickedCar.car_model.toLowerCase().replace(/\s+/g, '-')}`;
    navigate(`/car/${slug}`);
    window.scrollTo(0, 0);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading car details...</p>
      </div>
    );
  }

  if (error || !car) {
    return (
      <div className="error-container">
        <p className="error-message">{error || "Car not found"}</p>
        <button 
          className="btn btn-primary"
          onClick={() => navigate('/carrent')}
        >
          Back to Cars
        </button>
      </div>
    );
  }

  // Get images for current car
  const carImages = getCarImageSet(car);

  return (
    <>
      <section className="Cardetail">
        <div className="parentdetailcar">
          {/* Left Sidebar - Filters */}
          <div className="type-leftside">
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

          {/* Right Content */}
          <div className="cardetail-right">
            <div className="container">
              <div className="row">
                {/* Car Images Swiper */}
                <div className="col-lg-6">
                  <div className="parentswiper">
                    <div className="main__swiper">
                      <Swiper
                        spaceBetween={10}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                      >
                        {carImages.map((image) => (
                          <SwiperSlide key={image.id}>
                            <div className="swipermainback">
                              <img 
                                src={image.src} 
                                alt={image.alt}
                                style={{ width: '100%', height: 'auto' }}
                              />
                              <div className="maintext">
                                <p className="textdetail">
                                  {car.car} {car.car_model} - {getCarType(car)}
                                </p>
                                <p className="textpara">
                                  {car.car_color} • {car.car_model_year} • {car.price}/day
                                </p>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                    
                    {/* Thumbnail Swiper */}
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
                        {carImages.map((image) => (
                          <SwiperSlide key={image.id}>
                            <img 
                              src={image.src} 
                              alt={image.alt}
                              style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </div>

                {/* Car Details */}
                <div className="col-lg-6">
                  <div className="fulldesc">
                    <div className="cardetailname">
                      <div className="detailnamecar">
                        <h2 className="cardetail-headcomp">
                          {car.car} {car.car_model}
                        </h2>
                        <i className="ri-heart-3-fill"></i>
                      </div>
                      
                      <div className="detailcar-favstars">
                        {[...Array(5)].map((_, i) => (
                          <i 
                            key={i}
                            className={`ri-star-${i < 4 ? 'fill' : 'line'} ${i === 4 ? 'greycolor' : ''}`}
                          ></i>
                        ))}
                        <p className="reviews">440+ Reviewer</p>
                      </div>
                      
                      <div className="cardetaildescription">
                        <p className="car-detail-text">
                          {car.car} {car.car_model} is a {getCarType(car)} car from {car.car_model_year}. 
                          It comes in {car.car_color} color and features {getTransmissionType().toLowerCase()} transmission.
                          {car.availability ? ' Currently available for rent.' : ' Currently not available.'}
                        </p>
                      </div>
                      
                      <div className="cartype">
                        <div className="type-car">
                          <p className="car-typedetail">Type Car</p>
                          <p className="car-typedetail">Steering</p>
                          <p className="car-typedetail">Capacity</p>
                          <p className="car-typedetail">Gasoline</p>
                        </div>
                        <div className="car-function">
                          <p className="car-sport">{getCarType(car)}</p>
                          <p className="car-sport">{getTransmissionType()}</p>
                          <p className="car-sport">{getCapacity(car)}</p>
                          <p className="car-sport">{getFuelCapacity(car)}</p>
                        </div>
                      </div>
                      
                      <div className="nissancar">
                        <div className="detailcar-price">
                          <p className="detailcar-totalprice">
                            {car.price}/
                            <span className="detailcar-day"> day</span>
                          </p>
                          <button
                            className={`rentnowbtn ${!car.availability ? 'disabled' : ''}`}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              if (car.availability) {
                                navigate("/payment", { state: { car } });
                              }
                            }}
                            disabled={!car.availability}
                          >
                            {car.availability ? 'Rent Now' : 'Not Available'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reviews Section */}
                <div className="col-lg-12">
                  <div className="reviews-section">
                    <div className="reviewcount">
                      <p className="review-head">Reviews</p>
                      <div className="review-no">2</div>
                    </div>
                    
                    <div className="people-review">
                      <div className="profile-review">
                        <div className="left-review">
                          <img
                            src="https://randomuser.me/api/portraits/men/1.jpg"
                            width={50}
                            height={50}
                            alt="Reviewer"
                          />
                          <div className="review-tag">
                            <h2 className="review-name">John Doe</h2>
                            <p className="review-role">Customer at Morent Rentals</p>
                          </div>
                        </div>
                        <div className="fav-reviewstars">
                          <p className="review-date">21 July 2022</p>
                          <div className="detailcar-favstars">
                            {[...Array(5)].map((_, i) => (
                              <i
                                key={i}
                                className={`ri-star-${i < 4 ? 'fill' : 'line'} changecolor`}
                              ></i>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="review-text">
                        We are very happy with the service from the MORENT App. 
                        Morent has a low price and also a large variety of cars with good and comfortable facilities. 
                        The service provided by the officers is also very friendly and polite.
                      </p>
                    </div>
                    
                    <div className="people-review">
                      <div className="profile-review">
                        <div className="left-review">
                          <img
                            src="https://randomuser.me/api/portraits/women/2.jpg"
                            width={50}
                            height={50}
                            alt="Reviewer"
                          />
                          <div className="review-tag">
                            <h2 className="review-name">Jane Smith</h2>
                            <p className="review-role">Customer at Morent Rentals</p>
                          </div>
                        </div>
                        <div className="fav-reviewstars">
                          <p className="review-date">15 August 2022</p>
                          <div className="detailcar-favstars">
                            {[...Array(5)].map((_, i) => (
                              <i
                                key={i}
                                className={`ri-star-${i < 5 ? 'fill' : 'line'} changecolor`}
                              ></i>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="review-text">
                        Excellent car rental experience! The {car.car} {car.car_model} was in perfect condition 
                        and drove beautifully. Will definitely rent from Morent again.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Recent Cars */}
                <div className="col-lg-12">
                  <div className="Recent-cars">
                    <h2 className="recent-head">Recent Cars</h2>
                    <button 
                      className="recent-view"
                      onClick={() => navigate('/carrent')}
                    >
                      View all
                    </button>
                  </div>
                </div>
                
                {/* Recent Cars Grid */}
                {recentCars.map((recentCar) => {
                  const recentImageSet = getImageSet(recentCar.car, recentCar.car_model);
                  return (
                    <div key={recentCar.id} className="col-lg-4 mb-4">
                      <div 
                        className="detail-carrent"
                        onClick={() => handleCarClick(recentCar)}
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="detail-desc">
                          <div className="fav-card">
                            <div className="head-name">
                              <h2 className="detail-head">
                                {recentCar.car} {recentCar.car_model}
                              </h2>
                              <p className="detail-carname">{getCarType(recentCar)}</p>
                            </div>
                            <i className={`ri-heart-${recentCar.availability ? '3-fill' : 'line nocolor'}`}></i>
                          </div>
                          <div className="carrentimg">
                            <img 
                              src={recentImageSet.main}
                              alt={`${recentCar.car} ${recentCar.car_model}`}
                              style={{ width: '100%', height: 'auto' }}
                            />
                          </div>
                          <div className="detailcar-logos">
                            <div className="logos-car">
                              <i className="ri-gas-station-fill"></i>
                              <p className="logos-desc">{getFuelCapacity(recentCar)}</p>
                            </div>
                            <div className="logos-car">
                              <i className="ri-loader-3-line"></i>
                              <p className="logos-desc">{getTransmissionType()}</p>
                            </div>
                            <div className="logos-car">
                              <i className="ri-group-line"></i>
                              <p className="logos-desc">{getCapacity(recentCar)}</p>
                            </div>
                          </div>
                          <div className="detailcar-price">
                            <p className="detailcar-totalprice">
                              {recentCar.price}/
                              <span className="detailcar-day"> day</span>
                            </p>
                            <button 
                              className={`rentnowbtn ${!recentCar.availability ? 'disabled' : ''}`}
                              disabled={!recentCar.availability}
                            >
                              {recentCar.availability ? 'Rent Now' : 'Unavailable'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Recommended Cars */}
                <div className="col-lg-12">
                  <div className="Recent-cars">
                    <h2 className="recent-head">Recommended Cars</h2>
                    <button 
                      className="recent-view"
                      onClick={() => navigate('/carrent')}
                    >
                      View all
                    </button>
                  </div>
                </div>
                
                {/* Recommended Cars Grid */}
                {recommendedCars.map((recommendedCar) => {
                  const recommendedImageSet = getImageSet(recommendedCar.car, recommendedCar.car_model);
                  return (
                    <div key={recommendedCar.id} className="col-lg-4 mb-4">
                      <div 
                        className="detail-carrent"
                        onClick={() => handleCarClick(recommendedCar)}
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="detail-desc">
                          <div className="fav-card">
                            <div className="head-name">
                              <h2 className="detail-head">
                                {recommendedCar.car} {recommendedCar.car_model}
                              </h2>
                              <p className="detail-carname">{getCarType(recommendedCar)}</p>
                            </div>
                            <i className={`ri-heart-${recommendedCar.availability ? '3-fill' : 'line nocolor'}`}></i>
                          </div>
                          <div className="carrentimg">
                            <img 
                              src={recommendedImageSet.main}
                              alt={`${recommendedCar.car} ${recommendedCar.car_model}`}
                              style={{ width: '100%', height: 'auto' }}
                            />
                          </div>
                          <div className="detailcar-logos">
                            <div className="logos-car">
                              <i className="ri-gas-station-fill"></i>
                              <p className="logos-desc">{getFuelCapacity(recommendedCar)}</p>
                            </div>
                            <div className="logos-car">
                              <i className="ri-loader-3-line"></i>
                              <p className="logos-desc">{getTransmissionType()}</p>
                            </div>
                            <div className="logos-car">
                              <i className="ri-group-line"></i>
                              <p className="logos-desc">{getCapacity(recommendedCar)}</p>
                            </div>
                          </div>
                          <div className="detailcar-price">
                            <p className="detailcar-totalprice">
                              {recommendedCar.price}/
                              <span className="detailcar-day"> day</span>
                            </p>
                            <button 
                              className={`rentnowbtn ${!recommendedCar.availability ? 'disabled' : ''}`}
                              disabled={!recommendedCar.availability}
                            >
                              {recommendedCar.availability ? 'Rent Now' : 'Unavailable'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
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