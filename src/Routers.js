import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from "./Components/Login/login"

function Routers() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routers