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
	const { email } = useSelector((state) => state.login);
	const dispatch = useDispatch();
	const urlUser = `${process.env.REACT_APP_API}/user/${email}`;
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
			<Container>
				<Nav className="me-auto menu-after-login">
					<Container className="menu-icon">
						<FaShoppingCart />
					</Container>

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
							{/* <Dropdown.Item onClick={() => dispatch(logout())}>
								Logout
							</Dropdown.Item>
							<Dropdown.Item onClick={() => dispatch(logout())}>
								{user ? (
									<span>{user[0].name}'s Profile</span>
								) : (
									<span>loading</span>
								)}
							</Dropdown.Item> */}
						</Dropdown.Menu>
					</Dropdown>
				</Nav>
			</Container>
		</div>
	);
};

export default MenusAfterLogin;
