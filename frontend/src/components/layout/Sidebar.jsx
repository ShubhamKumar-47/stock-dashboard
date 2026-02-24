import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>📈 StockPro</h2>

      <Link to="/">Dashboard</Link>
      <Link to="/user">My Trades</Link>
      <Link to="/admin">Admin</Link>
    </div>
  );
};

export default Sidebar;