import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId },
  name: String,
});

const Category = mongoose.model('Category', CategorySchema);


export default Category;