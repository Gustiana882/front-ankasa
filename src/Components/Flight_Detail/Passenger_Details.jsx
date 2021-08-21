import "./flight.scoped.css"
import React, { useState } from 'react'
// import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"

function Cards(props) {

    return (
        <div className="mt-4 card p-4">
            <div className="card pass-details-box p-3 align-items-center justify-content-between">
                <div>
                    <h6 className="m-0 poppins-reguler">Passenger : 1 Adult</h6>
                </div>
                <div className="d-flex align-items-center">
                    <h6 className="m-0 poppins-reguler px-3">Same as contact person</h6>
                    <div className="form-check form-switch m-0 p-0 align-items-center align-content-center justify-content-center text-center">
                        <input className="form-check-input m-0 p-0" type="checkbox" id="flexSwitchCheckDefault" />
                    </div>
                </div>
            </div>
            <div className="d-grid mt-5">
                <h6 className="m-0 poppins-reguler p-1">Title</h6>
                <input type="text" className="search-box p-1 poppins-bold" placeholder="Nama Lengkap" />
            </div>
            <div className="d-grid mt-5">
                <h6 className="m-0 poppins-reguler p-1">Full Name</h6>
                <input type="text" className="search-box p-1 poppins-bold" placeholder="Email Pengguna" />
            </div>
            <div className="d-grid mt-5">
                <h6 className="m-0 poppins-reguler p-1">Nationality</h6>
                <input type="text" className="search-box p-1 poppins-bold" placeholder="Phone Number" />
            </div>
        </div>
    )
}

export default Cards