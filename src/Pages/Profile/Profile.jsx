import "./Profile.scoped.css";
import { useState } from "react";
import FormData from "form-data";
import Sidenav from "../../Components/Sidenav/sidenav";
import Footer from "../../Components/Footer/Footer";
import axios from 'axios'

const Profile = () => {
  const [getImage, setImage] = useState([]);
  return (
    <body>
      <header />
      <section>
        <h6 className="color-blue">P R O F I L E</h6>
        <h1>Profile</h1>
        <div className="d-flex form">
          <div className="contact">
            <h4>Contact</h4>
            <div className="user-box">
              <input type="email" name="email" id="email" required />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input type="tel" name="phone" id="phone" required />
              <label>Phone</label>
            </div>
            <div className="d-flex m-4 justify-content-end">
              <p className="color-blue fw-bold px-5">Account Settings</p>
              <i className="color-blue bi bi-chevron-right" />
            </div>
          </div>
          <div className="biodata">
            <h4>Biodata</h4>
            <div className="user-box">
              <input type="username" name="username" id="username" required />
              <label>Username</label>
            </div>
            <div className="user-box pt-4">
              <label className="lh-1">City</label>
              <select name="posCode" id="posCode">
                <option value="Medan">Medan</option>
              </select>
            </div>
            <div className="user-box">
              <input type="text" name="address" id="address" required />
              <label>Address</label>
            </div>
            <div className="user-box">
              <input
                type="number"
                name="pos code"
                id="pos code"
                min="0"
                required
              />
              <label>Post Code</label>
            </div>
            <button type="submit" className="btn button-save float-end">
              Save
            </button>
          </div>
        </div>
      </section>
      <aside>
        <Sidenav 
          // images={value.images}
          // changePhoto={changePhoto}
        />
      </aside>
      <footer>
        <Footer />
      </footer>
    </body>
  );
};

export default Profile;
