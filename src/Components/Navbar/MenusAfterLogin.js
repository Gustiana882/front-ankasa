import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { FaBell, FaEnvelope } from 'react-icons/fa';
import './style/MenusAfterLogin.scoped.css';
import { useDispatch } from 'react-redux';
import { logout } from '../../Storages/Slices/loginSlice';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

const MenusAfterLogin = () => {
	const dispatch = useDispatch();
	const { email } = useSelector((state) => state.loginReducer);
	const url = `${process.env.REACT_APP_API}/user/${email}`;
	const [image, setImage] = useState('');

	const { token } = useSelector((state) => state.loginReducer);
	const randomImageUrl =
		'https://res.cloudinary.com/calvin-cloud/image/upload/v1626501995/users/user_meodkb.png';

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
						<Link to='/notifikasi' className="menu-icon">
							<FaBell  />
						</Link>
					</Container>
				</Nav>
				<Nav>
					<Container className="menu-icon">
						<Link to='/chat' className="menu-icon">
							<FaEnvelope />
						</Link>
					</Container>
				</Nav>
				<Dropdown>
					<Nav className="photo-box">
						<Dropdown.Toggle variant="none">
							<img src={image ? image : randomImageUrl} alt="profile" />
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
