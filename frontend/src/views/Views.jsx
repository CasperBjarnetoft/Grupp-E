import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeView from './HomeView'
import ProductsView from './ProductsView'
import ProductsDetailsView from './ProductsDetailsView'
import Register from './Register'
import Login from './Login'

const Views = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeView />}></Route>
        <Route path="/products" element={<ProductsView />}></Route>
        <Route path="/products/:_id" element={<ProductsDetailsView />}></Route>
        <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default Views