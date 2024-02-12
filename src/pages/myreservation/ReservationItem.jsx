import React from "react";
import { Link } from "react-router-dom";
import "./myreservation.css";

const ReservationItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img
        src={`${item.hotel.photos && item.hotel.photos[0]}`}
        alt={`${item.hotel.name}`}
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.hotel.name}</h1>
        <span className="siDistance">{item.hotel.desc}</span>

        {/* <span className="siTaxiOp">Free airport taxi</span>*/}
        <span className="siSubtitle">{item.room.title}</span>
        <span className="siFeatures">
          From {new Date(item.reservation.checkInDate).toLocaleDateString()} To{" "}
          {new Date(item.reservation.checkOutDate).toLocaleDateString()}{" "}
        </span>
        <span className="siCancelOp"> </span>
        <span className="siCancelOpSubtitle">
          Reserved in {new Date(item.reservation.createdAt).toLocaleDateString()}
          {item.user && (
            <>
              <span > by {item.user.username} {' '}</span>
              <br />
              <span>email: {item.user.email}</span>
            </>
          )}
          <br />
          {item.hotel.city}
          {item.hotel.address}
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <div></div>
          <span>{item.hotel.type}</span>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">${item.reservation.totalPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item.hotel._id}`}>
            <button className="siCheckButton">Hotel</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReservationItem;
