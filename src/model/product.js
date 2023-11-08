import mongoose from "mongoose";

const ProductSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId },
    name: String,
    description: String,
    price: Number,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;