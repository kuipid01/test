import Product from '../models/productModel.js';


// Create a new product
export const createProduct = async (req, res) => {
    try {
      const product = new Product({
        ...req.body, 
      });
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // Update an existing product
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const user = req.user
    try {
      const product = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      const checkIfOwnerIsTryingToUpdate = product.createdBy===user._id
      if(!checkIfOwnerIsTryingToUpdate){
        return res.status(404).json({ message: 'You can only update your product' });
      }
      res.json(product);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

 // get single existing product
 export const getSingleProduct = async (req, res) => {
    const { id } = req.params;
    
    try {
      const product = await Product.findById(id );
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
     
      res.json(product);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  // Delete a product
export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const user = req.user
    try {
      const productIni = await Product.findById(id);
      if (!productIni) {
        return res.status(404).json({ message: 'Product not found' });
      }
      const checkIfOwnerIsTryingToUpdate = productIni.createdBy===user._id
      if(!checkIfOwnerIsTryingToUpdate){
        return res.status(404).json({ message: 'You can only delete your product' });
      }
      const product = await Product.findByIdAndDelete(id);
     
      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };


  // Get all products with pagination
export const getAllProducts = async (req, res) => {
    const pageSize = 20;
    const page = Number(req.query.pageNumber) || 1;
    
    try {
      const count = await Product.countDocuments({});
      const products = await Product.find({})
        .limit(pageSize)
        .skip(pageSize * (page - 1));
      
      res.json({
        products,
        page,
        pages: Math.ceil(count / pageSize),
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };