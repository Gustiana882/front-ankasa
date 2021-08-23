import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { FaShoppingCart, FaBell, FaEnvelope } from 'react-icons/fa';
import './style/MenusAfterLogin.scoped.css';
import { useDispatch } from 'react-redux';
import { logout } from '../../Storages/Slices/loginSlice';
// import { logout } from '../Logins/loginSlice';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router';
const MenusAfterLogin = () => {
	const [user, setUser] = useState('');
	const dispatch = useDispatch();
	const { email } = useSelector((state) => state.loginReducer);
	const history = useHistory();
	const url = `${process.env.REACT_APP_API}/user/${email}`;
	const [image, setImage] = useState('');
	const { token } = useSelector((state) => state.loginReducer);

	useEffect(() => {
		axios
			.get(url, {
				headers: {
					token: token,
				},
			})
			.then((res) => {
				setImage(res.data.result[0].image);
			});
	}, [url, token]);

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
							<img src={image} alt="profile" />
						</Dropdown.Toggle>
					</Nav>

					<Dropdown.Menu>
						<Dropdown.Item onClick={() => dispatch(logout())}>
							Logout
						</Dropdown.Item>

						<Dropdown.Item>
							<Link
								to="/profile"
								style={{ textDecoration: 'none', color: 'black' }}
							>
								My Profile
							</Link>
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Nav>
		</div>
	);
};

export default MenusAfterLogin;
