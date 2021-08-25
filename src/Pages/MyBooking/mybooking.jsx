import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import './mybooking.scoped.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../Components/Footer/Footer';
import NavbarHeader from '../../Components/Navbar/NavbarHeader';
import Profile from '../../Components/Sidenav/sidenav';
import MbCard from '../../Components/MyBookingCard/MbCard';
import axios from 'axios';

function Flight(props) {

	const [Mybooking, setMybooking] = useState([])
	const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjI5ODUwODczLCJleHAiOjE2Mjk5MzcyNzN9.LaoJbWNL4oz01mzej8fQr22aRWgsYyABZ16jj6PJO3E'

	const getMybooking = () => {
		axios({
		  method: 'get',
		  url: `${process.env.REACT_APP_API}/my-booking`,
		  headers: {
			  'token': token,
		  }
		}).then(result => {
		  setMybooking(result.data.result)
		})
		.catch((error) => console.log(error))
	  }
	
	  useEffect(() => {
		getMybooking()
	  }, [])
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
						<MbCard data={Mybooking}/>
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
