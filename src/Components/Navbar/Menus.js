import './style/Menus.scoped.css';
import { Container, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import React from 'react';
import SignupButton from './SignupButton';
import MenusAfterLogin from './MenusAfterLogin';

const Menus = () => {
	return (
		<div>
			<Nav className="me-auto menu-before-login d-flex">
				<ul className="menu">
					<li>
						<Button className="menu-button">Find Ticket</Button>
					</li>
					<li>
						<Button className="menu-button">My Booking</Button>
					</li>
				</ul>
				<SignupButton />
				{/* <MenusAfterLogin /> */}
			</Nav>
		</div>
	);
};

export default Menus;
