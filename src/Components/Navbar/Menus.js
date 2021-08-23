import './style/Menus.scoped.css';
import { Container, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';
import SignupButton from './SignupButton';
import MenusAfterLogin from './MenusAfterLogin';

const Menus = () => {
	const { isAuth } = useSelector((state) => state.loginReducer);
	return (
		<div>
			<Nav className="menu-before-login">
				<ul className="menu">
					<li>
						<Button className="menu-button">Find Ticket</Button>
					</li>
					<li>
						<Link to="/mybooking" style={{ textDecoration: 'none' }}>
							<Button className="menu-button">My Booking</Button>
						</Link>
					</li>
				</ul>
				{isAuth ? <MenusAfterLogin /> : <SignupButton />}
			</Nav>
		</div>
	);
};

export default Menus;
