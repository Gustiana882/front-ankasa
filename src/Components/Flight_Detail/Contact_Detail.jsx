import "./flight.scoped.css";
import React, { useState } from "react";
// import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Cards(props) {
  return (
    <div className="mt-4 card p-4">
      <div className="d-grid">
        <h6 className="m-0 poppins-reguler p-1">Full Name</h6>
        <input
          type="text"
          className="search-box p-1 poppins-bold"
          placeholder="Nama Lengkap"
        />
      </div>
      <div className="d-grid mt-5">
        <h6 className="m-0 poppins-reguler p-1">Email</h6>
        <input
          type="text"
          className="search-box p-1 poppins-bold"
          placeholder="Email Pengguna"
        />
      </div>
      <div className="d-grid mt-5">
        <h6 className="m-0 poppins-reguler p-1">Phone Number</h6>
        <input
          type="text"
          className="search-box p-1 poppins-bold"
          placeholder="Phone Number"
        />
      </div>
      <div className="mt-5 card trust-box p-3 align-items-center">
        <img
          className="img-danger"
          src="https://res.cloudinary.com/dyli6i0pw/image/upload/v1629480838/Assets%20Ticket/danger_zebly2.png"
          alt=""
        />
        <h6 className="m-0 poppins-reguler px-3">
          Make sure the customer data is correct
        </h6>
      </div>
    </div>
  );
}

export default Cards;
