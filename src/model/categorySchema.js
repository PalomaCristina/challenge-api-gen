import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  id: { type: String },
  name: {
    type: String,
    required: true
  },
  interestRate:{
    type: Number,
    required: true
  }
},
  {
    versionKey: false
  });

const Category = mongoose.model('Category', CategorySchema);


export default Category;