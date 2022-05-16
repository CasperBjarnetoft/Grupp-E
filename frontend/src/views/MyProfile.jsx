import React from "react";
import { getMyOrders } from "../store/actions/orderActions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Loader from "../components/Loader";
import { useNavigate, Link } from "react-router-dom";

const MyProfile = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { orders, loading, error } = useSelector((state) => state.myOrders);
  console.log(orders);
  const { userInfo } = useSelector((state) => state.userLogin);

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
        Welcome back <span class="text-info">{userInfo.name}! </span>{" "}
      </p>

      {loading && loading}
      {orders.length === 0 ? (
        <p>There are no orders for this user</p>
      ) : (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Date</th>
              <th scope="col">Total</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.totalPrice}</td>
                <td>
                  <Link to={`/order/${order._id}`}>
                    <button>Details</button>
                  </Link>
                </td>
              </tr>;
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default MyProfile;
