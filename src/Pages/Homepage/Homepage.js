import React from "react";
import { BrowserView } from "react-device-detect";
import Navbar from "../../Components/Navbar/Navbar";
import "./Homepage.css";

const Homepage = () => {
  return (
    <React.Fragment>
      <BrowserView>
        <div className="homepage-main-container">
          <Navbar />
        </div>
      </BrowserView>
    </React.Fragment>
  );
};

export default Homepage;
