// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import SideNav from "../Sidenav/Sidenav";

// const BookingList = () => {
//   const [bookings, setBookings] = useState([]);
//   const [searchQuery, setSearchQuery] = useState(""); // State for the search query

//   useEffect(() => {
//     fetch("http://localhost:5000/api/bookings")
//       .then((response) => response.json())
//       .then((data) => setBookings(data.data))
//       .catch((error) => {
//         console.error("Error fetching bookings:", error);
//         toast.error("Error fetching bookings!", { position: "top-right" });
//       });
//   }, []);

//   const handleDelete = async (id) => {
//     if (window.confirm("Ma hubtaa inaad tirtirayso kireyntan?")) {
//       try {
//         await fetch(`http://localhost:5000/api/bookings/${id}`, {
//           method: "DELETE",
//         });
//         setBookings(bookings.filter((booking) => booking._id !== id));
//         toast.success("Kireynta waa la tirtiray!", { position: "top-right" });
//       } catch (error) {
//         console.error("Error deleting booking:", error);
//         toast.error("Tirtirka kireynta waa ku guuldareystay!", {
//           position: "top-right",
//         });
//       }
//     }
//   };

//   // 🔍 Filtered bookings based on search query
//   const filteredBookings = bookings.filter((booking) =>
//     Object.values(booking)
//       .join(" ")
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="flex min-h-screen bg-gray-100 ">
//       <SideNav />
//       <div className="flex-grow flex mt-20 justify-center p-6">
//         <ToastContainer />
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-6xl "
//         >
//           <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
//             📋 Dhammaan Kireynta
//           </h2>

//           {/* 🔍 Search Input */}
//           <div className="mb-4 flex ml-[80%]">
//             <input
//               type="text"
//               placeholder="Raadi Kireynta"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-64 p-2 border rounded-md"
//             />
//           </div>

//           {/* No Data Found Message */}
//           {filteredBookings.length === 0 && searchQuery && (
//             <p className="text-center text-red-500">No data found</p>
//           )}

//           <div className="overflow-hidden rounded-lg shadow-lg ">
//             <table
//               className="min-w-full bg-white border border-gray-300 shadow-md
//             rounded-lg overflow-hidden "
//             >
//               <thead>
//                 <tr className="bg-gradient-to-r from-blue-400 to-green-400 text-white">
//                   <th className="py-4 px-6 border">Magaca</th>
//                   <th className="py-4 px-6 border">Email</th>
//                   <th className="py-4 px-6 border">Taleefanka</th>
//                   <th className="py-4 px-6 border">Guriga</th>
//                   <th className="py-4 px-6 border">Qiimaha ($)</th>{" "}
//                   {/* ✅ Added Price Column */}
//                   <th className="py-4 px-6 border">Waxqabadka</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredBookings.map((booking) => (
//                   <motion.tr
//                     key={booking._id}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5, ease: "easeOut" }}
//                     className="text-center bg-gray-50 hover:bg-gray-100 transition duration-200"
//                   >
//                     <td className="py-4 px-6 border">{booking.name}</td>
//                     <td className="py-4 px-6 border">{booking.email}</td>
//                     <td className="py-4 px-6 border">{booking.phone}</td>
//                     <td className="py-4 px-6 border">{booking.house}</td>
//                     <td className="py-4 px-6 border">${booking.price}</td>{" "}
//                     {/* ✅ Display Price */}
//                     <td className="py-4 px-6 border flex justify-center space-x-4">
//                       {/* ✅ Removed Update Button */}
//                       <button
//                         onClick={() => handleDelete(booking._id)}
//                         className="text-white bg-red-500 px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300 transform hover:scale-105"
//                       >
//                         🗑️ Tirtir
//                       </button>
//                     </td>
//                   </motion.tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default BookingList;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideNav from "../Sidenav/Sidenav";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [expandedHouse, setExpandedHouse] = useState(null); // Track expanded house dropdown

  useEffect(() => {
    fetch("http://localhost:5000/api/bookings")
      .then((response) => response.json())
      .then((data) => setBookings(data.data))
      .catch((error) => {
        console.error("Error fetching bookings:", error);
        toast.error("Error fetching bookings!", { position: "top-right" });
      });
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Ma hubtaa inaad tirtirayso kireyntan?")) {
      try {
        await fetch(`http://localhost:5000/api/bookings/${id}`, {
          method: "DELETE",
        });
        setBookings(bookings.filter((booking) => booking._id !== id));
        toast.success("Kireynta waa la tirtiray!", { position: "top-right" });
      } catch (error) {
        console.error("Error deleting booking:", error);
        toast.error("Tirtirka kireynta waa ku guuldareystay!", {
          position: "top-right",
        });
      }
    }
  };

  // 🔍 Filtered bookings based on search query
  const filteredBookings = bookings.filter((booking) =>
    Object.values(booking)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  // 🏠 Group bookings by house type
  const groupedBookings = filteredBookings.reduce((acc, booking) => {
    acc[booking.house] = acc[booking.house] || [];
    acc[booking.house].push(booking);
    return acc;
  }, {});

  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideNav />
      <div className="flex-grow flex mt-20 justify-center p-6">
        <ToastContainer />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-6xl"
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            📋 Dhammaan Kireynta
          </h2>

          {/* 🔍 Search Input */}
          <div className="mb-4 flex justify-end">
            <input
              type="text"
              placeholder="Raadi Kireynta"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 p-2 border rounded-md"
            />
          </div>

          {/* No Data Found Message */}
          {Object.keys(groupedBookings).length === 0 && searchQuery && (
            <p className="text-center text-red-500">No data found</p>
          )}

          {/* Grouped Booking Dropdowns */}
          <div className="space-y-6">
            {Object.entries(groupedBookings).map(([house, houseBookings]) => (
              <motion.div
                key={house}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white shadow-md rounded-lg p-4"
              >
                {/* Dropdown Header */}
                <div
                  className="flex justify-between items-center cursor-pointer bg-gradient-to-r from-blue-400 to-green-400 text-white p-3 rounded-md"
                  onClick={() =>
                    setExpandedHouse(expandedHouse === house ? null : house)
                  }
                >
                  <h3 className="text-lg font-semibold">
                    🏠 {house} ({houseBookings.length} bookings)
                  </h3>
                  <span className="text-xl">
                    {expandedHouse === house ? "▲" : "▼"}
                  </span>
                </div>

                {/* Dropdown Content */}
                {expandedHouse === house && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.4 }}
                    className="p-4 border rounded-md mt-2 bg-gray-50 space-y-4"
                  >
                    {houseBookings.map((booking) => (
                      <div
                        key={booking._id}
                        className="border rounded-md p-4 bg-white shadow-md"
                      >
                        <p className="text-gray-700">
                          <strong>Magaca:</strong> {booking.name}
                        </p>
                        <p className="text-gray-700">
                          <strong>Email:</strong> {booking.email}
                        </p>
                        <p className="text-gray-700">
                          <strong>Taleefanka:</strong> {booking.phone}
                        </p>
                        <p className="text-gray-700">
                          <strong>Check-in:</strong>{" "}
                          {new Date(booking.checkIn).toLocaleDateString()}
                        </p>
                        <p className="text-gray-700">
                          <strong>Check-out:</strong>{" "}
                          {new Date(booking.checkOut).toLocaleDateString()}
                        </p>
                        <p className="text-gray-700">
                          <strong>Martida:</strong> {booking.guests}
                        </p>
                        <p className="text-gray-700">
                          <strong>Qiimaha:</strong> ${booking.price}
                        </p>

                        <div className="flex justify-end mt-4">
                          <button
                            onClick={() => handleDelete(booking._id)}
                            className="text-white bg-red-500 px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300 transform hover:scale-105"
                          >
                            🗑️ Tirtir
                          </button>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingList;
