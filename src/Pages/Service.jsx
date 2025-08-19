

import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import image from "../images/p-6.png";
import image1 from "../images/h1.png";
import image2 from "../images/h2.png";
import image3 from "../images/h3.png";
import image4 from "../images/h4.png";
import image5 from "../images/h6.png";

const services = [
  { img: image1, title: "Family House", properties: "122 Property" },
  { img: image2, title: "House & Villa", properties: "155 Property" },
  { img: image3, title: "Apartment", properties: "300 Property" },
  { img: image4, title: "Office & Studio", properties: "80 Property" },
  { img: image5, title: "Villa & Condo", properties: "80 Property" },
];

function Service() {
  return (
    <div>
      <Header />

  {/* Hero Section */}
<motion.div
  className="relative bg-cover bg-center flex flex-col justify-center items-center text-white pt-16 sm:pt-20 w-full h-64 sm:h-80"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <img
    className="w-full h-64 sm:h-80 object-cover"
    src={image}
    alt="Services"
  />
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  <motion.div
    className="absolute left-4 sm:left-10 md:left-20 lg:ml-40 pt-8 text-center sm:text-left"
    initial={{ x: -50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-lg sm:text-xl mt-3 text-yellow-500">Services</h1>
    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 sm:mt-5 font-bold">
      Services - All Services
    </p>
  </motion.div>
</motion.div>

{/* Services Section */}
<div className="mt-8 sm:mt-10 pt-8 sm:pt-12 md:pt-16 lg:pt-20 px-4 sm:px-6 md:px-8 lg:px-10 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
  <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
    {services.map((service, index) => (
      <motion.div
        key={index}
        className="bg-white w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] h-[140px] sm:h-[150px] md:h-[160px] lg:h-[180px] shadow-lg shadow-gray-400/50 rounded-lg text-center p-3 sm:p-4 flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img
          className="w-[50px] sm:w-[60px] md:w-[70px] lg:w-[80px] h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px]"
          src={service.img}
          alt={service.title}
        />
        <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mt-2 sm:mt-3">
          {service.title}
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-gray-400">
          {service.properties}
        </p>
      </motion.div>
    ))}
  </div>
</div>


<div className="py-20 bg-gray-50">
      {/* Section 3: Our Services */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Button and Heading */}
        <div className="text-center">
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-yellow-500/20 text-white px-4 py-2 rounded-full text-sm font-medium"
          >
            Our Services
          </motion.button>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold mt-6"
          >
            Our Core Services
          </motion.h1>
        </div>

        {/* Service Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Property Management */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="w-full bg-white shadow-lg shadow-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <i className="fa-solid fa-house text-4xl text-green-500 mx-auto block text-center"></i>
            <h1 className="text-center text-2xl font-semibold mt-6">
              Property Management
            </h1>
            <p className="text-gray-500 mt-4 text-sm text-center">
              Over 1 million+ homes for sale available on the website, we can
              match you with a house you will want to call home.
            </p>
          </motion.div>

          {/* Card 2: Mortgage Service */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="w-full bg-white shadow-lg shadow-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <i className="fa-solid fa-house-chimney-user text-4xl text-green-500 mx-auto block text-center"></i>
            <h1 className="text-center text-2xl font-semibold mt-6">
              Mortgage Service
            </h1>
            <p className="text-gray-500 mt-4 text-sm text-center">
              Over 1 million+ homes for sale available on the website, we can
              match you with a house you will want to call home.
            </p>
          </motion.div>

          {/* Card 3: Consulting Service */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="w-full bg-white shadow-lg shadow-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <i className="fa-solid fa-people-roof text-4xl text-green-500 mx-auto block text-center"></i>
            <h1 className="text-center text-2xl font-semibold mt-6">
              Consulting Service
            </h1>
            <p className="text-gray-500 mt-4 text-sm text-center">
              Over 1 million+ homes for sale available on the website, we can
              match you with a house you will want to call home.
            </p>
          </motion.div>

          {/* Card 4: Home Buying */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="w-full bg-white shadow-lg shadow-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <i className="fa-brands fa-buy-n-large text-4xl text-green-500 mx-auto block text-center"></i>
            <h1 className="text-center text-2xl font-semibold mt-6">
              Home Buying
            </h1>
            <p className="text-gray-500 mt-4 text-sm text-center">
              Over 1 million+ homes for sale available on the website, we can
              match you with a house you will want to call home.
            </p>
          </motion.div>

          {/* Card 5: Home Selling */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="w-full bg-white shadow-lg shadow-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <i className="fa-brands fa-buysellads text-4xl text-green-500 mx-auto block text-center"></i>
            <h1 className="text-center text-2xl font-semibold mt-6">
              Home Selling
            </h1>
            <p className="text-gray-500 mt-4 text-sm text-center">
              Over 1 million+ homes for sale available on the website, we can
              match you with a house you will want to call home.
            </p>
          </motion.div>

          {/* Card 6: Escrow Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="w-full bg-white shadow-lg shadow-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <i className="fa-solid fa-house-laptop text-4xl text-green-500 mx-auto block text-center"></i>
            <h1 className="text-center text-2xl font-semibold mt-6">
              Escrow Services
            </h1>
            <p className="text-gray-500 mt-4 text-sm text-center">
              Over 1 million+ homes for sale available on the website, we can
              match you with a house you will want to call home.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
}

export default Service;
