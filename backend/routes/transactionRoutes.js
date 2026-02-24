import express from "express";
import {
  createTransaction,
  getUserTransactions,
  getAllTransactions,
  updateTransactionStatus
} from "../controllers/transactionController.js";
import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/adminMiddleware.js";

const router = express.Router();

// User
router.post("/", protect, createTransaction);
router.get("/my", protect, getUserTransactions);

// Admin
router.get("/", protect, adminOnly, getAllTransactions);
router.put("/:id", protect, adminOnly, updateTransactionStatus);

export default router;