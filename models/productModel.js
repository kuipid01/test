// Import Mongoose
import mongoose from 'mongoose';

// Destructure Schema from mongoose
const { Schema } = mongoose;

// Define the Product schema
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    trim: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
 createdBy:{
  type:String
 },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Add a pre-save hook to update the `updatedAt` field
productSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create the Product model
const Product = mongoose.model('Product', productSchema);

export default Product;
