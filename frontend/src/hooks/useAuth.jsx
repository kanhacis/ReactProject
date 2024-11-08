import React, { useState, useContext, createContext, useEffect } from "react";
import authService from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = async (data) => {
    try {
      setError(null);
      const response = await authService.login(data);
      
      if (response.status === 200) {
        const { access_token, email } = response.data;
        localStorage.setItem("access_token", access_token);
        setUser(email);
        setIsLoggedIn(true);
        return true;
      }
    } catch (err) {
      const errorDetails = {
        detail: err.response.data.detail,
        status: err.response.status,
      };
      setError(errorDetails);
      setIsLoggedIn(false);
      return errorDetails;
    }
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, error, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
