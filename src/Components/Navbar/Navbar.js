import React from "react";
import { BrowserView } from "react-device-detect";
import "./Navbar.css";
import ic_person from "../../Assets/Icons/ic_person.svg";
import ic_heart from "../../Assets/Icons/ic_heart.svg";
import ic_search from "../../Assets/Icons/ic_search.svg";
import ic_lock from "../../Assets/Icons/ic_lock.svg";
import ic_arrow_down from "../../Assets/Icons/ic_arrow_down.svg";

const Navbar = () => {
  const Currrencies = [
    { INR: "₹" },
    { AUD: "AU$" },
    { GBP: "£" },
    { CAD: "CA$" },
    { EUR: "€" },
    { HKD: "HK$" },
    { SGD: "S$" },
    { USD: "$" },
  ];
  return (
    <React.Fragment>
      <BrowserView>
        <div className="navbar-container-main">
          <div className="navbar-main-child">
            <div className="navbar-currency-child">
              <select className="navbar-currency-select">
                {Currrencies.map((cr) => {
                  return <option>{Object.keys(cr)}</option>;
                })}
              </select>
              <img src={ic_arrow_down} className="arrow-down-menu" />
            </div>
            <div className="navbar-logo-child">
              <span className="main-logo-text">Deepaks popup shop</span>
            </div>
            <div className="navbar-cart-child">
              <img src={ic_search} className="navbar-basic-icon" />
              <img src={ic_heart} className="navbar-basic-icon" />
              <img src={ic_person} className="navbar-basic-icon" />
              <img src={ic_lock} className="navbar-basic-icon" />
            </div>
          </div>
        </div>
      </BrowserView>
    </React.Fragment>
  );
};

export default Navbar;
