import React from 'react';
import './Register.scoped.css';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ilustration from '../../Assets/illustration.png';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import Alert from '../../Components/Toats/Toats';

const baseUrl = `${process.env.REACT_APP_API}/register`;

const Register = () => {
	const { register, handleSubmit } = useForm();
	
	const onSubmit = async (data) => {
		try {
			axios.post(baseUrl, data).then((res) => {
				if (res.data.result[0].msg === 'register success') history.push('/');
				console.log('ok')
				toast.warn('email is already login')
			});
		} catch (error) {
			console.log(error);
		}
	};

	const history = useHistory();

	function handleClick() {
		history.push('/');
	}

	useEffect(() => {
		const togglePassword = document.querySelector('#togglePassword');
		const password = document.querySelector('#password');

		togglePassword.addEventListener('click', function(e) {
			const type =
				password.getAttribute('type') === 'password' ? 'text' : 'password';
			password.setAttribute('type', type);

			this.classList.toggle('bi-eye');
		});
	}, []);

	return (
		<body>
			<Alert />
			<div className="register-pict register-color">
				<img className="img-airplane" src={ilustration} alt="" />
			</div>
			<div className="register-layout px-5">
				<div className="register-logo">
					<img
						src="https://res.cloudinary.com/dvehyvk3d/image/upload/v1629369063/vector_02_wqpjtu.png"
						alt=""
					/>
					<b className="register-font21">Ankasa</b>
				</div>
				<div className="register d-flex flex-column w-100">
					<h3 className="fw-bold">Register</h3>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="user-box">
							<input
								type="username"
								name="username"
								{...register('name')}
								required
							/>
							<label>Full Name</label>
						</div>
						<div className="user-box">
							<input
								type="email"
								name="email"
								{...register('email')}
								required
							/>
							<label>Email</label>
						</div>
						<div className="d-flex eye-pass">
							<div className="user-box">
								<input
									type="password"
									name="password"
									id="password"
									{...register('password')}
									required
								/>
								<label>Password</label>
							</div>
							<i className="bi bi-eye-slash" id="togglePassword" />
						</div>
						<button
							type="submit"
							handleOnSubmit={handleSubmit}
							className="register-button-signup register-color"
						>
							Sign Up
						</button>
					</form>
					<div className="register-checkbox-layout">
						<input type="checkbox" className="register-checkbox" />
						<label className="register-font13">
							Accept terms and condition
						</label>
					</div>
					<div className="register-signin">
						<hr />
						<p className="text-center register-font12">
							Already have an account?
						</p>
						<button
							type="button"
							onClick={handleClick}
							className="register-button-signin"
						>
							Sign In
						</button>
					</div>
				</div>
			</div>
		</body>
	);
};

export default Register;
