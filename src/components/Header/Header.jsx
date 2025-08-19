// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// // import image from "../";
// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
//   return (
//     <div>
//       <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
//         <div className="container mx-auto flex items-center justify-between py-4 px-6">
//           {/* Logo */}
//           <h1 className="text-3xl font-bold text-green-500">
//             <i class="fa-solid fa-house-medical-circle-check text-yellow-500 mr-2 "></i>
//             Rental House
//           </h1>

//           {/* Mobile Menu Toggle Button */}
//           <button
//             className="lg:hidden text-gray-700 focus:outline-none"
//             onClick={toggleMenu}
//           >
//             {isMenuOpen ? (
//               <i className="fas fa-times text-2xl"></i>
//             ) : (
//               <i className="fas fa-bars text-2xl"></i>
//             )}
//           </button>

//           {/* Desktop Menu */}
//           <nav className="hidden lg:flex lg:items-center lg:space-x-6">
//             <ul className="flex space-x-6 text-lg font-medium  animate-pulse">
//               <li>
//                 <Link
//                   to="/"
//                   className="text-yellow-500 hover:text-green-500 transition"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/about"
//                   className="text-gray-700 hover:text-yellow-500 transition hover:underline"
//                 >
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/service"
//                   className="text-gray-700 hover:text-yellow-500 transition hover:underline"
//                 >
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/booking"
//                   className="text-gray-700 hover:text-yellow-500 transition hover:underline"
//                 >
//                   Booking
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/ContactForm"
//                   className="text-gray-700 hover:text-yellow-500 transition hover:underline"
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </nav>

//           {/* Login Button (Desktop) */}
//           <div className="hidden lg:block">
//             <button
//               className="bg-green-500 text-white px-5 py-2 rounded-lg
//            shadow-md hover:bg-yellow-500 transition  animate-pulse"
//             >
//               <Link to="/displayCustomer">Login</Link>{" "}
//               <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
//             </button>
//             <button
//               className="bg-green-500 text-white px-5 py-2 rounded-lg ml-4
//            shadow-md hover:bg-yellow-500 transition  animate-pulse"
//             >
//               <Link to="/addCustomer">RegisterCustomer</Link>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu (Dropdown) */}
//         {isMenuOpen && (
//           <div className="lg:hidden bg-white shadow-md">
//             <ul className="flex flex-col space-y-4 p-6 text-lg font-medium  animate-pulse">
//               <li>
//                 <Link
//                   to="/"
//                   className="text-yellow-500 hover:text-green-500 transition"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/about"
//                   className="text-gray-700 hover:text-yellow-500 transition hover:underline"
//                 >
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/service"
//                   className="text-gray-700 hover:text-yellow-500 transition hover:underline"
//                 >
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/booking"
//                   className="text-gray-700 hover:text-yellow-500 transition hover:underline"
//                 >
//                   Booking
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/ContactForm"
//                   className="text-gray-700 hover:text-yellow-500 transition hover:underline"
//                 >
//                   Contact
//                 </Link>
//               </li>
//               <li>
//                 <button
//                   className="bg-green-500 text-white px-5 py-2
//                     rounded-lg shadow-md hover:bg-yellow-500 transition"
//                 >
//                   <Link to="/login">Login</Link>
//                 </button>
//               </li>
//             </ul>
//           </div>
//         )}
//       </header>
//     </div>
//   );
// }

// export default Header;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // ✅ Use navigate for button clicks

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-green-500">
            <i className="fa-solid fa-house-medical-circle-check text-yellow-500 mr-2
            transition-all
       duration-300 hover:scale-125 hover:text-green-500 "></i>
            Rental House
          </h1>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <i className="fas fa-times text-2xl"></i>
            ) : (
              <i className="fas fa-bars text-2xl"></i>
            )}
          </button>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-6">
            <ul className="flex space-x-6 text-lg font-medium animate-pulse">
              <li>
                <Link
                  to="/"
                  className="text-yellow-500 hover:text-green-500 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-yellow-500 transition hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="text-gray-700 hover:text-yellow-500 transition hover:underline"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/booking"
                  className="text-gray-700 hover:text-yellow-500 transition hover:underline"
                >
                  Booking
                </Link>
              </li>
              <li>
                <Link
                  to="/ContactForm"
                  className="text-gray-700 hover:text-yellow-500 transition hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* ✅ Fixed Login Button (Desktop) */}
          <div className=" hidden  lg:block">
            <button
              onClick={() => navigate("/login")} // ✅ Now it correctly redirects to login
              className="bg-green-500 text-white px-5 py-2 rounded-lg
           shadow-md hover:bg-yellow-500 transition animate-pulse"
            >
              Login{" "}
              <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
            </button>
            <button
              className="bg-green-500 text-white px-5 py-2 rounded-lg ml-2
           shadow-md hover:bg-yellow-500 transition animate-pulse sm:mt-0 mt-2"
            >
              <Link to="/addCustomer">RegisterCustomer</Link>
            </button>
           
      
      <i className="fa-solid fa-users-line text-3xl text-green-500 transition-all
       duration-300 hover:scale-125 hover:text-yellow-500 ml-3"></i>
    

   
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <ul className="flex flex-col space-y-4 p-6 text-lg font-medium animate-pulse">
              <li>
                <Link
                  to="/"
                  className="text-yellow-500 hover:text-green-500 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-yellow-500 transition hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="text-gray-700 hover:text-yellow-500 transition hover:underline"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/booking"
                  className="text-gray-700 hover:text-yellow-500 transition hover:underline"
                >
                  Booking
                </Link>
              </li>
              <li>
                <Link
                  to="/ContactForm"
                  className="text-gray-700 hover:text-yellow-500 transition hover:underline"
                >
                  Contact
                </Link>
              </li>
              <li>
                {/* ✅ Fixed Mobile Login Button */}
                
                <button
                  onClick={() => navigate("/login")}
                  className="bg-green-500 text-white px-5 py-2 
                    rounded-lg shadow-md hover:bg-yellow-500 transition"
                >
                  Login
                  <i className="fa-solid fa-up-right-and-down-left-from-center ml-2"></i>
                </button>
               
            
              </li>
              <li>
              <button
              className="bg-green-500 text-white px-5 py-2 rounded-lg 
           shadow-md hover:bg-yellow-500 transition animate-pulse sm:mt-0 mt-2"
            >
              <Link to="/addCustomer">RegisterCustomer</Link>
            </button>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
