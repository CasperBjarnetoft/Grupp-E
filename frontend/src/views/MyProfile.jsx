import React from "react";
import { getMyOrders } from "../store/actions/orderActions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const MyProfile = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { orders } = useSelector((state) => state.myOrders);

  const { userInfo } = useSelector((state) => state.userLogin);
  const [deliveredOrders, setDeliveredOrders] = useState([])
  const [notDeliveredOrders, setnotDeliveredOrders] = useState([])
 
  useEffect(() => {
   let delivered = orders.filter(order => order.isDelivered)
   let not = orders.filter(order => !order.isDelivered)
   setDeliveredOrders(delivered)
   setnotDeliveredOrders(not)
  }, [orders])

  useEffect(() => {
    if (userInfo) {
      dispatch(getMyOrders());
    } else {
      Navigate("/login");
    }
  }, [userInfo, dispatch]);

  return (
    <>
      <p className="mt-3">
        Welcome back{" "}
        <span className="text-info">{userInfo.name && userInfo.name}! </span>{" "}
      </p>
      <div className="text-center mb-3">
        <h3>Delivered Orders</h3>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Date</th>
            <th scope="col">Delivered</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {deliveredOrders.map(order => (
            <tr key={order._id}>
            <td>{order._id}</td>
            <td>{order.createdAt.substring(0, 10)}</td>
            <td>
                <p>
                    {order.isDelivered ? (
                      <i className="fa-solid fa-check"></i>
                      ) 
                      : <p>Not delivered</p>
                    }
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

      <div className="text-center mb-3">
        <h3>Pending Orders</h3>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Date</th>
            <th scope="col">Delivered</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {notDeliveredOrders.map(order => (
            <tr key={order._id}>
            <td>{order._id}</td>
            <td>{order.createdAt.substring(0, 10)}</td>
            <td>
                <p>
                    {order.isDelivered ? (
                      <i className="fa-solid fa-check"></i>
                      ) 
                      : <p>Not delivered</p>
                    }
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
    </>
  );
};

export default MyProfile;
