import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';
import './style/NavbarHeader.scoped.css';
import Tools from './Tools';
import { Link } from 'react-router-dom';
import Menus from './Menus';
import { useState } from 'react';
// import { FaBars } from 'react-icons/fa';
import Alert from '../Toats/Toats';

const NavbarHeader = () => {
	const [showMenus, setShowMenus] = useState(false);

	return (
		<div>
			<Alert />
			<Navbar expand="sm" className="header">
				<Link to="/home" style={{ textDecoration: 'none' }}>
					<Navbar.Brand className="brand">
						<img
							src="https://res.cloudinary.com/calvin-cloud/image/upload/v1629405150/Ankasa/logo_ankasa_xc7uai.svg"
							alt=""
						/>
						<span style={{ fontWeight: "bolder", marginLeft: "3px"}}>Ankasa</span>
					</Navbar.Brand>
				</Link>
				<div className="menus-dropdown" id={showMenus ? 'hidden' : 'show'}>
					<ul>
						<Link
							to="/search"
							style={{ textDecoration: 'none', color: 'black' }}
						>
							<li>Find Ticket</li>
						</Link>

						<Link
							to="/mybooking"
							style={{ textDecoration: 'none', color: 'black' }}
						>
							<li>My Booking</li>
						</Link>
						<li>Notifications</li>
						<li>Messages</li>
						<Link
							to="/profile"
							style={{ textDecoration: 'none', color: 'black' }}
						>
							<li>My Profile</li>
						</Link>
					</ul>
				</div>
				<div className="navbar-inside">
					<Navbar className="basic-navbar" id="basic-navbar-nav">
						<Tools className="tools"/>
						<div className="menus">
							<Menus />
						</div>

						<button
							className="toggle-btn"
							onClick={() => setShowMenus(!showMenus)}
						>
							{/* <FaBars className="bars" /> */}
							<svg width={28} height={28} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M21 10H7" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
								<path d="M21 6H3" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
								<path d="M21 14H3" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
								<path d="M21 18H7" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</button>
					</Navbar>
				</div>
			</Navbar>
		</div>
	);
};

export default NavbarHeader;
