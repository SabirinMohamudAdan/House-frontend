// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FaTrash, FaSearch } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import { io } from "socket.io-client";
// import SideNav from "../Sidenav/Sidenav";

// const socket = io("http://localhost:5000");

// function ContactMessages() {
//   const [messages, setMessages] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   // Fetch Messages from Backend
//   useEffect(() => {
//     fetchMessages();

//     // Real-time message updates
//     socket.on("newMessage", fetchMessages);

//     return () => {
//       socket.off("newMessage", fetchMessages);
//     };
//   }, []);

//   const fetchMessages = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/contacts");
//       setMessages(response.data);
//     } catch (error) {
//       toast.error("Failed to fetch messages!", { position: "top-right" });
//     }
//   };

//   // Delete Message
//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this message?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/contacts/${id}`);
//         setMessages(messages.filter((message) => message._id !== id));
//         toast.success("Message deleted!", { position: "top-right" });
//       } catch (error) {
//         toast.error("Failed to delete message!", { position: "top-right" });
//       }
//     }
//   };

//   // Filter Messages
//   const filteredMessages = messages.filter((msg) =>
//     Object.values(msg)
//       .join(" ")
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase())
//   );

//   return (
//     <>
//       <SideNav />
//       <div className="container mx-auto p-6 ml-[15%]">
//         <ToastContainer />

//         {/* Heading with Animation */}
//         <motion.h2
//           className="text-3xl font-bold text-center text-blue-600 mb-6"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Contact Messages 📩
//         </motion.h2>

//         {/* Search Input */}
//         <motion.div
//           className="flex justify-end mb-4"
//           initial={{ opacity: 0, x: 30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="relative w-full max-w-md">
//             <input
//               type="text"
//               placeholder="Search messages..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full p-3 pl-10 border rounded-md"
//             />
//             <FaSearch className="absolute left-3 top-3 text-gray-500 text-lg" />
//           </div>
//         </motion.div>

//         {/* Messages Table with Smooth Animation */}
//         <motion.div className="overflow-x-auto">
//           <motion.table
//             className="w-full border-collapse border border-gray-300 shadow-lg table-fixed"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <thead>
//               <tr className="bg-blue-500 text-white">
//                 <th className="p-3 border w-1/6">Name</th>
//                 <th className="p-3 border w-1/5">Email</th>
//                 <th className="p-3 border w-1/6">Subject</th>
//                 <th className="p-3 border w-1/3">Message</th>
//                 <th className="p-3 border w-1/12">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               <AnimatePresence>
//                 {filteredMessages.length > 0 ? (
//                   filteredMessages.map((message) => (
//                     <motion.tr
//                       key={message._id}
//                       className="text-center border bg-gray-50 hover:bg-gray-200 transition duration-200"
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0, scale: 0.9 }}
//                       whileHover={{ scale: 1.02 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <td className="p-3 border">
//                         {message.firstName} {message.lastName}
//                       </td>
//                       <td className="p-3 border">{message.email}</td>
//                       <td className="p-3 border">{message.subject}</td>
//                       <td className="p-3 border break-words">
//                         {message.message}
//                       </td>
//                       <td className="p-3 border">
//                         <motion.button
//                           onClick={() => handleDelete(message._id)}
//                           className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
//                           whileTap={{ scale: 0.9 }}
//                         >
//                           <FaTrash />
//                         </motion.button>
//                       </td>
//                     </motion.tr>
//                   ))
//                 ) : (
//                   <motion.tr
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <td colSpan="5" className="text-center text-gray-500 py-4">
//                       No messages found.
//                     </td>
//                   </motion.tr>
//                 )}
//               </AnimatePresence>
//             </tbody>
//           </motion.table>
//         </motion.div>
//       </div>
//     </>
//   );
// }

// export default ContactMessages;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTrash, FaSearch } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { io } from "socket.io-client";
import SideNav from "../Sidenav/Sidenav";

const socket = io("http://localhost:5000");

function ContactMessages() {
  const [messages, setMessages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchMessages();
    socket.on("newMessage", fetchMessages);
    return () => {
      socket.off("newMessage", fetchMessages);
    };
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/contacts");
      setMessages(response.data);
    } catch (error) {
      toast.error("Failed to fetch messages!", { position: "top-right" });
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      try {
        await axios.delete(`http://localhost:5000/api/contacts/${id}`);
        setMessages(messages.filter((msg) => msg._id !== id));
        toast.success("Message deleted!", { position: "top-right" });
      } catch (error) {
        toast.error("Failed to delete message!", { position: "top-right" });
      }
    }
  };

  const filteredMessages = messages.filter((msg) =>
    Object.values(msg)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SideNav />
      <div className="p-4 pt-24 min-h-screen bg-gray-100 md:ml-[15%]">
        <ToastContainer />

        {/* Title */}
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Messages 📩
        </motion.h2>

        {/* Search */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search messages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 pl-10 border rounded-md focus:outline-none"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-500 text-lg" />
          </div>
        </motion.div>

        {/* Table Container */}
        <motion.div className="overflow-x-auto">
          <motion.table
            className="min-w-full border border-gray-300 rounded-lg shadow bg-white text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <thead>
              <tr className="bg-blue-500 text-white text-left">
                <th className="p-3 min-w-[150px]">Name</th>
                <th className="p-3 min-w-[180px]">Email</th>
                <th className="p-3 min-w-[140px]">Subject</th>
                <th className="p-3 min-w-[250px]">Message</th>
                <th className="p-3 min-w-[100px]">Actions</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {filteredMessages.length > 0 ? (
                  filteredMessages.map((msg) => (
                    <motion.tr
                      key={msg._id}
                      className="border-b hover:bg-gray-100 transition"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.3 }}
                    >
                      <td className="p-3">
                        {msg.firstName} {msg.lastName}
                      </td>
                      <td className="p-3 break-words">{msg.email}</td>
                      <td className="p-3 break-words">{msg.subject}</td>
                      <td className="p-3 break-words">{msg.message}</td>
                      <td className="p-3">
                        <motion.button
                          onClick={() => handleDelete(msg._id)}
                          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaTrash />
                        </motion.button>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <motion.tr
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <td colSpan="5" className="text-center text-gray-500 py-6">
                      No messages found.
                    </td>
                  </motion.tr>
                )}
              </AnimatePresence>
            </tbody>
          </motion.table>
        </motion.div>
      </div>
    </>
  );
}

export default ContactMessages;
