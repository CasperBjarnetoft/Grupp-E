import axios from 'axios'
import actiontypes from '../actiontypes'


// login user
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: actiontypes().login.loading
        })

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const { data } = await axios.post("http://localhost:4000/users/login", { email, password }, config)
        dispatch({
            type: actiontypes().login.userLogin,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: actiontypes().login.failure,
            payload: error.msg
        })

    }


}

// Logout user
export const logOut = () => (dispatch) => {
    localStorage.removeItem("userInfo")
    dispatch({ type: actiontypes().login.userLogout });

};

// register user
export const register = (formData) => async (dispatch) => {
    try {
        dispatch({
            type: actiontypes().register.loading
        })

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const { data } = await axios.post("http://localhost:4000/users/register", formData, config)
        dispatch({
            type: actiontypes().register.userRegister,
            payload: data
        })

        localStorage.setItem('user', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: actiontypes().register.failure,
            payload: error.msg
        })

    }
}

export const checkUser = () => {
    return dispatch => {
      let token = localStorage.getItem('userInfo')
      if(token) {
          dispatch(authSuccess(token))
      }
    }
  }


const authSuccess = token => {
    return {
      type: actiontypes().login.userLogin,
      payload: token
    }
  }


