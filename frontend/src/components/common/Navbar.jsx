import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="logo">📈 StockPro</div>

      <div className="nav-links">
        <Link to="/">Dashboard</Link>

        {user && <Link to="/user">My Trades</Link>}
        {user?.role === "admin" && <Link to="/admin">Admin</Link>}

        {!user ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        ) : (
          <>
            <span className="welcome">Hi, {user.name}</span>
            <button className="btn-outline" onClick={logout}>
              Logout
            </button>
          </>
        )}

        <button className="btn-theme" onClick={() => setDark(!dark)}>
          {dark ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;