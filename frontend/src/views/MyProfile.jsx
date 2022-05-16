import React from "react";
import { getMyOrders } from "../store/actions/orderActions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Loader from "../components/Loader";
import { Navigate } from "react-router-dom";

const MyProfile = () => {
  const dispatch = useDispatch();
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
        <div>
          {orders.map((order) => {
            return <p>{order.name}</p>;
          })}
        </div>
      )}
    </>
  );
};

export default MyProfile;
