const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const AsyncHandler = require('express-async-handler')
const { generateToken } = require('../utils/tokenGenerate')
const authMiddleware = require('../utils/auth');


//Loging user
router.post('/login', AsyncHandler(async (req, res) => { 
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
            createdAt: user.createdAt
        });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
}))

//Register User
router.post('/', AsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
    }
    const user = await User.create({
        name,
        email,
        password
    });
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
            createdAt: user.createdAt
        });
    } else {
        res.status(400).json({ message: 'Invalid user data' });
    }
}))

//Get user profile
router.get('/profile', authMiddleware, AsyncHandler(async (req, res) => { 
    const user = await User.findById(req.user._id);
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            createdAt: user.createdAt
        });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
}))

// Update user profile

router.put('/profile', authMiddleware, AsyncHandler(async (req, res) => { 
    const user = await User.findById(req.user._id);
    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if (req.body.password) {
            user.password = req.body.password
        }
        const updatedUser = await user.save()
        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            createdAt: updatedUser.createdAt,
            token: generateToken(updatedUser._id)
        })
    } else {
        res.status(404).json({ message: 'User not found' });
    }
}))
module.exports = router;