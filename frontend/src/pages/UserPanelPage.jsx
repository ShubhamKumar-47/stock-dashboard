import { useEffect, useState } from "react";
import API from "../services/api";
import Layout from "../components/layout/Layout";

const UserPanelPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [form, setForm] = useState({
    symbol: "",
    type: "buy",
    quantity: "",
    price: "",
  });

  const fetchTransactions = async () => {
    try {
      const res = await API.get("/transactions/my");
      setTransactions(res.data);
    } catch (error) {
      console.error("Error fetching user transactions", error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/transactions", form);

      setForm({
        symbol: "",
        type: "buy",
        quantity: "",
        price: "",
      });

      fetchTransactions();
    } catch (error) {
      console.error("Error creating transaction", error);
    }
  };

  return (
    <Layout>
      <div className="panel-wrapper">
        <h1>User Trading Panel</h1>

        {/* Create Transaction Card */}
        <div className="card">
          <h2>Create Transaction</h2>

          <form className="trade-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Stock Symbol (AAPL)"
              value={form.symbol}
              onChange={(e) =>
                setForm({ ...form, symbol: e.target.value.toUpperCase() })
              }
              required
            />

            <select
              value={form.type}
              onChange={(e) =>
                setForm({ ...form, type: e.target.value })
              }
            >
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
            </select>

            <input
              type="number"
              placeholder="Quantity"
              value={form.quantity}
              onChange={(e) =>
                setForm({ ...form, quantity: e.target.value })
              }
              required
            />

            <input
              type="number"
              placeholder="Price"
              value={form.price}
              onChange={(e) =>
                setForm({ ...form, price: e.target.value })
              }
              required
            />

            <button type="submit">Submit</button>
          </form>
        </div>

        {/* Transactions Card */}
        <div className="card">
          <h2>My Transactions</h2>

          {transactions.length === 0 ? (
            <p className="empty-text">No transactions yet</p>
          ) : (
            <table className="transaction-table">
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Type</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr key={tx._id}>
                    <td>{tx.symbol}</td>

                    <td className={tx.type === "buy" ? "buy" : "sell"}>
                      {tx.type.toUpperCase()}
                    </td>

                    <td>{tx.quantity}</td>
                    <td>${tx.price}</td>

                    <td
                      className={
                        tx.status === "approved"
                          ? "approved"
                          : tx.status === "rejected"
                          ? "rejected"
                          : "pending"
                      }
                    >
                      {tx.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default UserPanelPage;