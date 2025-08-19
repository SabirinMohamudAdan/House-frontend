// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("user"); // Default role: User
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // ✅ Function to validate email format
//   const isValidEmail = (email) => {
//     return /\S+@\S+\.\S+/.test(email);
//   };

//   // ✅ Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // ✅ Basic validation
//     if (!name || !email || !password) {
//       toast.error("All fields are required!", { position: "top-right" });
//       return;
//     }

//     if (!isValidEmail(email)) {
//       toast.error("Invalid email format!", { position: "top-right" });
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/register",
//         {
//           name,
//           email,
//           password,
//           isAdmin: role === "admin", // ✅ Set role as admin if selected
//         }
//       );

//       if (response.data.success) {
//         toast.success("User registered successfully!", {
//           position: "top-right",
//         });
//         setTimeout(() => navigate("/Login"), 2000);
//       } else {
//         toast.error(response.data.message || "Registration failed!", {
//           position: "top-right",
//         });
//       }
//     } catch (error) {
//       const errorMessage =
//         error.response?.data?.message || "Failed to register. Try again!";
//       toast.error(errorMessage, { position: "top-right" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen
//     bg-gradient-to-r from-green-500 bg-[#0a1636] shadow-xl text-white">
//       <ToastContainer />
//       <div className="bg-gradient-to-r from-green-500 bg-[#0a1636] shadow-lg rounded-lg p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="name" className="block font-medium">
//               Name
//             </label>
//             <input
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               type="text"
//               placeholder="Enter Name"
//               required
//               className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block font-medium">
//               Email
//             </label>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               placeholder="Enter Email"
//               required
//               className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//             />
//           </div>

//           <div>
//             <label htmlFor="password" className="block font-medium">
//               Password
//             </label>
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               placeholder="******"
//               required
//               className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//             />
//           </div>

//           {/* ✅ Role Selection */}
//           <div>
//             <label htmlFor="role" className="block font-medium">
//               Role
//             </label>
//             <select
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//             >
//               <option value="user">User</option>
//               <option value="admin">Admin</option>
//             </select>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full text-white py-3 rounded-md transition duration-300 ${
//               loading
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-yellow-500 hover:bg-yellow-500"
//             }`}
//           >
//             {loading ? "Signing up..." : "Signup"}
//           </button>
//         </form>

//         <p className="text-center text-yellow-500 mt-4">
//           Already have an account?{" "}
//           <Link to="/Login" className="text-white hover:underline text-lg">
//             Login
//           </Link>
//         </p>
//         <hr className="bg-gray-300 mt-5" />
//       </div>
//     </div>
//   );
// }

// export default Signup;

// this what i want
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = (e) => {
//     e.preventDefault();

//     // Save user in localStorage
//     const newUser = { email, password };
//     localStorage.setItem("user", JSON.stringify(newUser));

//     alert("Signup successful! Now please log in.");
//     navigate("/login"); // Redirect to Login
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
//         <form onSubmit={handleSignup}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               className="w-full px-4 py-2 border rounded-md"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               className="w-full px-4 py-2 border rounded-md"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
//           >
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = (e) => {
//     e.preventDefault();

//     // Save user in localStorage
//     const newUser = { email, password };
//     localStorage.setItem("user", JSON.stringify(newUser));

//     alert("Signup successful! Please log in.");
//     navigate("/login"); // Redirect to Login
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
//         <form onSubmit={handleSignup} className="space-y-4">
//           <div>
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               className="w-full px-4 py-2 border rounded-md"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               className="w-full px-4 py-2 border rounded-md"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
//           >
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("user");
//   const navigate = useNavigate();

//   const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !password) {
//       toast.error("All fields are required!", { position: "top-right" });
//       return;
//     }

//     if (!isValidEmail(email)) {
//       toast.error("Invalid email format!", { position: "top-right" });
//       return;
//     }

//     // Save user in localStorage
//     const newUser = { name, email, password, role };
//     localStorage.setItem("user", JSON.stringify(newUser));

//     toast.success("Signup successful! Redirecting to Login...", {
//       position: "top-right",
//     });

//     setTimeout(() => navigate("/login"), 2000);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-500 bg-[#0a1636] shadow-xl text-white">
//       <ToastContainer />
//       <div className="bg-gradient-to-r from-green-500 bg-[#0a1636] shadow-lg rounded-lg p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="name" className="block font-medium">
//               Name
//             </label>
//             <input
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               type="text"
//               placeholder="Enter Name"
//               required
//               className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block font-medium">
//               Email
//             </label>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               placeholder="Enter Email"
//               required
//               className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//             />
//           </div>

//           <div>
//             <label htmlFor="password" className="block font-medium">
//               Password
//             </label>
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               placeholder="******"
//               required
//               className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full text-white py-3 rounded-md bg-yellow-500 hover:bg-yellow-500 transition duration-300"
//           >
//             Signup
//           </button>
//         </form>

//         <p className="text-center text-yellow-500 mt-4">
//           Already have an account?{" "}
//           <Link to="/login" className="text-white hover:underline text-lg">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !password) {
//       toast.error("Dhammaan meelaha waa inay buuxsamaan!", {
//         position: "top-right",
//       });
//       return;
//     }

//     if (!isValidEmail(email)) {
//       toast.error("Email-ka aad gelisay sax ma aha!", {
//         position: "top-right",
//       });
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/register",
//         {
//           name,
//           email,
//           password,
//         }
//       );

//       if (response.data.success) {
//         toast.success("Signup guuleystay! Sug inta admin-ku kuu fasaxayo.", {
//           position: "top-right",
//         });
//         setTimeout(() => navigate("/login"), 2000);
//       } else {
//         toast.error(response.data.message || "Signup ma shaqeyn!", {
//           position: "top-right",
//         });
//       }
//     } catch (error) {
//       toast.error("Error ka dhacay server-ka!", { position: "top-right" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-[#0a1636] shadow-xl text-white">
//       <ToastContainer />
//       <div className="bg-[#0a1636] shadow-lg rounded-lg p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div>
//             <label className="block font-medium">Magaca</label>
//             <input
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               type="text"
//               placeholder="Magacaaga"
//               required
//               className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-black"
//             />
//           </div>

//           <div>
//             <label className="block font-medium">Email</label>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               placeholder="Email-kaaga"
//               required
//               className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-black"
//             />
//           </div>

//           <div>
//             <label className="block font-medium">Password</label>
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               placeholder="******"
//               required
//               className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-black"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full text-white py-3 rounded-md transition duration-300 ${
//               loading
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-yellow-500 hover:bg-yellow-500"
//             }`}
//           >
//             {loading ? "Signup Socota..." : "Signup"}
//           </button>
//         </form>

//         <p className="text-center text-yellow-500 mt-4">
//           Horey account ma u leedahay?{" "}
//           <Link to="/login" className="text-white hover:underline text-lg">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;
