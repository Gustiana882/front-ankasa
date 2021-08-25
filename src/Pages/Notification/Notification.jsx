import React from 'react';
import { connect } from 'react-redux';
import './Notif.scoped.css';
import Navbar from '../../Components/Navbar/NavbarHeader';
import Footer from '../../Components/Footer/Footer';

export const Notification = (props) => {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<div className="container content card">
				<div className="m-5 px-5">
					<h6 className="text-blue">N o t i f i c a t i o n s</h6>
					<div className="d-flex justify-content-between">
						<h3>Notifications</h3>
						<h6 className="text-blue pointer">Clear</h6>
					</div>
					<br /> <br />
					<div className="card bg-blue p-2">
						<h5 className="card-title text-blue">Congatulations</h5>
						<p className="card-text text-secondary">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. sed do
							eiusmod tempor incididunt ut labore....
						</p>
						<p className="card-text text-secondary">5h ago</p>
					</div>
					<br />
					<div className="card bg-blue p-2">
						<h5 className="card-title text-blue">Ticket Booked</h5>
						<p className="card-text text-secondary">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. sed do
							eiusmod tempor incididunt ut labore....
						</p>
						<p className="card-text text-secondary">1 June 2020, 12.33 A.M</p>
					</div>
					<br />
					<div className="card  p-2">
						<h5 className="card-title text-dark">Continue Payment</h5>
						<p className="card-text text-secondary">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. sed do
							eiusmod tempor incididunt ut labore....
						</p>
						<p className="card-text text-secondary">4 May 2020, 10:43 AM</p>
					</div>
					<br />
					<div className="card p-2">
						<h5 className="card-title text-dark">Maintenance</h5>
						<p className="card-text text-secondary">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. sed do
							eiusmod tempor incididunt ut labore....
						</p>
						<p className="card-text text-secondary">4 May 2020, 10:43 AM</p>
					</div>
				</div>
			</div>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Notification);
