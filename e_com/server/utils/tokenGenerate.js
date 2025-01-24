const jwt = require('jsonwebtoken');
require('dotenv').config();


// Middleware to check for token
// const authMiddleware = (req, res, next) => {
//     const token = req.headers.authorization?.split(' ')[1];

//     if (token) {
//         jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//             if (err) {
//                 return res.status(403).json({ message: 'Token is invalid' });
//             }
//             req.user = user;
//             next();
//         });
//     } else {
//         return res.status(401).json({ message: 'Token is required' });
//     }
// };

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
        expiresIn: '30d'
    });
}

module.exports = {
    // authMiddleware,
    generateToken
}