import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const ProtectedRoute = ({ children, isProtected = false }) => {
  const { isLoggedIn } = useAuth();

  // If it's a protected route and the user is not logged in, redirect to signin
  if (isProtected && !isLoggedIn) {
    return <Navigate to="/signin" replace />;
  }

  // If the user is logged in and trying to access the signin page, redirect them to profile
  if (!isProtected && isLoggedIn) {
    return <Navigate to="/profile" replace />;
  }

  // Otherwise, render the children (the route component like Signin or Profile)
  return children;
};

export default ProtectedRoute;
