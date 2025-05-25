//Create this file /src/components Route protection component, Redirects unauthenticated users to login
import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../contexts/authContext";

const ProtectedRoute = ({ children }) => {
  const context = useContext(AuthContext);
  const location = useLocation();

  return context.isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default ProtectedRoute;