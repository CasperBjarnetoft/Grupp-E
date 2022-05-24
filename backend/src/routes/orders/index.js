const express = require('express')
const mongoose = require('mongoose')
const orderRouter = express.Router()
const { auth, admin } = require('../../middleware/authMidleware')
const OrderModel = require('./schema')

//make an order
orderRouter.post("/", auth, async (req, res, next) => {
  const {
    orderItems,
    totalQty
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(404).json({ msg: "No order items" })
    return;
  } else {
    const order = new OrderModel({
      orderItems,
      totalQty,
      user: req.user._id,


    });
    console.log('order', order)

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});


// get logged in user order
orderRouter.get("/myorders", auth, async (req, res, next) => {
  try {
    const orders = await OrderModel.find({ user: mongoose.Types.ObjectId(req.user._id) });

    if (orders) {
      res.status(200).json(orders);

    } else {
      const error = new Error("Orders not found");
      error.httpStatusCode = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
});



//get order by id
orderRouter.get("/:id", auth, async (req, res, next) => {
  const order = await OrderModel.findById(req.params.id).populate(
    "orderItems.product",
    "name image price"
  );

  if (order) {
    console.log('order', order)
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});


// get all orders

orderRouter.get("/", auth, admin, async (req, res, next) => {
  try {
    const orders = await OrderModel.find().populate("user", ["id", "name"]);
    if (orders) {
      res.status(200).send(orders);
    } else {
      res.status(404).json({ msg: `orders not found for user${req.user._id}` });
    }
  } catch (error) {
    next(error);
  }
});


// //update an order

// orderRouter.put("/:id", auth, admin, async (req, res, next) => {
//     const {
//       orderItems,
//       totalQty,
//       isDelivered
//     } = req.body;

//     try {
//         const order = await OrderModel.findById(req.params.id);

//         if (order) {
//             order.orderItems= orderItems
//             order.totalQty= totalQty
//             order.isDelivered= isDelivered
           
//             const updatedOrder = await order.save();
//             res.json(updatedOrder);
//         } else {
//             const error = new Error(`order with id ${req.params.id} not found`);
//             error.httpStatusCode = 404;
//             next(error);
//         }
//     } catch (error) {
//         next(error);
//     }
// });

//update an order

orderRouter.put("/:id", auth, admin, async (req, res, next) => {
  const {
    orderItems,
    totalQty,
    isDelivered
  } = req.body;

  try {
      const order = await OrderModel.findById(req.params.id);

      if (order) {

          order.isDelivered= !isDelivered
         
          const updatedOrder = await order.save();
          res.json(updatedOrder);
      } else {
          const error = new Error(`order with id ${req.params.id} not found`);
          error.httpStatusCode = 404;
          next(error);
      }
  } catch (error) {
      next(error);
  }
});



module.exports = orderRouter