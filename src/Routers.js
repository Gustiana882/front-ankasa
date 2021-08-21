import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Profile from "./Pages/Profile/Profile"
import Forgot from "./Pages/ForgotPassword/ForgotPassword"

function Routers() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/forgot" component={Forgot} />
                <Route exact path="/profile" component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routers