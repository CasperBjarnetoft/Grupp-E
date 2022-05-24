import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllOrders } from '../store/actions/orderActions'
import { useNavigate, Link } from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'
import axios from 'axios'

const OrderList = () => {

    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.userLogin)
    const { orders, loading, error } = useSelector(state => state.orderList)
    const [check, setCheck] = useState(false)
    const [ordersD, setOrdersD] = useState(orders)


    const navigate = useNavigate()

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(getAllOrders())
        } else {
            navigate("/login")
        }
    }, [dispatch, navigate, userInfo])

    // const ToggleDelivered = (order) => {
    //     console.log(order._id)
    //     dispatch(putOrderById(order._id));     
    // }

    const tempput = (order) => {
        const config = {
            headers: {
              Authorization: `Bearer ${userInfo.token}`
            }
          }
        axios.put(`http://localhost:4000/orders/${order._id}`, {}, config).then((response) => console.log(response.data)).catch((error) => console.log(error));
    }

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
                            <th scope="col">Delivered</th>
                            <th scope="col">DETAILS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order._id} className={order.isDelivered ? 'delivered' : 'notdelivered'}>
                                <td>{order._id}</td>
                                <td>{order.user && order.user.name}</td>
                                <td>{order.createdAt.substring(0, 10)}</td>
                                <td>{order.totalQty && order.totalQty}</td>
                                <td>
                                    <p>
                                        <input type="checkbox" onChange={() => tempput(order)}></input>
                                    </p>
                                </td>
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