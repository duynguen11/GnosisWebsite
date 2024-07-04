import React from "react";
import "./Trader.css";
import Header from "./Header";
import Contact from "./Contact";
import Footer from "./Footer";

function Trader() {
    return (
      <>
        <Header />
        <div className="trader-side">
          <h1 className="title-trader">TRADER' S</h1>
          <h1 className="title-trader">HUB</h1>
        </div>
        <Contact />
        <Footer />
      </>
    );
  }
  
  export default Trader;