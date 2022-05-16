import React from "react";
import { getMyOrders } from "../store/actions/orderActions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const MyProfile = () => {
  const dispatch = useDispatch();
  const{orders,loading,error}= useSelector(state=> state.myOrders)
  console.log(orders)
  const { userInfo } = useSelector(state => state.userLogin)

  useEffect(() => {
    if(userInfo){
      dispatch(getMyOrders);
    }
   
  });

  return(
    <div>
      {orders && orders.map(order=>{
        return(
          <p>{order.name}</p>
        )
      })}

    </div>
    )
};

export default MyProfile;
