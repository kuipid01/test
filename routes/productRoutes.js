import express from "express";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
} from "../controllers/productController.js";
import { protect } from "../controllers/authControllers.js";

const router = express.Router();

// Create a new product
router.post("", createProduct);
// Apply the `protect` middleware to the routes that require authentication
router.put("/products/:id", protect, updateProduct);
router.delete("/products/:id", protect, deleteProduct);
// Get all products with pagination
router.get("", getAllProducts);
router.get("/:id", getSingleProduct);
export default router;
