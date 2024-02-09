import React from "react";
import "./myreservation.css";
import { Link } from "react-router-dom";
const ReservationItem = () => {
  return (
    <div className="searchItem">
      <img src="" alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">chedlt</h1>
        <span className="siDistance">m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">desccc</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>ccccccc</button>
        </div>

        <div className="siDetailTexts">
          <span className="siPrice">$cccccc</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/cc`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReservationItem;
