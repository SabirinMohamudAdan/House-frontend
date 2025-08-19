

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
