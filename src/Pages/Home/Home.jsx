import { useEffect } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import ActionsUsers from "../../Storages/Actions/Users"
import PagesAuth from "../../Utils/PagesAuth"
<<<<<<< HEAD
import Navbar from "../../Components/Navbar/NavbarHeader"
import Footer from "../../Components/Footer/Footer"
=======
>>>>>>> a6141ae07b413b7b3166e3e1d8629e3a09867c8c

const Home = (props) => {

    /**
     * contoh menyimpan token ke dalam storage dengan props.AuthSet()
     * contoh menyimpan data user ke dalam storage  dengan props.UserSet()
     */
    useEffect(() => {
        props.AuthSet('ini token')
        props.UserSet([{ name: 'user', email: 'user@gmail.com' }])
    },[])

    return (
<<<<<<< HEAD
        <>
        <Navbar />
        <Footer />
        </>
=======
        <h1 className="text-danger">Hello world</h1>
>>>>>>> a6141ae07b413b7b3166e3e1d8629e3a09867c8c
    )
}

// get redux
const mapStateToProps = (state) => {
    return {
        users: state.users,
    }
}
// set redux
const mapDispatchToProps = (dispacth) => {
    return {
        AuthSet: bindActionCreators(ActionsUsers.AuthSet, dispacth),
        UserSet: bindActionCreators(ActionsUsers.UserSet, dispacth),
    }
}

export default PagesAuth( connect(mapStateToProps,mapDispatchToProps)(Home) )
