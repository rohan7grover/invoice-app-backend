const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        desc: { type: String, required: true },
        img: { type: String, required: true },
        categories: { type: Array },
        size: { type: String },
        color: { type: String },
        price: { type: Number, required: true },
        type: {
            type: String,
            enum: ["product", "service"],
            required: true
        }
    }, { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);