import { useEffect } from "react";
import { getOrderById } from "../store/actions/orderActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state.orderDetails);
  const { userInfo } = useSelector((state) => state.userLogin);
  const { id } = useParams();

  useEffect(() => {
   
    dispatch(getOrderById(id));
  }, [dispatch, id]);

  return (
    <div className="container">
      <h2>Order Items</h2>
      {order && order.orderItems.length === 0 ? (
        //  <Message>Order Is empty</Message>
        <p>There is no order</p>
      ) : (
        <>
          {order &&
            order.orderItems.map((item, index) => (
              <div className="row" key={index}>
                <div className="col col-md-1">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="col">
                  <Link to={`/product/${item.product}`}>{item.name}</Link>
                </div>
                <div className="col col-md-4">
                  {item.quantity} X ${item.price} = $
                  {item.quantity * item.price}
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default OrderDetails;
