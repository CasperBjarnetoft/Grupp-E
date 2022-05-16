import React from "react";

import { useEffect } from "react";
import { getOrderDetails } from "../store/actions/orderActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state.OrderDetails);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOrderDetails(id));
  }, []);
  return (
    <div class="container">
      <div class="row">
        <div class="col col-md-1 mb-4">
          <img src={order.product.image} alt="" class="img-fluid" />
        </div>
        <div class="col">
          <p>{order.product.name}</p>
        </div>
        <div class="col col-md-4">
          <p>Price: ${order.product.price}</p>
          <p>
            {order.product.qty} X {order.product.price} = $
            {order.product.qty * order.product.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
