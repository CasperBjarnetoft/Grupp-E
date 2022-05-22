import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeView from "./HomeView";
import ProductsView from "./ProductsView";
import ProductsDetailsView from "./ProductsDetailsView";
import Register from "./Register";
import Login from "./Login";
import MyProfile from "./MyProfile";
import OrderDetails from "./OrderDetails";
import OrderList from "./OrderList";
import NotFound from "./NotFound";

const Views = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeView />}></Route>
        <Route path="/products" element={<ProductsView />}></Route>
        <Route path="/products/:_id" element={<ProductsDetailsView />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/myprofile" element={<MyProfile />}></Route>
        <Route path="/order/:id" element={<OrderDetails />}></Route>
        <Route path="/orders" element={<OrderList />}></Route>
        {/* <Route path="*" element={NotFound}></Route> */}
      </Routes>
    </div>
  );
};

export default Views;
