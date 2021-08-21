import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"

const withAuth = (WrappedComponent) => {
    return (props) => {
        const Router = useHistory()
        const Url = Router.location.pathname
        const urlAuth = ['/login', '/sign-up']

        const { token: accessToken } = useSelector((state) => state.users)

        if (accessToken && (Url === '/login' || Url === '/sign-up')) {
            Router.push("/")
            return null
        }

<<<<<<< HEAD
        if (!accessToken && !urlAuth.find((val, i)=> Url === val)) {
            Router.push("/login")
            return null
        }
=======
        // if (!accessToken && !urlAuth.find((val, i)=> Url === val)) {
        //     Router.push("/login")
        //     return null
        // }
>>>>>>> a6141ae07b413b7b3166e3e1d8629e3a09867c8c

        return <WrappedComponent {...props} />
    }
}


export default withAuth
