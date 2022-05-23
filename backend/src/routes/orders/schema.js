
const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "user",
        },

        orderItems: { type: Array, required: true },
        totalQty: {
            type: Number,
            default: 0.0,
        },
        isDelivered:{
            type:Boolean,
            default:false
        }

    },


    {
        timestamps: true,
    }
);

const OrderModel = mongoose.model("order", OrderSchema);

module.exports = OrderModel;