import { useEffect } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import ActionsUsers from "../../Storages/Actions/Users"
import PagesAuth from "../../Utils/PagesAuth"

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
        <h1 className="text-danger">Hello world</h1>
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