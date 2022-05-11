import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProduct } from '../store/actions/productAction'

const ProductsDetailsView = () => {

  const dispatch = useDispatch()
  const { _id } = useParams()

  const { data: product } = useSelector(state => state.product)

  useEffect(() => {
    dispatch(getProduct(_id))
  }, [dispatch, _id])

  return (
    <div className='container mt-3 col'>
      <div className="card h-100 d-flex flex-row">
        <div className="image-container w-50">
          <img src={product.image} className="img-fluid image" alt='product'/>
        </div>
        <div className="card-body w-100">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text mb-3">{product.description}</p>
          <div>
            <h5 className='mb-4'>${product.price}</h5>
            <a href="#!" className="btn btn-primary">Add to cart</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsDetailsView