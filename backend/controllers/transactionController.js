import Transaction from "../models/Transaction.js";

// Create transaction
export const createTransaction = async (req, res) => {
  const { symbol, type, quantity, price } = req.body;

  const transaction = await Transaction.create({
    user: req.user._id,
    symbol,
    type,
    quantity,
    price
  });

  res.status(201).json(transaction);
};

// User transactions
export const getUserTransactions = async (req, res) => {
  const transactions = await Transaction.find({
    user: req.user._id
  });

  res.json(transactions);
};

// Admin - all transactions
export const getAllTransactions = async (req, res) => {
  const transactions = await Transaction.find().populate("user", "name email");
  res.json(transactions);
};

// Admin approve/reject
export const updateTransactionStatus = async (req, res) => {
  const { status } = req.body;

  const transaction = await Transaction.findById(req.params.id);

  if (!transaction) {
    return res.status(404).json({ message: "Transaction not found" });
  }

  transaction.status = status;
  await transaction.save();

  res.json(transaction);
};