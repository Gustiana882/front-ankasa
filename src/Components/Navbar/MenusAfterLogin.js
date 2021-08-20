import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { FaShoppingCart, FaBell, FaEnvelope } from 'react-icons/fa';
import './style/MenusAfterLogin.scoped.scss';
import { useDispatch } from 'react-redux';
// import { logout } from '../Logins/loginSlice';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
const MenusAfterLogin = () => {
	const [user, setUser] = useState('');

	const dispatch = useDispatch();
	// useEffect(() => {
	// 	axios.get(urlUser).then((res) => {
	// 		console.log(res.data);

	// 		const { data } = res.data;
	// 		const value = [];
	// 		data.map((val) => {
	// 			return value.push(val);
	// 		});

	// 		if (value) setUser(value);
	// 	});
	// }, [urlUser]);

	return (
		<div>
			<Nav className="me-auto menu-after-login">
				<Nav>
					<Container className="menu-icon">
						<FaBell />
					</Container>
				</Nav>
				<Nav>
					<Container className="menu-icon">
						<FaEnvelope />
					</Container>
				</Nav>
				<Dropdown>
					<Nav className="photo-box">
						<Dropdown.Toggle variant="none">
							<img
								src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627339637/Front%20End/profile_yzozml.jpg"
								alt="profile"
							/>
						</Dropdown.Toggle>
					</Nav>
					<Dropdown.Menu>
						<Dropdown.Item>Logout</Dropdown.Item>
						<Dropdown.Item>User</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Nav>
		</div>
	);
};

export default MenusAfterLogin;
