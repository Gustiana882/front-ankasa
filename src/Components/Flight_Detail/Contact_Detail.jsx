import "./flight.scoped.css";
import React, { useState } from "react";
// import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Cards(props) {
    return (
        <div className="mt-4 card p-4">
            <div className="user-box">
            <input
              type="username"
              name="username"
              required
            />
            <label>Full Name</label>
          </div>
          
          <div className="input-group mb-3">
  <button
    className="btn btn-outline-secondary dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Dropdown
  </button>
  <ul className="dropdown-menu">
    <li>
      <a className="dropdown-item" href="#">
        Action
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
        Another action
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
        Something else here
      </a>
    </li>
    <li>
      <hr className="dropdown-divider" />
    </li>
    <li>
      <a className="dropdown-item" href="#">
        Separated link
      </a>
    </li>
  </ul>
  <input
    type="text"
    className="form-control"
    aria-label="Text input with dropdown button"
  />
</div>



            <div className="d-grid">
                <h6 className="m-0 poppins-reguler p-1">Full Name</h6>
                <input type="text" className="search-box p-1 poppins-bold" placeholder="Nama Lengkap" />
            </div>
            <div className="d-grid mt-5">
                <h6 className="m-0 poppins-reguler p-1">Email</h6>
                <input type="text" className="search-box p-1 poppins-bold" placeholder="Email Pengguna" />
            </div>
            <div className="d-grid mt-5">
                <h6 className="m-0 poppins-reguler p-1">Phone Number</h6>
                <input type="text" className="search-box p-1 poppins-bold" placeholder="Phone Number" />
            </div>
            <div className="mt-5 card trust-box p-3 align-items-center">
                <img className="img-danger" src="https://res.cloudinary.com/dyli6i0pw/image/upload/v1629480838/Assets%20Ticket/danger_zebly2.png" alt="" />
                <h6 className="m-0 poppins-reguler px-3">Make sure the customer data is correct</h6>
            </div>
        </div>
    )
  
}

export default Cards;
