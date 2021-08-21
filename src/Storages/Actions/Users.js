class Users {
    AuthSet = (token) => {
        return {
            type: "SET_AUTH",
            payload: token,
        }
    }

    AuthClear = () => {
        return {
            type: "UNSET_AUTH",
        }
    }

    UserSet = (data) => {
        return {
            type: "SET_USERS",
            payload: data,
        }
    }
}

export default new Users()