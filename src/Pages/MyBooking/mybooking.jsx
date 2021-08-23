import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './mybooking.scoped.css';
// import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from "axios"
import Footer from '../../Components/Footer/Footer';
import NavbarHeader from '../../Components/Navbar/NavbarHeader';
// import ContactDetail from '../../Components/Flight_Detail/Contact_Detail';
// import PassengerDetail from '../../Components/Flight_Detail/Passenger_Details';
import Profile from '../../Components/Sidenav/sidenav';
import MbCard from '../../Components/MyBookingCard/MbCard';

function Flight(props) {
	return (
		<div>
			<div className="header">
				<NavbarHeader />
			</div>

			<Container fluid="md" style={{ marginTop: '100px' }}>
				<Row>
					<div className="col-4 card-mod">
						<Profile />
					</div>

					<div className="col-8">
						<MbCard />
					</div>
				</Row>
			</Container>

			<div className="footer">
				<Footer />
			</div>
		</div>
	);
}

export default Flight;
