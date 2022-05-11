import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeView from './HomeView'
import ProductsView from './ProductsView'
import ProductsDetailsView from './ProductsDetailsView'

const Views = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeView />}></Route>
        <Route path="/products" element={<ProductsView />}></Route>
        <Route path="/products/:_id" element={<ProductsDetailsView />}></Route>
      </Routes>
    </div>
  )
}

export default Views