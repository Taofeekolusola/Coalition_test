const express = require('express');
const router = express.Router();
const AsyncHandler = require('express-async-handler');
const Product = require('../models/Products');

router.get('/', AsyncHandler(async (req, res) => {
    const product = await Product.find({});
    res.status(200).json(product);
}))

router.get('/:id', AsyncHandler(async (req, res) => { 
    const product = await Product.findById(req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
}))

module.exports = router;