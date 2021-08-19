import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'

function Routers() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routers