import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from "./Pages/Home/Home.jsx"
import SearchResult from "./Pages/SearchResult/SearchResult.jsx"


function Routers() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/search" component={SearchResult} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routers