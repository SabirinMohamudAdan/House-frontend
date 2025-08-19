// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   FaBox,
//   FaUsers,
//   FaShoppingCart,
//   FaUserShield,
//   FaAngleDown,
//   FaUser,
//   FaComments,
//   FaBell,
// } from "react-icons/fa";
// import { useAuth } from "../../components/context/ContextProvide";
// import { io } from "socket.io-client";
// import axios from "axios";

// const socket = io("http://localhost:5000"); // Ensure this matches your backend

// function SideNav() {
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   const [openUsers, setOpenUsers] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [notifications, setNotifications] = useState(0);
//   const [messages, setMessages] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);

//   useEffect(() => {
//     // Fetch messages from backend on load
//     axios.get("http://localhost:5000/api/contacts").then((response) => {
//       setMessages(response.data);
//       setNotifications(response.data.length);
//     });

//     // Listen for new messages in real-time
//     socket.on("newMessage", (newMessage) => {
//       setMessages((prev) => [newMessage, ...prev]);
//       setNotifications((prev) => prev + 1);
//     });

//     return () => {
//       socket.off("newMessage");
//     };
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <>
//       {/* Header */}
//       <header className="bg-green-500 shadow-md fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 z-10">
//         <h1 className="text-2xl font-bold text-white">Admin Panel</h1>

//         <div className="flex items-center space-x-6">
//           {/* 🔔 Notification Bell */}
//           <div
//             className="relative cursor-pointer"
//             onClick={() => setShowDropdown(!showDropdown)}
//           >
//             <FaBell className="text-lg text-gray-700" />
//             {notifications > 0 && (
//               <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full -mt-1 -mr-1">
//                 {notifications}
//               </span>
//             )}

//             {/* Dropdown Messages */}
//             {showDropdown && (
//               <div className="absolute right-0 mt-2 w-64 bg-white text-black shadow-lg rounded-md p-2">
//                 {messages.length > 0 ? (
//                   messages.map((msg, index) => (
//                     <div key={index} className="border-b p-2 text-sm">
//                       <strong>
//                         {msg.firstName} {msg.lastName}:
//                       </strong>
//                       <p>{msg.message}</p>
//                     </div>
//                   ))
//                 ) : (
//                   <p className="text-center text-gray-500">No new messages</p>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* 👤 User Dropdown */}
//           <div className="relative dropdown-menu">
//             <button
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//               className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300"
//             >
//               <FaUser className="text-lg text-gray-700" />
//               <span className="text-gray-700">
//                 {user ? user.name : "Account"}
//               </span>
//               <FaAngleDown
//                 className={`transition-transform duration-300 ${
//                   isDropdownOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             {isDropdownOpen && (
//               <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md">
//                 {!user ? (
//                   <>
//                     <Link
//                       to="/login"
//                       className="block px-4 py-2 hover:bg-gray-200 transition text-center"
//                     >
//                       Login
//                     </Link>
//                     <Link
//                       to="/register"
//                       className="block px-4 py-2 hover:bg-gray-200 transition text-center"
//                     >
//                       Signup
//                     </Link>
//                   </>
//                 ) : (
//                   <button
//                     onClick={handleLogout}
//                     className="w-full text-left px-4 py-2 hover:bg-gray-200 transition"
//                   >
//                     Logout
//                   </button>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </header>

//       {/* Sidebar */}
//       <div className="bg-[#0a1636] text-white w-[250px] h-screen fixed flex flex-col p-5 mt-16 transition-all duration-500 shadow-lg">
//         <h2 className="text-xl font-bold mb-6 text-center">Admin Dashboard</h2>

//         <ul className="space-y-3 mt-10">
//           <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300">
//             <Link to="/dashboard" className="hover:underline">
//               <span>
//                 <i className="fa-brands fa-windows mr-3 text-lg"></i>Dashboard
//               </span>
//             </Link>
//           </li>

//           {/* Bookings */}
//           <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300">
//             <FaBox className="text-lg" />
//             <Link to="/bookingList" className="hover:underline">
//               <span>Bookings</span>
//             </Link>
//           </li>

//           {/* Users (Dropdown) */}
//           <li>
//             <button
//               onClick={() => setOpenUsers(!openUsers)}
//               className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-700 transition duration-300"
//             >
//               <div className="flex items-center gap-3">
//                 <FaUsers className="text-lg" />
//                 <span>Users</span>
//               </div>
//               <FaAngleDown
//                 className={`transition-transform duration-300 ${
//                   openUsers ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             <div
//               className={`overflow-hidden transition-all duration-500 ${
//                 openUsers ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
//               }`}
//             >
//               <ul className="pl-6 mt-1 space-y-2">
//                 <li>
//                   <Link
//                     to="/UserList"
//                     className="block p-2 rounded-lg hover:bg-gray-700 transition duration-300"
//                   >
//                     User List
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </li>

//           {/* Customers */}
//           <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300">
//             <FaShoppingCart className="text-lg" />
//             <Link to="/displayCustomer" className="hover:underline">
//               <span>Customers</span>
//             </Link>
//           </li>

//           {/* Orders */}
//           <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300">
//             <FaUserShield className="text-lg" />
//             <Link to="/orders" className="hover:underline">
//               <span>Orders</span>
//             </Link>
//           </li>

//           {/* Inbox */}
//           <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300">
//             <FaComments className="text-lg" />
//             <Link to="/ContactMessages" className="hover:underline">
//               <span>Inbox</span>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

// export default SideNav;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBox,
  FaUsers,
  FaShoppingCart,
  FaUserShield,
  FaAngleDown,
  FaUser,
  FaComments,
  FaBell,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useAuth } from "../../components/context/ContextProvide";
import { io } from "socket.io-client";
import axios from "axios";

const socket = io("http://localhost:5000");

function SideNav() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [openUsers, setOpenUsers] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [notifications, setNotifications] = useState(0);
  const [messages, setMessages] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // 🍔 toggle sidebar

  useEffect(() => {
    axios.get("http://localhost:5000/api/contacts").then((res) => {
      setMessages(res.data);
      setNotifications(res.data.length);
    });

    socket.on("newMessage", (newMessage) => {
      setMessages((prev) => [newMessage, ...prev]);
      setNotifications((prev) => prev + 1);
    });

    return () => socket.off("newMessage");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      {/* Header */}
      <header className="bg-green-500 fixed top-0 left-0 w-full flex justify-between items-center px-4 md:px-8 py-4 z-20 shadow-md">
        <div className="flex items-center gap-4">
          {/* 🍔 Hamburger */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white text-2xl md:hidden"
          >
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
          <h1 className="text-xl md:text-2xl font-bold text-white">
            Admin Panel
          </h1>
        </div>

        {/* Right Menu */}
        <div className="flex items-center space-x-4">
          {/* 🔔 Bell */}
          <div
            className="relative cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FaBell className="text-lg text-white" />
            {notifications > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {notifications}
              </span>
            )}

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-64 bg-white text-black shadow-lg rounded-md p-2 z-10">
                {messages.length > 0 ? (
                  messages.map((msg, i) => (
                    <div key={i} className="border-b p-2 text-sm">
                      <strong>
                        {msg.firstName} {msg.lastName}:
                      </strong>
                      <p>{msg.message}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500">No new messages</p>
                )}
              </div>
            )}
          </div>

          {/* 👤 User Menu */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              <FaUser className="text-gray-700" />
              <span className="text-sm text-gray-700">
                {user ? user.name : "Account"}
              </span>
              <FaAngleDown
                className={`transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md">
                {!user ? (
                  <>
                    <Link
                      to="/login"
                      className="block px-4 py-2 hover:bg-gray-200 text-center"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="block px-4 py-2 hover:bg-gray-200 text-center"
                    >
                      Signup
                    </Link>
                  </>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-200"
                  >
                    Logout
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`bg-[#0a1636] text-white w-[250px] h-screen fixed top-0 z-10 pt-20 p-5 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:block`}
      >
        <h2 className="text-xl font-bold mb-6 text-center">Admin Dashboard</h2>

        <ul className="space-y-3 mt-6">
          <li className="p-3 rounded-lg hover:bg-gray-700 transition">
            <Link to="/dashboard" className="flex items-center gap-3">
              <i className="fa-brands fa-windows text-lg"></i> Dashboard
            </Link>
          </li>

          <li className="p-3 rounded-lg hover:bg-gray-700 transition flex items-center gap-3">
            <FaBox />
            <Link to="/bookingList">Bookings</Link>
          </li>

          {/* Users Dropdown */}
          <li>
            <button
              onClick={() => setOpenUsers(!openUsers)}
              className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-700"
            >
              <div className="flex items-center gap-3">
                <FaUsers />
                <span>Users</span>
              </div>
              <FaAngleDown
                className={`transition-transform ${
                  openUsers ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openUsers ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="pl-6 mt-2 space-y-2">
                <li>
                  <Link
                    to="/UserList"
                    className="block p-2 rounded-lg hover:bg-gray-700"
                  >
                    User List
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="p-3 rounded-lg hover:bg-gray-700 transition flex items-center gap-3">
            <FaShoppingCart />
            <Link to="/displayCustomer">Customers</Link>
          </li>

          <li className="p-3 rounded-lg hover:bg-gray-700 transition flex items-center gap-3">
            <FaComments />
            <Link to="/ContactMessages">Inbox</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideNav;
