import mongoose from "mongoose";

const Schema = mongoose.Schema
const ProductSchema = new Schema(
    {
        id: { type: String },
        name: {
            type: String,
            required: true
        },
        description: { type: String },
        price: {
            type: Number,
            required: true
        },
        category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    },
    {
        versionKey: false
    }
);

const Product = mongoose.model('Product', ProductSchema);

export default Product;