

import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../components/context/ContextProvide";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  const savedUser = JSON.parse(localStorage.getItem("user"));

  // ✅ If user is not logged in, redirect to login and remember the attempted URL
  if (!savedUser || !user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
};

export default ProtectedRoute;
