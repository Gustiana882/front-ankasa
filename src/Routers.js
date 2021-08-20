import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from "./Components/Login/login"
import Register from "./Views/Register"

function Routers() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/signup" component={Register} />
                <Route exact path="/" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routers