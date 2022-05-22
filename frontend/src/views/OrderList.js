import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllOrders } from '../store/actions/orderActions'
import { useNavigate, Link } from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'

const OrderList = () => {

    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.userLogin)
    const { orders, loading, error } = useSelector(state => state.orderList)

    const navigate = useNavigate()

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(getAllOrders())
        } else {
            navigate("/login")
        }
    }, [dispatch, navigate, userInfo])


    return (
        <div className="container">
            <h1>orders</h1>
           
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='daanger'>{error}</Message>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">USER</th>
                            <th scope="col">DATE</th>
                            <th scope="col">TOTAL</th>
                            <th scope="col">DETAILS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>{order.user && order.user.name}</td>
                                <td>{order.createdAt.substring(0, 10)}</td>
                                <td>{order.totalQty && order.totalQty}</td>
                                <td>
                                    <Link to={`/order/${order._id}`}>
                                        <button className="btn btn-info text-light">Details</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
            }
        </div>
    )
}

export default OrderList