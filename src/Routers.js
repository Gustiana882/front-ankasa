import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './Pages/Login/login.jsx';
import SearchResult from './Pages/SearchResult/SearchResult.jsx';
import FlightDetail from './Pages/Flight_Detail/FlightDetails';
import Explore from './Pages/Explore/Explore';
import MyBooking from './Pages/MyBooking/mybooking.jsx';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword.jsx';
import Register from './Pages/Register/Register.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import Notification from './Pages/Notification/Notification';
import Chat from './Pages/Chat/Chat';
import { useSelector } from 'react-redux';

function Routers() {
	const { isAuth } = useSelector((state) => state.loginReducer);

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/mybooking">
					{isAuth ? <MyBooking /> : <Redirect to="/" />}
				</Route>

				<Route exact path="/profile">
					{isAuth ? <Profile /> : <Redirect to="/" />}
				</Route>
				<Route path="/flightdetail/:code">
					{isAuth ? <FlightDetail /> : <Redirect to="/" />}
				</Route>
				<Route exact path="/notifikasi" component={Notification} />
				<Route exact path="/chat" component={Chat} />
				<Route exact path="/search" component={SearchResult} />
				<Route exact path="/home" component={Explore} />
				<Route exact path="/forgotpassword" component={ForgotPassword} />
				<Route exact path="/signup" component={Register} />
				<Route exact path="/" component={Login} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routers;
