const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const AsyncHandler = require('express-async-handler');
const authMiddleware = require('../utils/auth');


//create order
router.post('/', authMiddleware, AsyncHandler(async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        taxPrice,
        shippingPrice,
        totalPrice,
        price
    } = req.body;

    if (orderItems && orderItems.length === 0) {
        return res.status(400).json({ message: 'No order items' });
    } else {
        const order = new Order({
            user: req.user._id,
            orderItems,
            shippingAddress,
            paymentMethod,
            taxPrice,
            shippingPrice,
            totalPrice,
            price
        });
        const createdOrder = await order.save();
        res.status(201).json(createdOrder);
    }
}))

module.exports = router