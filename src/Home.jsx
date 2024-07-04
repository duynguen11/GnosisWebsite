import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import ImgHome from "./assets/Group 1.png";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Header />
      <div
        id="home"
        className="d-flex justify-content-center align-items-center home-section"
      >
        <img
          width="1392"
          height="353"
          src={ImgHome}
          alt="hinhanh-trangchu"
          className="img-fluid home-bg"
        />
      </div>
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
