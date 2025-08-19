

import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import image1 from "../../images/p-1.png";
import image2 from "../../images/p-2.png";
import image3 from "../../images/p-7.png";
import image4 from "../../images/p-4.png";
import image5 from "../../images/p-5.png";
import image6 from "../../images/p-6.png";
import { Link } from "react-router-dom";

function RecentPropertyListed() {
  const properties = [
    { id: 1, image: image1, name: "Property 1", location: "210 Zirak Road, Canada" },
    { id: 2, image: image2, name: "Property 2", location: "211 Zirak Road, Canada" },
    { id: 3, image: image3, name: "Property 3", location: "212 Zirak Road, Canada" },
    { id: 4, image: image4, name: "Property 4", location: "213 Zirak Road, Canada" },
    { id: 5, image: image5, name: "Property 5", location: "214 Zirak Road, Canada" },
    { id: 6, image: image6, name: "Property 6", location: "215 Zirak Road, Canada" },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-100 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Recent Property Listed
        </motion.h2>
        <motion.p
          className="text-gray-500 mt-2 font-serif text-center sm:mt-4 text-base sm:text-lg md:text-xl pt-2 sm:pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          This stunning property offers a perfect blend of modern design and comfort, ideal for families and professionals alike.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition transform duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link to={`/property/${property.id}`}>
                <motion.img
                  src={property.image}
                  alt={`Property ${property.id}`}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                  whileHover={{ scale: 1.05 }}
                />
              </Link>
              <div className="p-4 sm:p-6">
                <motion.span
                  className={
                    index % 2 === 0
                      ? "bg-yellow-500 text-white px-3 py-1 text-xs rounded"
                      : "bg-green-500 text-white px-3 py-1 text-xs rounded"
                  }
                  whileHover={{ scale: 1.1 }}
                >
                  {index % 2 === 0 ? "For Rent" : "For Sale"}
                </motion.span>
                <h3 className="text-lg font-semibold text-gray-700 mt-2">
                  {property.name}
                </h3>
                <p className="text-gray-500 flex items-center text-sm sm:text-base">
                  <FaMapMarkerAlt className="mr-2" /> {property.location}
                </p>
              </div>
              <div className="p-4 bg-gray-50 flex justify-between items-center">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Link
                    to={`/property/${property.id}`}
                    className="bg-green-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg font-bold hover:bg-green-600 transition transform hover:scale-105 text-sm sm:text-base"
                  >
                    ${Math.floor(Math.random() * 5000) + 2000}
                  </Link>
                </motion.div>
                <span className="text-gray-500 text-sm sm:text-base">Apartment</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentPropertyListed;
