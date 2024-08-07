const mongoose = require('mongoose');

const userBook = new mongoose.Schema({
    name: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    service: {
        type: String,
    },
    area: {
        type: String,
    },
    address: {
        type: String,
    },
    // carrier: {
    //     type: String,
    // },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Book = mongoose.model('Book', userBook);
module.exports = Book;