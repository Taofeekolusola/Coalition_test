const mongoose = require('mongoose');

const orderItems = mongoose.Schema({
        product: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Products'
        },
        quantity: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    
})

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    orderItems: [orderItems],
    shippingAddress: {
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        postalCode: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    },
    paymentMethod: {
        type: String,
        required: true,
        default: 'paypal'
    },
    // paymentResult: {
    //     id: {
    //         type: String,
    //         required: true
    //     },
    //     status: {
    //         type: String,
    //         required: true
    //     },
    //     updateTime: {
    //         type: Date,
    //         required: true
    //     },
    //     email_address: {
    //         type: String,
    //         required: true
    //     }
    // },
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        required: false,
        default: false
    },
    paidAt: {
        type: Date,
        required: false,
        default: null
    },
    isDelivered: {
        type: Boolean,
        required: false,
        default: false
    }
},
{
    timestamps: true,
    })

module.exports = mongoose.model('Order', orderSchema)