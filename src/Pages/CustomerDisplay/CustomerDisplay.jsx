// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { motion } from "framer-motion";
// import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";
// import SideNav from "../Sidenav/Sidenav";

// function CustomerDisplay() {
//   const [customers, setCustomers] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [expandedGroup, setExpandedGroup] = useState(null); // Track expanded dropdown

//   useEffect(() => {
//     fetchCustomers();
//   }, []);

//   const fetchCustomers = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/customers");
//       setCustomers(response.data);
//     } catch (error) {
//       toast.error("Failed to fetch customers.", { position: "top-right" });
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/customers/${id}`);
//       toast.success("Customer deleted successfully!", {
//         position: "top-right",
//       });
//       setCustomers(customers.filter((customer) => customer._id !== id));
//     } catch (error) {
//       toast.error("Failed to delete customer.", { position: "top-right" });
//     }
//   };

//   // 🔍 Filter customers based on search query
//   const filteredCustomers = customers.filter((customer) =>
//     Object.values(customer).some(
//       (value) =>
//         typeof value === "string" &&
//         value.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//   );

//   // 🔠 Group customers alphabetically by first letter of name
//   const groupedCustomers = filteredCustomers.reduce((acc, customer) => {
//     const firstLetter = customer.name.charAt(0).toUpperCase();
//     acc[firstLetter] = acc[firstLetter] || [];
//     acc[firstLetter].push(customer);
//     return acc;
//   }, {});

//   return (
//     <>
//       <SideNav />
//       <div className="container mx-auto p-6 ml-[15%]">
//         <ToastContainer />

//         <motion.h2
//           className="text-3xl font-bold text-center text-blue-600 mb-6"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           📋 Customer List
//         </motion.h2>

//         {/* 🔍 Search Input */}
//         <div className="flex justify-end mb-4">
//           <div className="relative w-full max-w-md">
//             <input
//               type="text"
//               placeholder="Search customers..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full p-3 pl-10 border rounded-md"
//             />
//             <FaSearch className="absolute left-3 top-3 text-gray-500 text-lg" />
//           </div>
//         </div>

//         {/* No Data Found Message */}
//         {Object.keys(groupedCustomers).length === 0 && searchQuery && (
//           <p className="text-center text-red-500">No customers found</p>
//         )}

//         {/* Grouped Customer Dropdowns */}
//         <div className="space-y-6">
//           {Object.entries(groupedCustomers).map(([letter, letterCustomers]) => (
//             <motion.div
//               key={letter}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, ease: "easeOut" }}
//               className="bg-white shadow-md rounded-lg p-4"
//             >
//               {/* Dropdown Header */}
//               <div
//                 className="flex justify-between items-center cursor-pointer bg-gradient-to-r from-blue-400 to-green-400 text-white p-3 rounded-md"
//                 onClick={() =>
//                   setExpandedGroup(expandedGroup === letter ? null : letter)
//                 }
//               >
//                 <h3 className="text-lg font-semibold">
//                   🔠 {letter} ({letterCustomers.length} Customers)
//                 </h3>
//                 <span className="text-xl">
//                   {expandedGroup === letter ? "▲" : "▼"}
//                 </span>
//               </div>

//               {/* Dropdown Content */}
//               {expandedGroup === letter && (
//                 <motion.div
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   transition={{ duration: 0.4 }}
//                   className="p-4 border rounded-md mt-2 bg-gray-50 space-y-4"
//                 >
//                   {letterCustomers.map((customer) => (
//                     <div
//                       key={customer._id}
//                       className="border rounded-md p-4 bg-white shadow-md flex items-center"
//                     >
//                       <img
//                         src={
//                           customer.image
//                             ? `http://localhost:5000/document/${customer.image}`
//                             : "https://via.placeholder.com/50"
//                         }
//                         alt="customer"
//                         className="w-12 h-12 rounded-full shadow-md mr-4"
//                       />
//                       <div className="flex-1">
//                         <p className="text-gray-700">
//                           <strong>Name:</strong> {customer.name}
//                         </p>
//                         <p className="text-gray-700">
//                           <strong>Email:</strong> {customer.email}
//                         </p>
//                         <p className="text-gray-700">
//                           <strong>Phone:</strong> {customer.phone}
//                         </p>
//                         <p className="text-gray-700">
//                           <strong>Address:</strong> {customer.address}
//                         </p>
//                         <p className="text-gray-700">
//                           <strong>Gender:</strong> {customer.gender}
//                         </p>
//                       </div>

//                       <div className="flex space-x-2">
//                         <motion.button
//                           onClick={() => handleDelete(customer._id)}
//                           className="text-white bg-red-500 px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300 transform hover:scale-105"
//                         >
//                           <FaTrash />
//                         </motion.button>
//                       </div>
//                     </div>
//                   ))}
//                 </motion.div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default CustomerDisplay;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";
import SideNav from "../Sidenav/Sidenav";

function CustomerDisplay() {
  const [customers, setCustomers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedGroup, setExpandedGroup] = useState(null);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/customers");
      setCustomers(response.data);
    } catch (error) {
      toast.error("Failed to fetch customers.", { position: "top-right" });
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/customers/${id}`);
      toast.success("Customer deleted successfully!", {
        position: "top-right",
      });
      setCustomers(customers.filter((customer) => customer._id !== id));
    } catch (error) {
      toast.error("Failed to delete customer.", { position: "top-right" });
    }
  };

  const filteredCustomers = customers.filter((customer) =>
    Object.values(customer).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const groupedCustomers = filteredCustomers.reduce((acc, customer) => {
    const firstLetter = customer.name.charAt(0).toUpperCase();
    acc[firstLetter] = acc[firstLetter] || [];
    acc[firstLetter].push(customer);
    return acc;
  }, {});

  return (
    <>
      <SideNav />
      <div className="p-4 md:ml-[15%] pt-24 min-h-screen bg-gray-100">
        <ToastContainer />

        <motion.h2
          className="text-3xl font-bold text-center text-blue-600 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          📋 Customer List
        </motion.h2>

        {/* 🔍 Search Input */}
        <div className="flex justify-center mb-6">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search customers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 pl-10 border rounded-md focus:outline-none"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-500 text-lg" />
          </div>
        </div>

        {/* No Data Found */}
        {Object.keys(groupedCustomers).length === 0 && searchQuery && (
          <p className="text-center text-red-500">No customers found</p>
        )}

        {/* Grouped Customer Cards */}
        <div className="space-y-6">
          {Object.entries(groupedCustomers).map(([letter, group]) => (
            <motion.div
              key={letter}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Group Header */}
              <div
                className="flex justify-between items-center cursor-pointer bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-3"
                onClick={() =>
                  setExpandedGroup(expandedGroup === letter ? null : letter)
                }
              >
                <h3 className="text-lg font-semibold">
                  🔠 {letter} ({group.length})
                </h3>
                <span className="text-xl">
                  {expandedGroup === letter ? "▲" : "▼"}
                </span>
              </div>

              {/* Group Customers */}
              {expandedGroup === letter && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="p-4 space-y-4 bg-gray-50"
                >
                  {group.map((customer) => (
                    <div
                      key={customer._id}
                      className="bg-white shadow-sm rounded-lg p-4 flex flex-col md:flex-row items-start md:items-center gap-4"
                    >
                      <img
                        src={
                          customer.image
                            ? `http://localhost:5000/document/${customer.image}`
                            : "https://via.placeholder.com/50"
                        }
                        alt="customer"
                        className="w-16 h-16 rounded-full shadow-md object-cover"
                      />
                      <div className="flex-1 w-full">
                        <p>
                          <strong>Name:</strong> {customer.name}
                        </p>
                        <p>
                          <strong>Email:</strong> {customer.email}
                        </p>
                        <p>
                          <strong>Phone:</strong> {customer.phone}
                        </p>
                        <p>
                          <strong>Address:</strong> {customer.address}
                        </p>
                        <p>
                          <strong>Gender:</strong> {customer.gender}
                        </p>
                      </div>
                      <div className="flex space-x-2 self-end">
                        <motion.button
                          onClick={() => handleDelete(customer._id)}
                          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaTrash />
                        </motion.button>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CustomerDisplay;
