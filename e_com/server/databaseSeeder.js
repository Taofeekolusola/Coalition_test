const router = require('express').Router();
const users = require('./data/user');
const User = require('./models/Users')
const Product = require('./models/Products')
const products = require('./data/products');
const AsyncHandler = require('express-async-handler')


router.post('/user', AsyncHandler(async (req, res) => { 
    await User.deleteMany({})
    const userSeeders = await User.insertMany(users)
    res.send(userSeeders)
}))

router.post('/product', AsyncHandler(async (req, res) => { 
    await Product.deleteMany({})
    const productSeeders = await Product.insertMany(products)
    res.send(productSeeders)
}))

module.exports = router;