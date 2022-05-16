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
    state = { loading: false, order: [] },
    action
) => {
    switch (action.type) {
        case actiontypes().orderDetails.loading:
            return {
                ...state,
                loading: true,
            }
        case actiontypes().orderDetails.getOrderDetails:
            return {
                loading: false,
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
                loading: true,
            }

        case actiontypes().myOrders.getMyOrders:
            return {
                orders: action.payload,
                loading: false,
                error: null

            }

        case actiontypes().myOrders.failure:
            return {
                loading: false,
                error: action.payload,
            }

        default:
            return state


    }
}

export const orderListReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case actiontypes().orders.loading:
            return {
                loading: true,
            }
        case actiontypes().orders.getAllOrders:
            return {
                loading: false,
                orders: action.payload,
            }
        case actiontypes().orders.failure:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}