// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useAuth } from "../../components/context/ContextProvide";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { login } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         { email, password }
//       );

//       if (response.data.success) {
//         toast.success("Login successful!", { position: "top-right" });

//         // ✅ Save user to localStorage (Fixes logout issue in Chrome)
//         localStorage.setItem("user", JSON.stringify(response.data.user));
//         localStorage.setItem("token", response.data.token);
//         login(response.data.user);

//         // ✅ Redirect to previous page or dashboard
//         navigate(location.state?.from || "/dashboard");
//       } else {
//         toast.error("Invalid email or password!", { position: "top-right" });
//       }
//     } catch (error) {
//       toast.error("Server error! Try again.", { position: "top-right" });
//     }
//   };

//   return (
//     <div
//       className="flex justify-center items-center min-h-screen
//      bg-gradient-to-r from-green-500 bg-[#0a1636] shadow-xl"
//     >
//       <ToastContainer />
//       <div className="bg-gradient-to-r from-green-500 bg-[#0a1636] shadow-lg rounded-lg p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center text-white mb-6">
//           Login
//         </h2>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div className="relative">
//             <label htmlFor="email" className="block text-white font-medium">
//               Email
//             </label>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               placeholder="Enter Email"
//               required
//               className="w-full mt-1 py-3 p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="relative">
//             <label htmlFor="password" className="block text-white font-medium">
//               Password
//             </label>
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               placeholder="******"
//               required
//               className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-500 transition duration-300"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../components/context/ContextProvide";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      if (response.data.success) {
        toast.success("Login successful!", { position: "top-right" });

        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);
        login(response.data.user);

        navigate(location.state?.from || "/dashboard");
      } else {
        toast.error("Invalid email or password!", { position: "top-right" });
      }
    } catch (error) {
      toast.error("Server error! Try again.", { position: "top-right" });
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1470&q=80')`,
      }}
    >
      <ToastContainer />
      <div className="bg-white bg-opacity-90 shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Email"
              required
              className="w-full mt-1 py-3 p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="******"
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
