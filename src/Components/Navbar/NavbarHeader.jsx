import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container } from 'react-bootstrap';
import './style/NavbarHeader.scoped.css';
import Tools from './Tools';
import MenusAfterLogin from './MenusAfterLogin';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Menus from './Menus';
import { useLocation } from 'react-router';

const NavbarHeader = () => {
	// const location = useLocation();
	// const { isAuth } = useSelector((state) => state.login);

	return (
		<div>
<<<<<<< HEAD
			<Navbar expand="sm" className="header">
				<Navbar.Brand className="brand">
					<img
						src="https://res.cloudinary.com/calvin-cloud/image/upload/v1629405150/Ankasa/logo_ankasa_xc7uai.svg"
						alt=""
					/>
					<span>Ankasa</span>
				</Navbar.Brand>

				<div className="navbar-inside">
					<Navbar className="basic-navbar" id="basic-navbar-nav">
						<Tools />
						<Menus />
					</Navbar>
				</div>
			</Navbar>
=======
			<div className="navbar">
				<Navbar expand="lg">
					<Navbar.Brand className="brand">
						<img
							src="https://res.cloudinary.com/calvin-cloud/image/upload/v1629405150/Ankasa/logo_ankasa_xc7uai.svg"
							alt=""
						/>
						Ankasa
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="navbar-collapse" />
					<Container className="navbar-inside">
						<Navbar.Collapse className="basic-navbar" id="basic-navbar-nav">
							<Tools />
							<Menus />
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
>>>>>>> cd9c56accfe066871a48c107831c0078209d50f1
		</div>
	);
};

export default NavbarHeader;
