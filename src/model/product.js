import mongoose from "mongoose";

const Schema = mongoose.Schema
const ProductSchema = new Schema(
    {
        id: { type: String },
        name: String,
        description: String,
        price: Number,
        category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    },
    {
        versionKey: false
    }
);

const Product = mongoose.model('Product', ProductSchema);

export default Product;