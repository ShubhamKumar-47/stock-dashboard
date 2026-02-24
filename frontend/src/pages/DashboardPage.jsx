import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";

const DashboardPage = () => {
  const [symbol, setSymbol] = useState("");
  const navigate = useNavigate();

  const searchStock = () => {
    if (!symbol.trim()) return;
    navigate(`/stock/${symbol.toUpperCase()}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchStock();
    }
  };

  return (
    <Layout>
      <div className="dashboard-wrapper">
        
        {/* Header */}
        <div className="dashboard-header">
          <h1>📊 Market Dashboard</h1>
          <p>Track stocks, manage trades, and monitor your portfolio.</p>
        </div>

        {/* Search Section */}
        <div className="dashboard-search card">
          <h3>Search Stock</h3>
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter stock symbol (AAPL)"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button onClick={searchStock}>Search</button>
          </div>

          {/* Quick buttons */}
          <div className="quick-stocks">
            {["AAPL", "TSLA", "MSFT", "GOOGL"].map((stock) => (
              <button
                key={stock}
                className="quick-btn"
                onClick={() => navigate(`/stock/${stock}`)}
              >
                {stock}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Summary */}
        <div className="dashboard-cards">
          <div className="card">
            <h3>Total Portfolio</h3>
            <p className="card-value">$12,450</p>
          </div>

          <div className="card">
            <h3>Today's Gain</h3>
            <p className="card-value positive">+$245</p>
          </div>

          <div className="card">
            <h3>Active Trades</h3>
            <p className="card-value">8</p>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default DashboardPage;