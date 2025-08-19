

import React from "react";
import { motion } from "framer-motion";
import image from "../images/p-4.png";
// import newImage from "../Assets/About1.png";
import image1 from "../images/aboutt.jpg";
import image2 from "../images/ser.jpg";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function About() {
  return (
    <div>
      <Header />
{/* Hero Section */}
<motion.div
  className="relative bg-cover bg-center flex flex-col justify-center items-center text-white pt-20 w-full h-64 sm:h-80"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <img className="w-full h-64 sm:h-80 object-cover" src={image} alt="About" />
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  <motion.div
    className="absolute left-4 sm:left-10 md:ml-40 pt-8 text-center sm:text-left"
    initial={{ x: -50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-lg sm:text-xl mt-3 text-yellow-500">About Us</h1>
    <p className="text-3xl sm:text-4xl md:text-5xl mt-5 font-bold">
      About Us - Who We Are?
    </p>
  </motion.div>
</motion.div>

{/* Story Section */}
<div className="mt-10 sm:mt-20 mx-4 sm:mx-10 md:ml-40">
  <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 pt-10 items-center">
    {/* Left Content */}
    <motion.div
      className="flex-1"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
        Our Agency Story
      </h1>
      <p className="text-yellow-500 mt-4 sm:mt-6">
        Check out our company story and work process
      </p>
      <p className="mt-4 sm:mt-6 leading-6 sm:leading-8">
      "Our Renting a house is a popular housing option for individuals
       and families  prefer flexibility or are not ready to purchase a property.
        Rental houses offer the convenience of a fully functional living space without
         the long-term commitment of a mortgage. When searching for a rental house, it’s 
         important to consider
      </p>
      <p className="mt-4 sm:mt-6 leading-6 sm:leading-8">
      factors such as location, budget, amenities, and lease terms.
       Tenants should also review the rental agreement carefully to understand their
        rights and responsibilities, including maintenance, utility payments, and the
         duration of the lease. Renting can be an excellent choice for those who value 
         mobility or are exploring a new area before making a permanent decision."
      </p>
      <motion.button
        className="bg-green-500 text-white px-6 sm:px-8 py-2 rounded-3xl mt-6 sm:mt-10 shadow-lg hover:bg-yellow-500 transition duration-300"
        whileHover={{ scale: 1.1 }}
      >
        More About Us
      </motion.button>
    </motion.div>

    {/* Right Image */}
    <motion.div
      className="mt-8 sm:mt-10 flex-1"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.7 }}
      whileHover={{ scale: 1.05 }}
    >
      <img
        className="w-full sm:w-[500px] h-[300px] sm:h-[400px] rounded-lg shadow-lg object-cover"
        src={image1}
        alt="About Us"
      />
    </motion.div>
  </div>
</div>





{/*----------- section2--------- */}

<div className="bg-white px-4 sm:px-20 mt-20">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
        {/* Left Side - Images */}
        <motion.div
          className="relative shadow-lg shadow-gray-500 w-full lg:w-[450px] h-[420px] rounded-lg px-2 py-2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            className="w-full h-[400px] rounded-lg object-cover"
            src={image2}
            alt="Main"
          />
          <motion.img
            className="w-[220px] h-[180px] rounded-lg absolute top-[220px] left-[20px]
             lg:left-[55px]    animate-pulse"
            src={image}
            alt="Overlay"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div>
            <button className="bg-green-500/20  text-yellow-500 px-3 py-1 rounded-full">
              About Us
            </button>
            <h1 className="text-3xl sm:text-4xl font-bold mt-4">
              The Leading Real Estate
              <br />
              Rental Marketplaces <span className="text-yellow-500">.</span>
            </h1>
            <p className="text-gray-400 mt-7 text-[15px] leading-8">
              Over 39,000 people work for us in more than 70 countries all over
              <br />
              the world. This breadth of global coverage combined with specialist
              <br />
              services.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
              <p className="text-gray-400 text-xl">
                <i className="fa-solid fa-house-user bg-yellow-500 rounded-full mr-2 px-1 py-1 text-white"></i>
                Smart Home Design
              </p>
              <p className="text-gray-400 text-xl">
                <i className="fa-solid fa-backward-fast bg-yellow-500 rounded-full mr-2 px-1 py-1 text-white"></i>
                Beautiful Scene Around
              </p>
              <p className="text-gray-400 text-xl">
                <i className="fa-solid fa-life-ring bg-yellow-500 rounded-full mr-2 px-1 py-1 text-white"></i>
                Exceptional Lifestyle
              </p>
              <p className="text-gray-400 text-xl">
                <i className="fa-solid fa-shield-halved bg-yellow-500 rounded-full mr-2 px-1 py-1 text-white"></i>
                Complete 24/7 Security
              </p>
            </div>
            <motion.button
              className="bg-yellow-500 text-xl text-white px-4 py-2 mt-10 animate-pulse "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Services
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>

      <Footer />
    </div>
  );
}

export default About;
