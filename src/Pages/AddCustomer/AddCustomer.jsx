// import React, { useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { motion } from "framer-motion";

// function AddCustomer() {
//   const [customer, setCustomer] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     gender: "",
//     image: null,
//   });

//   const handleChange = (e) => {
//     setCustomer({ ...customer, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setCustomer({ ...customer, image: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     Object.keys(customer).forEach((key) => {
//       formData.append(key, customer[key]);
//     });

//     try {
//       await axios.post("http://localhost:5000/api/customers", formData);
//       toast.success("Customer added successfully!", { position: "top-right" });
//       setCustomer({
//         name: "",
//         email: "",
//         phone: "",
//         address: "",
//         gender: "",
//         image: null,
//       });
//     } catch (error) {
//       toast.error("Failed to add customer.", { position: "top-right" });
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <ToastContainer />
//       <motion.div
//         className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
//           Add Customer
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-600 font-medium">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter Name"
//                 value={customer.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-600 font-medium">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter Email"
//                 value={customer.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-600 font-medium">Phone</label>
//               <input
//                 type="text"
//                 name="phone"
//                 placeholder="Enter Phone"
//                 value={customer.phone}
//                 onChange={handleChange}
//                 required
//                 className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-600 font-medium">Address</label>
//               <input
//                 type="text"
//                 name="address"
//                 placeholder="Enter Address"
//                 value={customer.address}
//                 onChange={handleChange}
//                 required
//                 className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-gray-600 font-medium">Gender</label>
//             <select
//               name="gender"
//               value={customer.gender}
//               onChange={handleChange}
//               required
//               className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-gray-600 font-medium">
//               Upload Image
//             </label>
//             <input
//               type="file"
//               onChange={handleFileChange}
//               className="w-full p-3 border border-gray-300 rounded-md"
//             />
//           </div>

//           <motion.button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
//             whileHover={{ scale: 1.05 }}
//           >
//             Submit
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// }

// export default AddCustomer;

// import React, { useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// // import image2 from "../images/ser.jpg"; // ✅ Used for navigation after registration

// function AddCustomer() {
//   const navigate = useNavigate();
//   const [customer, setCustomer] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     gender: "",
//     image: null,
//   });

//   const handleChange = (e) => {
//     setCustomer({ ...customer, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setCustomer({ ...customer, image: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     Object.keys(customer).forEach((key) => {
//       formData.append(key, customer[key]);
//     });

//     try {
//       await axios.post("http://localhost:5000/api/customers", formData);
//       toast.success("Registration successful!", { position: "top-right" });

//       setTimeout(() => {
//         navigate("/booking"); // ✅ Redirects to booking page after successful registration
//       }, 1500);

//       setCustomer({
//         name: "",
//         email: "",
//         phone: "",
//         address: "",
//         gender: "",
//         image: null,
//       });
//     } catch (error) {
//       toast.error("Registration failed! Try again.", { position: "top-right" });
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <ToastContainer />

//       {/* <div>
//         <img src={image2} alt="" />
//       </div> */}
//       <motion.div
//         className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h2 className="text-3xl font-bold text-center text-yellow-500 mb-6">
//           Register as Customer
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-600 font-medium">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter Name"
//                 value={customer.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-600 font-medium">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter Email"
//                 value={customer.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-600 font-medium">Phone</label>
//               <input
//                 type="text"
//                 name="phone"
//                 placeholder="Enter Phone"
//                 value={customer.phone}
//                 onChange={handleChange}
//                 required
//                 className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-600 font-medium">Address</label>
//               <input
//                 type="text"
//                 name="address"
//                 placeholder="Enter Address"
//                 value={customer.address}
//                 onChange={handleChange}
//                 required
//                 className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-gray-600 font-medium">Gender</label>
//             <select
//               name="gender"
//               value={customer.gender}
//               onChange={handleChange}
//               required
//               className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-gray-600 font-medium">
//               Upload Image
//             </label>
//             <input
//               type="file"
//               onChange={handleFileChange}
//               className="w-full p-3 border border-gray-300 rounded-md"
//             />
//           </div>

//           <motion.button
//             type="submit"
//             className="w-full bg-yellow-500 text-white py-3 rounded-md
//              hover:bg-green-500 transition duration-300"
//             whileHover={{ scale: 1.05 }}
//           >
//             Register & Book
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// }

// export default AddCustomer;

// import React, { useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import image from "../../images/booking.jpg"; // Replace with your image path
// import image1 from "../../images/team-1.jpg"; // Replace with your image path
// import image3 from "../../images/team-2.jpg"; // Replace with your image path
// import image4 from "../../images/team-5.jpg"; // Replace with your image path
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";

// function AddCustomer() {
//   const navigate = useNavigate();
//   const [customer, setCustomer] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     gender: "",
//     image: null,
//   });

//   const handleChange = (e) => {
//     setCustomer({ ...customer, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setCustomer({ ...customer, image: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     Object.keys(customer).forEach((key) => {
//       formData.append(key, customer[key]);
//     });

//     try {
//       await axios.post("http://localhost:5000/api/customers", formData);
//       toast.success("Registration successful!", { position: "top-right" });

//       setTimeout(() => {
//         navigate("/booking"); // Redirects to booking page after successful registration
//       }, 1500);

//       setCustomer({
//         name: "",
//         email: "",
//         phone: "",
//         address: "",
//         gender: "",
//         image: null,
//       });
//     } catch (error) {
//       toast.error("Registration failed! Try again.", { position: "top-right" });
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <ToastContainer />
//       <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 mt-20 p-4">
//         {/* Image Section */}
//         <motion.div
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="w-full md:w-[700px] h-auto md:h-[540px] bg-white rounded-lg shadow-lg overflow-hidden mb-8 md:mb-0 md:mr-8"
//         >
//           <img
//             src={image}
//             alt="Service"
//             className="w-full h-[200px] md:h-[300px] object-cover rounded-t-lg"
//           />
//           <div className="p-4 md:p-6">
//             <h2 className="text-xl md:text-2xl font-bold mb-4 text-green-500 animate-pulse">
//               Welcome to Our Service{" "}
//               <i className="fa-solid fa-door-open text-yellow-500"></i>
//             </h2>
//             <p className="text-sm md:text-base text-gray-700">
//               We are here to provide you with the best
//               <span className="text-yellow-500">Home</span> services.<br></br>{" "}
//               Explore our services and let us know how we can help you.
//             </p>

//             {/* Icons at the bottom */}
//             <div className="flex mt-6 space-x-4 md:space-x-6">
//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer animate-pulse"
//               >
//                 <img
//                   src={image1}
//                   alt="Icon 1"
//                   className="w-8 h-8 md:w-10 md:h-10 rounded-full shadow-lg shadow-yellow-500"
//                 />
//               </motion.div>
//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer animate-pulse"
//               >
//                 <img
//                   src={image3}
//                   alt="Icon 2"
//                   className="w-8 h-8 md:w-10 md:h-10 rounded-full shadow-lg shadow-yellow-500"
//                 />
//               </motion.div>
//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer animate-pulse"
//               >
//                 <img
//                   src={image4}
//                   alt="Icon 3"
//                   className="w-8 h-8 md:w-10 md:h-10 rounded-full shadow-lg shadow-yellow-500"
//                 />
//               </motion.div>
//               <i className="fa-solid fa-arrow-right ml-4 md:ml-10 mt-2 text-yellow-500 text-xl md:text-2xl"></i>
//             </div>
//           </div>
//         </motion.div>

//         {/* Form Section */}
//         <motion.div
//           className="w-full md:w-[500px] bg-white shadow-lg rounded-lg p-6 md:p-8"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-2xl md:text-3xl font-bold text-center text-yellow-500 mb-6">
//             Register as Customer
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-gray-600 font-medium">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Enter Name"
//                   value={customer.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full mt-1 p-2 md:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-600 font-medium">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter Email"
//                   value={customer.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full mt-1 p-2 md:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-gray-600 font-medium">Phone</label>
//                 <input
//                   type="text"
//                   name="phone"
//                   placeholder="Enter Phone"
//                   value={customer.phone}
//                   onChange={handleChange}
//                   required
//                   className="w-full mt-1 p-2 md:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-600 font-medium">
//                   Address
//                 </label>
//                 <input
//                   type="text"
//                   name="address"
//                   placeholder="Enter Address"
//                   value={customer.address}
//                   onChange={handleChange}
//                   required
//                   className="w-full mt-1 p-2 md:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-gray-600 font-medium">Gender</label>
//               <select
//                 name="gender"
//                 value={customer.gender}
//                 onChange={handleChange}
//                 required
//                 className="w-full mt-1 p-2 md:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="">Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-gray-600 font-medium">
//                 Upload Image
//               </label>
//               <input
//                 type="file"
//                 onChange={handleFileChange}
//                 className="w-full p-2 md:p-3 border border-gray-300 rounded-md"
//               />
//             </div>

//             <motion.button
//               type="submit"
//               className="w-full bg-green-500 text-white py-2 md:py-3 rounded-md hover:bg-green-600 transition duration-300"
//               whileHover={{ scale: 1.05 }}
//             >
//               Register & Book
//             </motion.button>
//           </form>
//         </motion.div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default AddCustomer;

// import React, { useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import image from "../../images/booking.jpg";
// import image1 from "../../images/team-1.jpg";
// import image3 from "../../images/team-2.jpg";
// import image4 from "../../images/team-5.jpg";
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";

// function AddCustomer() {
//   const navigate = useNavigate();
//   const [customer, setCustomer] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     gender: "",
//     image: null,
//   });

//   const handleChange = (e) => {
//     setCustomer({ ...customer, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setCustomer({ ...customer, image: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     Object.keys(customer).forEach((key) => {
//       formData.append(key, customer[key]);
//     });

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/customers",
//         formData
//       );
//       toast.success("Registration successful!", { position: "top-right" });

//       // ✅ Store user in localStorage so they can proceed to booking
//       localStorage.setItem(
//         "registeredUser",
//         JSON.stringify(response.data.data)
//       );

//       setTimeout(() => {
//         navigate("/booking"); // ✅ Redirects to booking page after successful registration
//       }, 1500);

//       setCustomer({
//         name: "",
//         email: "",
//         phone: "",
//         address: "",
//         gender: "",
//         image: null,
//       });
//     } catch (error) {
//       toast.error("Registration failed! Try again.", { position: "top-right" });
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <ToastContainer />
//       <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 mt-20 p-4">
//         {/* Image Section (Left Side) */}
//         <motion.div
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="w-full md:w-[700px] h-auto md:h-[540px] bg-white rounded-lg shadow-lg overflow-hidden mb-8 md:mb-0 md:mr-8"
//         >
//           <img
//             src={image}
//             alt="Service"
//             className="w-full h-[200px] md:h-[300px] object-cover rounded-t-lg"
//           />
//           <div className="p-4 md:p-6">
//             <h2 className="text-xl md:text-2xl font-bold mb-4 text-green-500 animate-pulse">
//               Welcome to Our Service{" "}
//               <i className="fa-solid fa-door-open text-yellow-500"></i>
//             </h2>
//             <p className="text-sm md:text-base text-gray-700">
//               We are here to provide you with the best{" "}
//               <span className="text-yellow-500">Home</span> services. <br />
//               Explore our services and let us know how we can help you.
//             </p>
//           </div>
//         </motion.div>

//         {/* Form Section (Right Side) */}
//         <motion.div
//           className="w-full md:w-[500px] bg-white shadow-lg rounded-lg p-6 md:p-8"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-2xl md:text-3xl font-bold text-center text-yellow-500 mb-6">
//             Register as Customer
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter Name"
//               value={customer.name}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border rounded-md"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter Email"
//               value={customer.email}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border rounded-md"
//             />
//             <input
//               type="text"
//               name="phone"
//               placeholder="Enter Phone"
//               value={customer.phone}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border rounded-md"
//             />
//             <input
//               type="text"
//               name="address"
//               placeholder="Enter Address"
//               value={customer.address}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border rounded-md"
//             />
//             <select
//               name="gender"
//               value={customer.gender}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border rounded-md"
//             >
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//             </select>
//             <input
//               type="file"
//               onChange={handleFileChange}
//               className="w-full p-3 border rounded-md"
//             />

//             <motion.button
//               type="submit"
//               className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
//               whileHover={{ scale: 1.05 }}
//             >
//               Register & Book
//             </motion.button>
//           </form>
//         </motion.div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default AddCustomer;

//last

import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import image from "../../images/booking.jpg";
// import image1 from "../../images/team-1.jpg";
// import image3 from "../../images/team-2.jpg";
// import image4 from "../../images/team-5.jpg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function AddCustomer() {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    image: null,
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
  });

  const validateInput = (name, value) => {
    let error = "";
    if (name === "name") {
      if (!/^[A-Za-z\s]+$/.test(value)) {
        error = "Only letters and spaces are allowed in the name.";
      }
    }
    if (name === "phone") {
      if (!/^\d+$/.test(value)) {
        error = "Only numbers are allowed in the phone number.";
      }
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    validateInput(name, value);
    setCustomer({ ...customer, [name]: value });
  };

  const handleFileChange = (e) => {
    setCustomer({ ...customer, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(customer).forEach((key) => {
      formData.append(key, customer[key]);
    });

    try {
      const response = await axios.post(
        "http://localhost:5000/api/customers",
        formData
      );
      toast.success("Registration successful!", { position: "top-right" });

      // ✅ Store user in localStorage so they can proceed to booking
      localStorage.setItem(
        "registeredUser",
        JSON.stringify(response.data.data)
      );

      setTimeout(() => {
        navigate("/booking"); // ✅ Redirects to booking page after successful registration
      }, 1500);

      setCustomer({
        name: "",
        email: "",
        phone: "",
        address: "",
        gender: "",
        image: null,
      });
    } catch (error) {
      toast.error("Registration failed! Try again.", { position: "top-right" });
    }
  };

  const isFormValid = () => {
    return (
      customer.name &&
      customer.email &&
      customer.phone &&
      customer.address &&
      customer.gender &&
      !errors.name &&
      !errors.phone
    );
  };

  return (
    <div>
      <Header />
      <ToastContainer />
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 mt-20 p-4">
        {/* Image Section (Left Side) */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-[700px] h-auto md:h-[540px] bg-white rounded-lg shadow-lg overflow-hidden mb-8 md:mb-0 md:mr-8"
        >
          <img
            src={image}
            alt="Service"
            className="w-full h-[200px] md:h-[300px] object-cover rounded-t-lg"
          />
          <div className="p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-green-500 animate-pulse">
              Welcome to Our Service{" "}
              <i className="fa-solid fa-door-open text-yellow-500"></i>
            </h2>
            <p className="text-sm md:text-base text-gray-700">
              We are here to provide you with the best{" "}
              <span className="text-yellow-500">Home</span> services. <br />
              Explore our services and let us know how we can help you.
            </p>
          </div>
        </motion.div>

        {/* Form Section (Right Side) */}
        <motion.div
          className="w-full md:w-[500px] bg-white shadow-lg rounded-lg p-6 md:p-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center text-yellow-500 mb-6">
            Register as Customer
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={customer.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md"
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={customer.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md"
              />
            </div>

            <div>
              <input
                type="text"
                name="phone"
                placeholder="Enter Phone"
                value={customer.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md"
              />
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}
            </div>

            <div>
              <input
                type="text"
                name="address"
                placeholder="Enter Address"
                value={customer.address}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md"
              />
            </div>

            <div>
              <select
                name="gender"
                value={customer.gender}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full p-3 border rounded-md"
              />
            </div>

            <motion.button
              type="submit"
              className={`w-full text-white py-2 rounded-md transition duration-300 ${
                isFormValid()
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-yellow-500 cursor-not-allowed"
              }`}
              whileHover={{ scale: 1.05 }}
              disabled={!isFormValid()}
            >
              Register & Book
            </motion.button>
          </form>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default AddCustomer;
