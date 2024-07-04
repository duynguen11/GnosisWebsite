import React from "react";
import "./AboutUs.css";
import Logolist from "./assets/Component 2.png";
import Header from "./Header";
import Contact from "./Contact";
import Footer from "./Footer";

function AboutUs() {
  return (
    <>
      <Header />
      <div className="about-block">
        <h1 className="title-about">ABOUT US</h1>
        <div className="section-about">
          <p className="info-about">
            <blockquote>
              ICLS Education was established in 2010 by a team
            </blockquote>
            <blockquote>
              of experts from both Vietnam and foreign countries
            </blockquote>
            <blockquote>
              such as the US, Australia, Korea, Japan and New Zealand.
            </blockquote>
            <blockquote>
              With 13 years of experience, this organization
            </blockquote>
            <blockquote>
              has built a reputable base in the field of education,
            </blockquote>
            especially teaching knowledge related to technology and economics.
          </p>
        </div>
        <div className="logo-list">
          <img src={Logolist} width="100%" height="120px" alt="rectangle-img" />
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default AboutUs;
