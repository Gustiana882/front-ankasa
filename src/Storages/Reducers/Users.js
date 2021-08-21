const initialState = {
    data: {}, // data users yang login
    isAuth: false,
    token: null,
}

const Users = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case "SET_AUTH": {
            return {
                ...state,
                isAuth: true,
                token: payload,
            }
        }

        case "UNSET_AUTH": {
            return {
                ...state,
                isAuth: false,
                token: null,
                data: {},
            }
        }

        case "SET_USERS": {
            return {
                ...state,
                data: payload,
            }
        }

        default:
            return state
    }
}

export default Users