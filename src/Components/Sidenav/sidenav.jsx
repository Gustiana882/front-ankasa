import './sidenav.scoped.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { logout } from '../../Storages/Slices/loginSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import ChangeImageBtn from './ChangeImageBtn';

function Cards(props) {
	const [image, setImage] = useState('');
	const [name, setName] = useState('');
	const [city, setCity] = useState('');
	const dispatch = useDispatch();
	const { token } = useSelector((state) => state.loginReducer);
	const { email } = useSelector((state) => state.loginReducer);
	const { imagePreview } = useSelector((state) => state.profileReducer);
	console.log(imagePreview);
	const url = `${process.env.REACT_APP_API}/user/${email}`;
	const location = useLocation();

	useEffect(() => {
		axios
			.get(url, {
				headers: {
					token: token,
				},
			})
			.then((res) => {
				setImage(res.data.result[0].image);
				setName(res.data.result[0].name);
				setCity(res.data.result[0].city);
			});
	}, [url, token]);

	return (
		<div className="col">
			<div className="card h-100">
				<div className="mx-auto mt-5 mb-3">
					<img
						className="rounded-image"
						src={imagePreview ? imagePreview : image}
						alt=""
					/>
				</div>
				<div className="mx-auto">
					{location.pathname === '/profile' ? <ChangeImageBtn /> : <span />}
				</div>
				<h3 className="m-0 mt-3 poppins-bold mx-auto">{name}</h3>
				<h6 className="m-0 mt-3 poppins-reguler mx-auto">{city}</h6>
				<div className="mt-4 d-flex justify-content-between align-items-center mb-3 container">
					<h6 className="m-0 poppins-bold">Cards</h6>
					<h6 className="m-0 poppins-bold color-blue">+ Add</h6>
				</div>
				<div className="pay-card container">
					<div className="m-2">
						<h6 className="m-0 poppins-bold text-white">4441 1235 5512 5551</h6>
						<div className="d-flex mt-1 justify-content-between align-items-center">
							<small className="m-0 poppins-reguler text-white">X Card</small>
							<small className="m-0 poppins-reguler text-white">$ Saldo</small>
						</div>
					</div>
				</div>
				<div className="mt-4 container mb-5">
					<div className="d-flex mt-1 align-items-center">
						<img
							className="m-0 me-5"
							src="https://res.cloudinary.com/dyli6i0pw/image/upload/v1629425765/Assets%20Ticket/user_alose1.png"
							alt=""
						/>
						<small className="m-0 poppins-bold color-blue">Profile</small>
					</div>
					<div className="d-flex mt-5 align-items-center">
						<img
							className="m-0 me-5"
							src="https://res.cloudinary.com/dyli6i0pw/image/upload/v1629425765/Assets%20Ticket/Vector_dti66l.png"
							alt=""
						/>
						<small className="m-0 poppins-bold">My Review</small>
					</div>
					<div className="d-flex mt-5 align-items-center">
						<img
							className="m-0 me-5"
							src="https://res.cloudinary.com/dyli6i0pw/image/upload/v1629425765/Assets%20Ticket/Vector_1_f1yvuf.png"
							alt=""
						/>
						<small className="m-0 poppins-bold">Setting</small>
					</div>
					<div className="d-flex mt-5 align-items-center">
						<img
							className="m-0 me-5"
							src="https://res.cloudinary.com/dyli6i0pw/image/upload/v1629425765/Assets%20Ticket/Vector_2_mf7o9r.png"
							alt=""
						/>
						<button className="logout-btn" onClick={() => dispatch(logout())}>
							<small className="poppins-bold text-danger">Logout</small>
						</button>
						{/* <small className="m-0 poppins-bold text-danger">Logout</small> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cards;
