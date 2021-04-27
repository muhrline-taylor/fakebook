const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var SaleItemSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    condition: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
}, {timestamps: true})

const SaleItem = mongoose.model("SaleItem", SaleItemSchema);

module.exports = SaleItem;