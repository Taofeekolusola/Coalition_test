const express = require('express')
const app = express()
const dotenv = require('dotenv')
const products = require('./data/products')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const orderRoutes = require('./routes/orderRoutes')
dotenv.config()
const PORT = process.env.PORT


app.use(express.json())


const mongoose = require('mongoose')
mongoose
  .connect(process.env.URI)
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.error("DB connection error:", err));

const databaseSeeder = require('./databaseSeeder')
app.use('/api/seed', databaseSeeder);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.listen(PORT || 4004, () => {
    console.log(`server listening on port ${PORT}`)
})







// app.get("/api/products", (req, res) => {
//     res.json(products)
// })

// app.get("/api/products/:id", (req, res) => {
//     const product = products.find(p => p.id === parseInt(req.params.id))
//     res.json(product)
// })
