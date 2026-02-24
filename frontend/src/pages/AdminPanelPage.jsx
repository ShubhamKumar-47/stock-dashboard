import { useEffect, useState } from "react";
import API from "../services/api";

const AdminPanelPage = () => {
  const [transactions, setTransactions] = useState([]);

  // Fetch all transactions (Admin route)
  const fetchTransactions = async () => {
    try {
      const res = await API.get("/transactions");
      setTransactions(res.data);
    } catch (error) {
      console.error("Error fetching transactions", error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  // Approve / Reject
  const updateStatus = async (id, status) => {
    try {
      await API.put(`/transactions/${id}`, { status });
      fetchTransactions(); // Refresh after update
    } catch (error) {
      console.error("Error updating status", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Panel</h2>

      {transactions.length === 0 ? (
        <p>No transactions found</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Symbol</th>
              <th>Type</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((tx) => (
              <tr key={tx._id}>
                <td>{tx.user?.name}</td>
                <td>{tx.user?.email}</td>
                <td>{tx.symbol}</td>
                <td>{tx.type}</td>
                <td>{tx.quantity}</td>
                <td>{tx.price}</td>
                <td>{tx.status}</td>
                <td>
                  {tx.status === "pending" && (
                    <>
                      <button
                        onClick={() =>
                          updateStatus(tx._id, "approved")
                        }
                        style={{ marginRight: "5px" }}
                      >
                        Approve
                      </button>

                      <button
                        onClick={() =>
                          updateStatus(tx._id, "rejected")
                        }
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminPanelPage;