import express from "express";
import {
  createOrder,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrderById,
  getAllOrders,
} from "../controllers/orderController.js";
import { isLoggedIn, protect } from "../controllers/authControllers.js";

const router = express.Router();

// Create a new order
router.post("/", protect, createOrder);

// Get an order by ID
router.get("/orders/:id", protect, getOrderById);

// Update an order to paid
router.put("/orders/:id/pay", protect, updateOrderToPaid);

// Update an order to delivered
router.put("/orders/:id/deliver", protect, updateOrderToDelivered);

// Get all orders
router.get("/", getAllOrders);
export default router;
