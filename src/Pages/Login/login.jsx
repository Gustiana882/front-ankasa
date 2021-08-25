import './login.scoped.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import {
	loginPending,
	loginSuccess,
	loginFail,
	getEmail,
	getToken,
	getUser,
} from '../../Storages/Slices/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';

const schema = yup.object().shape({
	email: yup
		.string()
		.email('please input valid email')
		.required(),
	password: yup
		.string()
		.min(5)
		.required(),
});

const Login = () => {
	const { email } = useSelector((state) => state.loginReducer);
	const { token } = useSelector((state) => state.loginReducer);
	const url = `${process.env.REACT_APP_API}/login`;
	const urlGetUser = `${process.env.REACT_APP_API}/user/${email}`;
	const { isLoading } = useSelector((state) => state.loginReducer);
	const dispatch = useDispatch();
	const history = useHistory();
	const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

	const [user, setUser] = useState();

	const onSubmit = (data) => {
		try {
			axios.post(url, data).then((res) => {
				const { msg, token, email } = res.data.result[0];
				if (msg === 'Login Success') {
					sessionStorage.setItem('token', token);
					dispatch(loginSuccess());
					dispatch(getToken(token));
					dispatch(getEmail(email));
					history.push('/home');
					console.log(msg);
				} else if (msg === 'wrong password or email') {
					dispatch(loginFail('wrong password or email'));
				} else {
					dispatch(loginFail('invalid password or email'));
				}
			});
		} catch (error) {
			dispatch(loginFail(error.message));
		}
		dispatch(loginPending());
	};

	useEffect(() => {
		axios
			.get(urlGetUser, {
				headers: {
					token: token,
				},
			})
			.then((res) => {
				setUser(res.data.result);
				dispatch(getUser(res.data.result));
			});
	}, [urlGetUser, dispatch, token]);

	console.log(user);

	return (
		<div>
			<div className="blueBanner">
				<img
					src="https://res.cloudinary.com/rizkazn/image/upload/v1629439835/ankasaBanner_kmjq8m.jpg"
					alt=""
				/>
			</div>
			<aside>
				<div className="formBanner">
					<div className="formTitle">
						<img
							src="https://res.cloudinary.com/rizkazn/image/upload/v1629439821/logo_lgffvi.jpg"
							alt=""
						/>
						<span className="text-logo">
							<b> Ankasa</b>
						</span>
						<div className="login-box">
							<h4>
								<b>Login</b>
							</h4>
							<form className="formRegis" onSubmit={handleSubmit(onSubmit)}>
								<div className="user-box">
									<input
										type="username"
										name="username"
										{...register('email')}
										required
									/>
									<label>Username</label>
								</div>
								<div className="user-box">
									<input
										type="password"
										name="password"
										{...register('password')}
										required
									/>
									<label>Password</label>
								</div>
								<button
									className="SignIn"
									type="submit"
									handleOnSubmit={handleSubmit}
									block
								>
									{isLoading ? (
										<Spinner variant="primary" animation="border" />
									) : (
										<span>Sign In</span>
									)}
								</button>
							</form>
							<br />
							<p>Did you forgot your password?</p>
							<Link to="/forgotpassword">Tap here for reset</Link>
							<br />
							<hr />
							<p>or sign in with</p>
							<div className="row mb-2">
								<div className="col-6">
									<button className="btn btn-block btn-social btn-google">
										<img
											src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
											alt=""
										/>
									</button>
								</div>
								<div className="col-6">
									<button className="btn btn-block btn-social btn-facebook">
										<img
											src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png"
											alt=""
										/>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</aside>
		</div>
	);
};

export default Login;
