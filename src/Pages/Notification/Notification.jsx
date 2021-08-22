import React from "react";
import { connect } from "react-redux";
import "./Notif.scoped.css"
import Navbar from "../../Components/Navbar/NavbarHeader";
import Footer from "../../Components/Footer/Footer";

export const Notification = (props) => {
  return (
    <>
    <body>
        <header>
        <Navbar />
        </header>
      <div className="container content card">
        <h6 className="text-blue">N o t i f i c a t i o n s</h6>
        <div className="d-flex justify-content-between">
        <h3>Notifications</h3>
        <h6 className="text-blue pointer">Clear</h6>
        </div>
        <div className="m-5 px-5">
          <div className="card bg-blue p-2">
            <h5 className="card-title text-blue">Title</h5>
            <p className="card-text text-secondary">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text text-secondary">3 mins ago</p>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </body>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);
