import axios from "axios";

// Get current stock data
export const getStock = async (req, res) => {
  const { symbol } = req.params;

  try {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${process.env.STOCK_API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Stock API Error" });
  }
};