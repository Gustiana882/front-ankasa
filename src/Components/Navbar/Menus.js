import './style/Menus.scoped.css';
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';
import SignupButton from './SignupButton';
import MenusAfterLogin from './MenusAfterLogin';
import { useHistory } from 'react-router';

const Menus = () => {
	const { isAuth } = useSelector((state) => state.loginReducer);
	const history = useHistory();
	return (
		<div>
			<Nav className="menu-before-login">
				<ul className="menu">
					<li>
						<Button
							className="menu-button"
							onClick={() => history.push('/search')}
						>
							Find Ticket
						</Button>
					</li>
					<li>
						<Button
							className="menu-button"
							onClick={() => history.push('/mybooking')}
						>
							My Booking
						</Button>
					</li>
				</ul>

				{isAuth ? <MenusAfterLogin /> : <SignupButton />}
			</Nav>
		</div>
	);
};

export default Menus;
