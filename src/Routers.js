import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from "./Pages/Login/login.jsx"
import SearchResult from "./Pages/SearchResult/SearchResult.jsx"
import FlightDetail from "./Pages/Flight_Detail/FlightDetails"
import Explore from "./Pages/Explore/Explore"
import MyBooking from "./Pages/MyBooking/mybooking.jsx"
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword.jsx"
import Register from "./Pages/Register/Register.jsx"
import Profile from "./Pages/Profile/Profile.jsx"
import Notification from "./Pages/Notification/Notification"

function Routers() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/mybooking" component={MyBooking} />
                <Route exact path="/notification" component={Notification} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/flightdetail" component={FlightDetail} />
                <Route exact path="/search" component={SearchResult} />
                <Route exact path="/home" component={Explore} />
                <Route exact path="/forgotpassword" component={ForgotPassword} />
                <Route exact path="/signup" component={Register} />
                <Route exact path="/" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routers