import React from "react";
import "../Styles/Footer.css";
import headerlogo from "../Assests/headerlogo.webp";
const Footer = () => {
  return (
    <section className="Footer">
      <div className="custom-container">
        <div className="row">
            <div className="col-lg-6">
          <div className="header-logo">
              <img src={headerlogo} width={200} />
              <p className="footer-para">Our vision is to provide convenience and help increase your sales business.</p>
            </div>

            </div>
            <div className="col-lg-2">
                 <h2 className="footlist-head">About</h2>
                <ul className="footlist">
                    <li><a href="#">How it works</a></li>
                    <li><a href="#">Featured</a></li>
                    <li><a href="#">Partnership</a></li>
                    <li><a href="#">Bussiness Relation</a></li>


                </ul>


            </div>
              <div className="col-lg-2">
                 <h2 className="footlist-head">Community</h2>
                <ul className="footlist">
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Podcast</a></li>
                    <li><a href="#">Invite a friend</a></li>


                </ul>

            </div>
              <div className="col-lg-2">
                 <h2 className="footlist-head">Socials</h2>
                <ul className="footlist">
                    <li><a href="#">Discord</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Facebook</a></li>


                </ul>

            </div>
            <div className="col-lg-12">
                <div className="borderfooter"></div>


            </div>
            <div className="col-lg-8">
            <div className="footercopyright">
                <a href="#">©2022 MORENT. All rights reserved</a>

            </div>
            </div>
            <div className="col-lg-2">
                <div className="privacy">
                    <a href="#">Privacy & Policy</a>

                </div>

            </div>
             <div className="col-lg-2">
                <div className="privacy">
                    <a href="#">Terms & Condition</a>

                </div>

            </div>

            
        </div>
      </div>
    </section>
  );
};

export default Footer;
