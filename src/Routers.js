import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from "./Pages/Home/Home.jsx"
import SearchResult from "./Pages/SearchResult/SearchResult.jsx"
import FlightDetail from "./Pages/Flight_Detail/FlightDetails"
import Explore from "./Pages/Explore/Explore"
import Profile from "./Pages/Profile/Profile.jsx"

function Routers() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/explore" component={Explore} />
                <Route exact path="/flightdetail" component={FlightDetail} />
                <Route exact path="/search" component={SearchResult} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/forgotpassword" component={ForgotPassword} />
                <Route exact path="/signup" component={Register} />
                <Route exact path="/" component={Login} />
                <Route exact path="/search" component={SearchResult} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routers