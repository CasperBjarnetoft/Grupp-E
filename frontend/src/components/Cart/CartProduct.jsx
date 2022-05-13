import { useDispatch } from 'react-redux'
import { decrement, addToCart, removeOne } from '../../store/actions/cartActions'

const CartProduct = ({ product }) => {

  const dispatch = useDispatch()

  return (
    <div className='d-flex justify-content-between align-items-center p-2'>
      <div className='d-flex align-items-center'>
        <img src={product.image} className="img-fluid cart-image me-3" alt='img' />
        <div>
          <div><strong>{product.name}</strong></div>
          <div><small>{product.quantity} x ${product.price}</small></div>
        </div>
      </div>
      <div>
        <div className="btn-group btn-group-sm me-1" role="group">
          <button className='btn btn-sm btn-dark' onClick={() => dispatch(decrement(product._id))}>-</button>
          <button className='btn btn-sm btn-dark' onClick={() => dispatch(addToCart(product))}>+</button>
        </div>
        <button className='btn btn-sm btn-danger' onClick={() => dispatch(removeOne(product._id))}><i className='fa fa-trash'></i></button>
      </div>
    </div>
  )
}

export default CartProduct