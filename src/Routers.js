import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from "./Pages/Home/Home.jsx"
import MyBooking from './Pages/MyBooking/mybooking'

function Routers() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/book" component={MyBooking} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routers