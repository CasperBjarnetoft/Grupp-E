
import actiontypes from "../actiontypes";
import axios from 'axios'


// create order

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actiontypes().createOrder.loading,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };


    const { data } = await axios.post(
      `http://localhost:4000/orders`,
      order,
      config
    );



    dispatch({
      type: actiontypes().createOrder.createOrder,
      payload: data,
    });
  } catch (error) {

    dispatch({
      type: actiontypes().createOrder.failure,
      payload: error.message,
    });
  }
};

// list my orders

export const getMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: actiontypes().myOrders.loading,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get("http://localhost:4000/orders/myorders", config)

    dispatch({
      type: actiontypes().myOrders.getMyOrders,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: actiontypes().myOrders.failure,
      payload: error.message,
    })
  }
}

// get orders by id

export const getOrderById = (id) => async (dispatch, getState) => {
  console.log("1asdasd")
  try {
    dispatch({
      type: actiontypes().orderDetails.loading,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const res = await axios.get(`http://localhost:4000/orders/${id}`, config)


    dispatch({
      type: actiontypes().orderDetails.getOrderDetails,
      payload: res.data,
    })
  } catch (error) {
    console.log(error.message)
    dispatch({
      type: actiontypes().orderDetails.failure,
      payload: error.message,
    })
  }
}


// get all orders ( by admin)
export const getAllOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: actiontypes().orders.loading,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get("http://localhost:4000/orders", config)

    dispatch({
      type: actiontypes().orders.getAllOrders,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: actiontypes().orders.failure,
      payload: error.message,
    })
  }
}



