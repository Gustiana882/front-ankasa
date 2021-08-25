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
	const { token } = useSelector((state) => state.loginReducer);
	const { imageUpload } = useSelector((state) => state.profileReducer);
	console.log(imageUpload);

	const url = `${process.env.REACT_APP_API}/profile/${email}`;
	const urlGetUser = `${process.env.REACT_APP_API}/user/${email}`;
	const [user, setUser] = useState([
		{ image: '', name: '', phone: '', city: '', address: '', postcode: '' },
	]);

	const onSubmitForm = async (user) => {
		console.log(user);

		try {
			let formData = new FormData();
			formData.append('image', imageUpload);
			formData.append('email', user.email);
			formData.append('phone', user.phone);
			formData.append('name', user.name);
			formData.append('city', user.city);
			formData.append('address', user.address);
			formData.append('postcode', user.postcode);
			axios
				.put(url, formData, {
					headers: {
						token: token,
						'Content-type': 'multipart/form-data',
					},
				})
				.then((res) => {
					console.log(res.data);
					alert('profile update success');
				});
		} catch (error) {
			console.error(error.message);
		}
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
									defaultValue={email}
									{...register('email')}
								/>

								<label>Email</label>
							</div>
							<div className="user-box">
								<input
									type="tel"
									defaultValue={user[0].phone}
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
									defaultValue={user[0].name}
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
									defaultValue={user[0].address}
									{...register('address')}
								/>
								<label>Address</label>
							</div>
							<div className="user-box">
								<input
									type="number"
									min="0"
									defaultValue={user[0].postcode}
									{...register('postcode')}
								/>
								<label>Post Code</label>
							</div>
							<button type="submit" className="btn button-save float-end">
								<span>Save</span>
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
