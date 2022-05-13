import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/actions/cartActions'

const Product = ({ product }) => {

  const dispatch = useDispatch()

  return (
    <div className='container mt-3 col'>
      <div className="card h-100">
        <div className="image-container">
        <Link to={`/products/${product._id}`}><img src={product.image} className="img-fluid image" alt='product'/></Link>
        </div>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description.slice(0,45)}...</p>
          <div className='d-flex flex-row justify-content-between align-items-center'>
            <h5>${product.price}</h5>
            <a href="#!" className="btn btn-primary" onClick={() => dispatch(addToCart(product))}>Add to cart</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product