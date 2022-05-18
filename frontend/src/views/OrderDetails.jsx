
import { useEffect } from "react";
import { getOrderById } from "../store/actions/orderActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const OrderDetails = () => {

  const dispatch = useDispatch();
  const { order } = useSelector((state) => state.OrderDetails);
  const { id } = useParams();
  

  useEffect(() => {
    dispatch(getOrderById(id));
  }, [dispatch, id]);

  console.log("order", order);
  return (
    <div className="container">
      <h2>Order Items</h2>
      {order.orderItems.length === 0 ? (
        //  <Message>Order Is empty</Message>
        <p>There is no order</p>
      ) : (
        <>
          {order.orderItems.map((item, index) => (
            <div className="row">
              <div className="col col-md-1">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="col">
                <Link to={`/product/${item.product}`}>{item.name}</Link>
              </div>
              <div className="col col-md-4">
                {item.quantity} X ${item.price} = ${item.quantity * item.price}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default OrderDetails;
