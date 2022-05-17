import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartProduct from "./CartProduct";
import { clearCart } from "../../store/actions/cartActions";
import { createOrder } from "../../store/actions/orderActions";

const Cart = () => {
  const { cart, totalAmount } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkoutHandler = () => {
    if (userInfo) {
      dispatch(createOrder(cart));
      navigate("/myprofile");
    } else {
      navigate("/login");
    }
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      {!cart.length && (
        <div className="p-2 text-center">Your cart is empty</div>
      )}

      {cart.map((product) => (
        <CartProduct key={product._id} product={product} />
      ))}

      <div className="dropdown-divider"></div>
      <div className="d-flex justify-content-between align-items-center p-2">
        <div>
          <div>Total Price: ${Math.round(totalAmount)}</div>
        </div>
        <div>
          <button
            className="btn btn-warning"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
          <button className="btn btn-info ms-2" onClick={checkoutHandler}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
