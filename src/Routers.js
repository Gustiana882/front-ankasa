import {BrowserRouter, Switch, Route} from 'react-router-dom'
<<<<<<< HEAD
import Login from "./Pages/Home/Home.jsx"
import SearchResult from "./Pages/SearchResult/SearchResult.jsx"
=======
import Login from "./Pages/Register/Register.jsx"
>>>>>>> a6141ae07b413b7b3166e3e1d8629e3a09867c8c

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