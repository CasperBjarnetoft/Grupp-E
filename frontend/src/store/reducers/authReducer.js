
import actiontypes from "../actiontypes"

const initialState = {
    userInfo: {},
    loading: false,
    error: {}
}


export const userLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actiontypes().login.loading:
            return {
                ...state,
                loading: true
            }
        case actiontypes().login.userLogin:
            return {
                ...state,
                userInfo: action.payload,
                loading:false
            }
        case actiontypes().login.failure:
            return {
                ...state,
                error: action.payload
            }
        case actiontypes().login.userLogout:
            return {
                ...state,
                userInfo: {}

            }

        default:
            return state
    }
}


export const userRegisterReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case actiontypes().register.loading:
            return {
                ...state,
                loading: true
            }
        case actiontypes().register.userRegister:
            return {
                ...state,
                loading: false,
                user: action.payload
            }

        case  actiontypes().register.failure:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}