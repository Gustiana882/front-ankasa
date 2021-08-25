import "./flight.scoped.css";
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Cards(props) {
  const [destination, setDestination] = useState([])

  function handleChange (e) {
    let name = e.target.name;
    let value = e.target.value;
    props.callback({ [name]: value })
  }

  const getDestination = () => {
      axios({
          method: 'get',
          url: `${process.env.REACT_APP_API}/destination/all`
      }).then(result => setDestination(result.data.result))
  .catch((error) => console.log(error))
  }

  useEffect(() => {
    getDestination()
  },[])

  return (
    <div className="mt-4 card p-4">
      <div className="card pass-details-box p-3 align-items-center justify-content-between">
        <div>
          <h6 className="m-0 poppins-reguler">Passenger : 1 Adult</h6>
        </div>
        <div className="d-flex align-items-center">
          <h6 className="m-0 poppins-reguler px-3">Same as contact person</h6>
          <div className="form-check form-switch m-0 p-0 align-items-center align-content-center justify-content-center text-center">
            <input
              className="form-check-input m-0 p-0"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
      </div>
      <div className="user-box mt-3 pt-4">
        <label className="lh-1">Title</label>
        <select name="title" id="title" className="mt-2 w-100">
          <option value="Mr">Mr.</option>
          <option value="Mrs">Mrs.</option>
        </select>
      </div>
      <div className="user-box mt-3 pt-4 d-grid">
        <input type="text" name="namePassenger" onChange={handleChange} required />
        <label>Full Name</label>
      </div>
      <div className="user-box mt-3 pt-4">
        <label className="lh-1">Nationality</label>
        <select name="nationality" id="destination" onChange={handleChange} className="mt-2 w-100">
          {
            destination.map((val, i) => {
              return (<option value={val.country} key={i} >{val.city} ({val.country})</option>)
            })
          }
        </select>
      </div>
    </div>
  );
}

export default Cards;
