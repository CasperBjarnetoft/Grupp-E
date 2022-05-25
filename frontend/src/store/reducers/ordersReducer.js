import actiontypes from "../actiontypes";

const initialState = {
    orders: [],
    loading: false,
    error: null

}

export const orderCreateReducer = (state = { order: {}, loading: false, error: null }, action) => {
    switch (action.type) {
        case actiontypes().createOrder.loading:
            return {
                loading: true,
            }
        case actiontypes().createOrder.createOrder:
            return {
                ...state,
                order: action.payload,
            }
        case actiontypes().createOrder.failure:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state
    }
}

export const orderDetailsReducer = (
    state = { loading: false, order: null, error: null },
    action
) => {
    switch (action.type) {
        case actiontypes().orderDetails.loading:
            return {
                ...state,
                loading: true,
            }
        case actiontypes().orderDetails.getOrderDetails:
            console.log(action.payload)
            return {
                ...state,
                loading: false,
                error: null,
                order: action.payload,

            }
        case actiontypes().orderDetails.failure:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}





export const orderListMyReducer = (state = initialState, action) => {
    switch (action.type) {

        case actiontypes().myOrders.loading:
            return {
                ...state,
                loading: true,
            }

        case actiontypes().myOrders.getMyOrders:
            return {
                ...state,
                loading: false,
                orders: action.payload,

            }

        case actiontypes().myOrders.failure:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        default:
            return state


    }
}

export const orderListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actiontypes().orders.loading:
            return {
                loading: true,
            }
        case actiontypes().orders.getAllOrders:
            return {
                ...state,
                loading: false,
                orders: action.payload,
            }
        case actiontypes().orders.failure:
            return {
                loading: false,
                error: action.payload,
            }
        case actiontypes().orders.updateOrder:
            console.log('reducer ', action.payload)
            console.log(state)
            return {
                ...state,
                loading: false,
                orders: state.orders.map(order => {
                    if(order._id === action.payload._id) {
                        order.isDelivered = action.payload.isDelivered
                    }
                    return order
                })
            }
        default:
            return state
    }
}