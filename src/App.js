import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/Slider/Slider";
import Itemsection from "./Components/Section/Itemsection";
import Baner from "./Components/Baner/Baner";
import Offers from "./Components/Offers/Offer";
import Testimonial from "./Components/Testimonial/Testimonial";
import Menu from "./Components/Menu/Menu";
import Digitel from "./Components/Digitel/Digitel";
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";
import Calculator from "./Components/calculator/calculator";

function App() {
  return (
    <div className="parent">
      <Navbar />
      <Itemsection />
      <Baner />
      <Offers />
      <Testimonial />
      <Cards />
      <Slider />
      {/* <Calculator /> */}
      {/* <Menu /> */}
      {/* <Digitel /> */}
      <Footer />
      <div className="height"></div>
    </div>
  );
}
export default App;
{
  /* <div data-aos="zoom-out-up"></div> */
}
