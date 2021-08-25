import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import './mybooking.scoped.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../Components/Footer/Footer';
import NavbarHeader from '../../Components/Navbar/NavbarHeader';
import Profile from '../../Components/Sidenav/sidenav';
import MbCard from '../../Components/MyBookingCard/MbCard';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Flight(props) {
	const { token } = useSelector((state) => state.loginReducer);
	const [Mybooking, setMybooking] = useState([]);

	useEffect(() => {
		axios({
			method: 'get',
			url: `${process.env.REACT_APP_API}/my-booking`,
			headers: {
				token: token,
			},
		})
			.then((result) => {
				setMybooking(result.data.result);
			})
			.catch((error) => console.log(error));
	}, [token]);
	return (
		<div>
			<div className="header">
				<NavbarHeader />
			</div>

			<Container fluid="md" style={{ marginTop: '100px' }}>
				<Row>
					<div className="col-12 col-md-6 col-lg-4 card-mod">
						<Profile />
					</div>

					<div className="col-12 col-md-6 col-lg-8">
						<MbCard data={Mybooking} />
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
