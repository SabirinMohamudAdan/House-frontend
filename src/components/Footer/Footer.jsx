// import React from "react";

// function Footer() {
//   return (
//     <div  className=" ">
//       <div className="bg-green-500 w-full mt-10  ">
//         <div className="px-10 pt-10 pb-10 flex justify-between">
//           <div>
//             <h1 className="text-5xl text-white font-bold pb-3">
//               Do You Have Questions ?
//             </h1>
//             <p className=" text-white text-xl">
//               We'll help you to grow your career and growth.
//             </p>
//           </div>
//           <div className="mt-6">
//             <button className="bg-white text-green-500 px-10 py-4 rounded-full text-xl">
//               Contact Us Today
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* end footer */}

//       <div className=" bg-[#0a1636] px-20  py-20">
//         <div className="flex  gap-40">
//           <div>
//             <h1 className="text-white text-4xl font-bold">
//               <i
//                 class="fa-regular fa-square-caret-up
//          text-green-500 mr-2"
//               ></i>
//               Rent House
//             </h1>
//             <h1 className="text-white text-3xl mt-4">
//               Do You Need Help With Anything?
//             </h1>
//             <p className="text-gray-500 mt-4">
//               {" "}
//               Receive updates, hot deals, tutorials, discounts sent straignt in
//               your
//               <br></br> inbox every month
//             </p>
//             <input
//               className=" w-80 border-none px-6  py-3 rounded-lg mt-6"
//               type="text"
//               name=""
//               id=""
//               placeholder="Email Address"
//             />
//             <button className="bg-green-500 text-white px-6 py-3 rounded-lg">
//               Subscribe
//             </button>
//           </div>

//           <div className="flex gap-10 text-gray-500">
//             <ul>
//               <h1 className="text-white text-2xl font-bold">LAYOUTS</h1>
//               <li className="mt-4 text-center">Home Page</li>
//               <li className="mt-4 text-center">About Page</li>
//               <li className="mt-4 text-center">Service Page</li>
//               <li className="mt-4 text-center">Contact Page</li>
//               <li className="mt-4 text-center">Single Blog</li>
//             </ul>
//             <ul>
//               <h1 className="text-white text-2xl font-bold">ALL SECTIONS</h1>
//               <li className="mt-4 text-center">Headers</li>
//               <li className="mt-4 text-center">Features</li>
//               <li className="mt-4 text-center">Attractive</li>
//               <li className="mt-4 text-center">Testimonials</li>
//               <li className="mt-4 text-center">Videos</li>
//             </ul>

//             <ul>
//               <h1 className="text-white text-2xl font-bold">COMPANY</h1>
//               <li className="mt-4 text-center">About</li>
//               <li className="mt-4 text-center">Blog</li>
//               <li className="mt-4 text-center">Pricing</li>
//               <li className="mt-4 text-center">Affiliate</li>
//               <li className="mt-4 text-center">Login</li>
//             </ul>
//           </div>
//         </div>
//         <hr className="w-full  bg-white mt-[10%]" />
//         <p className="text-gray-500 mt-8 text-center">
//           © 2025 HouseHub. Designed By Sprinaa .
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
     {/* Top Section */}
<div className="bg-green-500 w-full mt-10 py-10 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
  <div>
    <h1 className="text-3xl md:text-5xl text-white font-bold pb-3">
      Do You Have Questions ?
    </h1>
    <p className="text-white text-lg md:text-xl">
      We'll help you to grow your career and growth.
    </p>
  </div>
  <div className="mt-6 md:mt-0">
    <Link to="/">
      <button className="bg-white text-green-500 px-6 py-3 rounded-full text-lg md:text-xl shadow-lg hover:bg-yellow-500 transition duration-300">
        Contact Us Today
      </button>
    </Link>
  </div>
</div>

{/* Footer Content */}
<div className="bg-[#0a1636] px-4 md:px-20 py-20">
  <div className="flex flex-col lg:flex-row gap-10 lg:gap-40">
    {/* Subscribe Section */}
    <div>
      <h1 className="text-white text-3xl md:text-4xl font-bold flex items-center">
        <i className="fa-regular fa-square-caret-up text-green-500 mr-2"></i>
        Rent House
      </h1>
      <h1 className="text-yellow-500 text-2xl md:text-3xl mt-4">
        Do You Need Help With Anything?
      </h1>
      <p className="text-gray-400 mt-4">
        Receive updates, hot deals, tutorials, discounts sent straight to
        your inbox every month.
      </p>
      <div className="mt-6 flex flex-col md:flex-row items-center gap-2">
        <input
          className="w-full md:w-80 border-none px-6 py-3 rounded-lg"
          type="text"
          placeholder="Email Address"
        />
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
          Subscribe
        </button>
      </div>



       {/* Social Media Icons */}
       <div className="mt-8 flex gap-4 justify-center md:justify-start animate-pulse">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:text-[#624d1d] transition duration-300"
        >
          <i className="fab fa-facebook text-2xl shadow-lg shadow-white rounded-2xl"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:text-[#624d1d] transition duration-300"
        >
          <i className="fab fa-twitter text-2xl shadow-lg shadow-white rounded-2xl"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:text-[#624d1d] transition duration-300"
        >
          <i className="fab fa-instagram text-2xl shadow-lg shadow-white rounded-2xl"></i>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:text-[#624d1d] transition duration-300"
        >
          <i className="fab fa-linkedin text-2xl shadow-lg shadow-white rounded-2xl"></i>
        </a>
      </div>
    </div>

    {/* Footer Links */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-400">
      <ul>
        <h1 className="text-white text-2xl font-bold sm:text-left text-center">LAYOUTS</h1>
        {[
          "Home Page",
          "About Page",
          "Service Page",
          "Booking page",
          "Contact Page",
         
        ].map((item, index) => (
          <li
            key={index}
            className="mt-4  text-center md:text-left hover:text-yellow-500 transition duration-300 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
      <ul>
        <h1 className="text-white text-2xl font-bold sm:text-left text-center">ALLSECTIONS</h1>
        {[
          "Headers",
          "Features",
          "Attractive",
          "Testimonials",
          "Videos",
        ].map((item, index) => (
          <li
            key={index}
            className="mt-4 ml-8 text-center md:text-left hover:text-yellow-500 transition duration-300 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
      <ul>
        <h1 className="text-white text-2xl font-bold sm:text-left text-center">COMPANY</h1>
        {["About", "Blog", "Pricing", "Affiliate", "Login"].map(
          (item, index) => (
            <li
              key={index}
              className="mt-4  ml-8 text-center md:text-left
               hover:text-yellow-500 transition duration-300 cursor-pointer"
            >
              {item}
            </li>
          )
        )}
      </ul>
    </div>
  </div>

  {/* Footer Bottom */}
  <hr className="w-full bg-white mt-10 opacity-20" />
  <p className="text-gray-400 mt-8 text-center">
    © 2025 HouseHub. Designed By Sprinaa & Moha.
  </p>
</div>
    </div>
  );
}

export default Footer;
