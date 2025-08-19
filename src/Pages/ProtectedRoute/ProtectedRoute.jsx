// // src/components/ProtectedRoute.js
// import { useAuth } from "../../components/context/ContextProvide";
// import { useState } from "react";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   const { isAuthenticated, login } = useAuth();
//   const [showLogin, setShowLogin] = useState(!isAuthenticated);

//   const handleLogin = () => {
//     login();
//     setShowLogin(false);
//   };

//   if (!isAuthenticated) {
//     return showLogin ? (
//       <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-xl font-bold mb-4">Login Required</h2>
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded-md"
//             onClick={handleLogin}
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     ) : (
//       <Navigate to="/" />
//     );
//   }

//   return children;
// };

// export default ProtectedRoute;

// i will comback

// import { Navigate, useLocation } from "react-router-dom";
// import { useAuth } from "../../components/context/ContextProvide";

// const ProtectedRoute = ({ children }) => {
//   const { user } = useAuth();
//   const location = useLocation();
//   const savedUser = JSON.parse(localStorage.getItem("user"));

//   // If no user exists, send them to SignUp first
//   if (!savedUser) {
//     return <Navigate to="/register" replace />;
//   }

//   // If user is not logged in, send them to Login first
//   if (!user) {
//     return <Navigate to="/login" state={{ from: location.pathname }} replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;

// import { Navigate, useLocation } from "react-router-dom";
// import { useAuth } from "../../components/context/ContextProvide";

// const ProtectedRoute = ({ children }) => {
//   const { user } = useAuth();
//   const location = useLocation();
//   const savedUser = JSON.parse(localStorage.getItem("user"));

//   // If user is not logged in, send them to Login page
//   if (!savedUser || !user) {
//     return <Navigate to="/login" state={{ from: location.pathname }} replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;

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
