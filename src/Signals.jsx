import React from "react";
import "./Signals.css";
import Header from "./Header";
import Contact from "./Contact";
import Footer from "./Footer";

function Signals() {
  return (
    <>
      <Header />
      <div className="signals-side">
        <h1 className="title-signals">SIGNALS</h1>
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default Signals;
