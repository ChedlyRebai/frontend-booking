import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import "./myreservation.css";
import ReservationItem from "./ReservationItem";
const Myreservation = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <ReservationItem />
      </div>
    </div>
  );
};

export default Myreservation;
