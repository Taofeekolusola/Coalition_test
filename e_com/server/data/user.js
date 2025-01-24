const bcrypt = require('bcryptjs');

const user = [
    {
        name: "John Doe",
        email: "john.doe@example.com",
        password: bcrypt.hashSync("password123", 10),
        isAdmin: true
    },
    // Add more users here...
    {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        password: bcrypt.hashSync("password456", 10),
        isAdmin: false
    },
]

module.exports = user;