import User from "../models/User.js";

// Add stock
export const addToWatchlist = async (req, res) => {
  const { symbol } = req.body;

  const user = await User.findById(req.user._id);

  if (!user.watchlist.includes(symbol)) {
    user.watchlist.push(symbol);
    await user.save();
  }

  res.json(user.watchlist);
};

// Remove stock
export const removeFromWatchlist = async (req, res) => {
  const { symbol } = req.body;

  const user = await User.findById(req.user._id);

  user.watchlist = user.watchlist.filter(
    (stock) => stock !== symbol
  );

  await user.save();

  res.json(user.watchlist);
};

// Get watchlist
export const getWatchlist = async (req, res) => {
  const user = await User.findById(req.user._id);
  res.json(user.watchlist);
};