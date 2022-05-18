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
              <div className='container mt-3 col order' key={index}>
                <div className="card d-flex flex-row">
                  <div className="image-container">
                    <img src={item.image} className="img-fluid image" alt='product'/>
                  </div>
                  <div className="card-body w-100">
                    <h5 className="card-title">{item.name}</h5>
                    <div>
                      {`${item.quantity} X $${item.quantity * Math.round(item.price)}` }
                  </div>
                </div>
              </div>
            </div>
            ))}
        </>
      )}
    </div>
  );
};

export default OrderDetails;
