import './style/menusBeforeLogin.scoped.scss';
import { Container, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import React from 'react';

const MenusBeforeLogin = () => {
	return (
		<div>
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

					<Button className="signup-button">SignUp</Button>
				</Nav>
			</div>
		</div>
	);
};

export default MenusBeforeLogin;
