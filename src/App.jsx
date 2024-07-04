import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Signals from "./Signals";
import Trader from "./Trader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageBlog from "./PageBlog";
import PageContact from "./ContactPage";
import AboutUs from "./AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<PageBlog />} />
          <Route path="/signals" element={<Signals />} />
          <Route path="/contact" element={<PageContact />} />
          <Route path="/trader-hub" element={<Trader />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
