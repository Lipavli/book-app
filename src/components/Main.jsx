import React from "react";
import HowItWorks from "./HowItWorks";
import Explore from "./Explore";
import { Element } from "react-scroll";
import "../styles/style.css";


const Main = () => {
  return (
    <div className="main">
      <Element name="section2">
        <HowItWorks />
      </Element>
      <Element name="section3">
        <Explore />
      </Element>
    </div>
  );
};

export default Main;
