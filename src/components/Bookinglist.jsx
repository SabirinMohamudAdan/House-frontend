import React from "react";
import image from "../images/p-1.png";

function Bookinglist() {
  return (
    <div>
      <div className="pt-2 pl-20  grid grid-cols-3 gap-4 ">
        <div
          className="w-[300px] h-[350px] bg-white rounded-lg shadow-lg overflow-hidden 
                transition transform duration-500 hover:scale-110 hover:shadow-2xl
                 cursor-pointer  "
        >
          <img className="w-80 h-[200px] object-cover" src={image} alt="" />
          <h1 className="text-lg font-semibold text-gray-700 mt-3 text-center">
            Property Name 1
          </h1>
          <p className="text-gray-500  items-center ml-6">
            <i class="fa-solid fa-location-dot text-gray-400 mr-2"></i>210 Zirak
            Road, Canada
          </p>
          <h2
            className=" w-20 bg-green-500 text-white px-4 py-2
                       rounded-lg font-bold hover:bg-green-600 transition
                        transform hover:scale-105 mt-10 ml-6 "
          >
            $5623
          </h2>
          <p className="text-gray-400 mt-[-40px] ml-48">Apartment</p>
        </div>

        <div
          className="w-[300px] h-[350px] bg-white rounded-lg shadow-lg overflow-hidden 
                transition transform duration-500 hover:scale-110 hover:shadow-2xl
                 cursor-pointer  "
        >
          <img className="w-80 h-[200px] object-cover" src={image} alt="" />
          <h1 className="text-lg font-semibold text-gray-700 mt-3 text-center">
            Property Name 1
          </h1>
          <p className="text-gray-500  items-center ml-6">
            <i class="fa-solid fa-location-dot text-gray-400 mr-2"></i>210 Zirak
            Road, Canada
          </p>

          <h2
            className="w-20 bg-green-500 text-white px-4 py-2
                       rounded-lg font-bold hover:bg-green-600 transition
                        transform hover:scale-105 mt-10 ml-6 "
          >
            $5623
          </h2>
          <p className="text-gray-400 mt-[-40px] ml-48">Apartment</p>
        </div>
      </div>
    </div>
  );
}

export default Bookinglist;
