import { createContext, useState, useEffect } from "react";
import API from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔥 Attach token to every request
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  // 🔥 Load user on app start (refresh safe)
  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const res = await API.get("/auth/me");
        setUser(res.data);
      } catch (error) {
        console.error("Failed to load user:", error);
        localStorage.removeItem("token");
        delete API.defaults.headers.common["Authorization"];
      }

      setLoading(false);
    };

    loadUser();
  }, []);

  // 🔥 Login
  const login = async (data) => {
    try {
      const res = await API.post("/auth/login", data);

      localStorage.setItem("token", res.data.token);
      API.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
      setUser(res.data.user);

      return true;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  // 🔥 Signup
  const signup = async (data) => {
    try {
      const res = await API.post("/auth/signup", data);

      localStorage.setItem("token", res.data.token);
      API.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
      setUser(res.data.user);

      return true;
    } catch (error) {
      console.error("Signup error:", error);
      return false;
    }
  };

  // 🔥 Logout
  const logout = () => {
    localStorage.removeItem("token");
    delete API.defaults.headers.common["Authorization"];
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        loading,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};