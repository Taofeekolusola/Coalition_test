const jwt = require('jsonwebtoken');
const AsyncHandler = require('express-async-handler')
const User = require('../models/Users');


const authMiddleware = AsyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try { 
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            req.user = await User.findById(decoded.id).select("-password");
            next();
        } catch (err) {
            return res.status(401).json({ message: 'Token is not valid' });
        }
    }
    if (!token) {
        return res.status(401).json({ message: 'Token is required' });
    }
});

module.exports = authMiddleware;