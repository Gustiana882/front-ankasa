import './Profile.scoped.css';
import { useState } from 'react';
import Sidenav from '../../Components/Sidenav/sidenav';
import Footer from '../../Components/Footer/Footer';
import Menu from '../../Components/Navbar/MenusAfterLogin';
import Header from '../../Components/Navbar/NavbarHeader';
import axios from 'axios';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	updatePending,
	updateSuccess,
} from '../../Storages/Slices/profileSlice';
import { Spinner } from 'react-bootstrap';

// const schema = yup.object().shape({
// 	email: yup
// 		.string()
// 		.email()
// 		.required(),
// 	name: yup.string().required(),
// 	phone: yup.string().required(),
// 	city: yup.string().required(),
// 	address: yup.string().required(),
// 	postcode: yup.string().required(),
// });

const Profile = () => {
	const dispatch = useDispatch();
	const { email } = useSelector((state) => state.loginReducer);
	console.log(email);
	const { token } = useSelector((state) => state.loginReducer);
	console.log(token);
	const { isLoading } = useSelector((state) => state.profileReducer);

	const [getImage, setImage] = useState([]);
	const url = `${process.env.REACT_APP_API}/profile`;
	const urlGetUser = `${process.env.REACT_APP_API}/user/${email}`;
	const [user, setUser] = useState([
		{ image: '', name: '', phone: '', city: '', address: '', postcode: '' },
	]);

	const onSubmitForm = async (user) => {
		console.log(user);
		try {
			axios.put(url, user).then((res) => {
				console.log(res.data);
				dispatch(updateSuccess());
			});
		} catch (error) {
			console.error(error.message);
		}
		dispatch(updatePending());
	};

	const { register, handleSubmit, reset } = useForm();

	useEffect(() => {
		axios
			.get(urlGetUser, {
				headers: {
					token: token,
				},
			})
			.then((res) => {
				setUser(res.data.result);
				reset(res.data);
			});
	}, [urlGetUser, reset, dispatch, token]);

	return (
		<body>
			<header />
			<Header />
			<Menu />
			<section>
				<h6 className="color-blue">P R O F I L E</h6>
				<h1>Profile</h1>
				<form onSubmit={handleSubmit(onSubmitForm)}>
					<div className="d-flex form">
						<div className="contact">
							<h4>Contact</h4>
							<div className="user-box">
								<input
									type="email"
									defaultValue={
										user[0] ? user[0].email : console.log('loading')
									}
									{...register('email')}
								/>

								<label>Email</label>
							</div>
							<div className="user-box">
								<input
									type="tel"
									defaultValue={
										user[0] ? user[0].phone : console.log('loading')
									}
									{...register('phone')}
								/>
								<label>Phone</label>
							</div>
							<div className="d-flex m-4 justify-content-end">
								<p className="color-blue fw-bold px-5">Account Settings</p>
								<i className="color-blue bi bi-chevron-right" />
							</div>
						</div>
						<div className="biodata">
							<h4>Biodata</h4>
							<div className="user-box">
								<input
									type="username"
									defaultValue={user[0] ? user[0].name : console.log('loading')}
									{...register('name')}
								/>
								<label>Username</label>
							</div>
							<div className="user-box pt-4">
								<label className="lh-1">City</label>
								<select name="posCode" id="posCode">
									<option
										defaultValue={
											user[0] ? user[0].city : console.log('loading')
										}
										{...register('city')}
									>
										Medan
									</option>
								</select>
							</div>
							<div className="user-box">
								<input
									type="text"
									defaultValue={
										user[0] ? user[0].address : console.log('loading')
									}
									{...register('address')}
								/>
								<label>Address</label>
							</div>
							<div className="user-box">
								<input
									type="number"
									min="0"
									defaultValue={
										user[0] ? user[0].postcode : console.log('loading')
									}
									{...register('postcode')}
								/>
								<label>Post Code</label>
							</div>
							<button type="submit" className="btn button-save float-end">
								{isLoading ? (
									<Spinner variant="primary" animation="border" />
								) : (
									<span>Save</span>
								)}
							</button>
						</div>
					</div>
				</form>
			</section>
			<aside>
				<Sidenav user={user[0]} callback={(img) => console.log(img)} />
			</aside>
			<footer>
				<Footer />
			</footer>
		</body>
	);
};

export default Profile;
