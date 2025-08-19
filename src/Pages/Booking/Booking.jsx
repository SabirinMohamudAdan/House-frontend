


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import Header from "../../components/Header/Header";

// const Booking = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     house: "",
//     checkIn: "",
//     checkOut: "",
//     guests: "1",
//     price: "",
//   });

//   useEffect(() => {
//     // ✅ Load the registered user from localStorage
//     const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));
//     if (registeredUser) {
//       setFormData((prevData) => ({
//         ...prevData,
//         name: registeredUser.name,
//         email: registeredUser.email,
//         phone: registeredUser.phone,
//       }));
//     }
//   }, []);

//   // House Prices Per Night Per Guest Count
//   const housePrices = {
//     "Villa Raaxo": { 1: 100, 2: 120, 3: 140, 4: 160 },
//     "Guri Xeebeed": { 1: 80, 2: 95, 3: 110, 4: 125 },
//     "Buuraleyda Cabin": { 1: 60, 2: 75, 3: 90, 4: 105 },
//     "Guri Magaaleed": { 1: 50, 2: 65, 3: 80, 4: 95 },
//   };

//   const houses = Object.keys(housePrices);

//   // Function to calculate total price
//   const calculatePrice = (house, checkIn, checkOut, guests) => {
//     if (!house || !checkIn || !checkOut || !guests) return "";

//     const checkInDate = new Date(checkIn);
//     const checkOutDate = new Date(checkOut);
//     const nights = Math.max(
//       (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24),
//       1
//     );

//     const guestCount = parseInt(guests, 10);
//     const perNightPrice =
//       housePrices[house]?.[guestCount] || housePrices[house][1];

//     return nights * perNightPrice;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     let updatedData = { ...formData, [name]: value };

//     if (["house", "checkIn", "checkOut", "guests"].includes(name)) {
//       updatedData.price = calculatePrice(
//         updatedData.house,
//         updatedData.checkIn,
//         updatedData.checkOut,
//         updatedData.guests
//       );
//     }

//     setFormData(updatedData);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/api/bookings", formData);
//       alert("Booking successful!");

//       // ✅ Clear all fields after booking submission
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         house: "",
//         checkIn: "",
//         checkOut: "",
//         guests: "1",
//         price: "",
//       });

//       // ✅ Remove stored user from localStorage so fields clear even after refresh
//       localStorage.removeItem("registeredUser");
//     } catch (error) {
//       console.error("Booking Error:", error);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 pt-20">
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg"
//         >
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//             Book a House
//           </h2>

//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               required
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-md"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-md"
//             />
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone Number"
//               required
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-md"
//             />

//             <select
//               name="house"
//               className="w-full p-3 border rounded-md"
//               required
//               value={formData.house}
//               onChange={handleChange}
//             >
//               <option value="">Select House</option>
//               {houses.map((house, index) => (
//                 <option key={index} value={house}>
//                   {house}
//                 </option>
//               ))}
//             </select>

//             <input
//               type="date"
//               name="checkIn"
//               required
//               value={formData.checkIn}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-md"
//             />
//             <input
//               type="date"
//               name="checkOut"
//               required
//               value={formData.checkOut}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-md"
//             />

//             <select
//               name="guests"
//               className="w-full p-3 border rounded-md"
//               required
//               value={formData.guests}
//               onChange={handleChange}
//             >
//               <option value="1">1 Guest</option>
//               <option value="2">2 Guests</option>
//               <option value="3">3 Guests</option>
//               <option value="4">4 Guests</option>
//             </select>

//             <input
//               type="text"
//               name="price"
//               placeholder="Total Price"
//               className="w-full p-3 border rounded-md"
//               value={formData.price}
//               readOnly
//             />

//             <motion.button
//               type="submit"
//               whileHover={{ scale: 1.05 }}
//               className="w-full bg-green-600 text-white py-3 rounded-md"
//             >
//               Confirm Booking
//             </motion.button>
//           </form>
//         </motion.div>
//       </div>
//     </>
//   );
// };

// export default Booking;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import backgroundImage from "../../assets/feature4.jpg";
import video from "../../images/bookin.mp4"; // Ensure the path to your video is correct

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    house: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    price: "",
  });

  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));
    if (registeredUser) {
      setIsRegistered(true);
      setFormData((prevData) => ({
        ...prevData,
        name: registeredUser.name,
        email: registeredUser.email,
        phone: registeredUser.phone,
      }));
    }
  }, []);

  const housePrices = {
    "Villa Raaxo ah": { 1: 100, 2: 120, 3: 140, 4: 160 },
    "Guri Xeebeed ": { 1: 80, 2: 95, 3: 110, 4: 125 },
    "Guri Buuraley": { 1: 60, 2: 75, 3: 90, 4: 105 },
    "Guriyaha magaloyinka ": { 1: 50, 2: 65, 3: 80, 4: 95 },
  };

  const houses = Object.keys(housePrices);

  const calculatePrice = (house, checkIn, checkOut, guests) => {
    if (!house || !checkIn || !checkOut || !guests) return "";

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const nights = Math.max(
      (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24),
      1
    );

    const guestCount = parseInt(guests, 10);
    const perNightPrice =
      housePrices[house]?.[guestCount] || housePrices[house][1];

    return nights * perNightPrice;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedData = { ...formData, [name]: value };

    if (["house", "checkIn", "checkOut", "guests"].includes(name)) {
      updatedData.price = calculatePrice(
        updatedData.house,
        updatedData.checkIn,
        updatedData.checkOut,
        updatedData.guests
      );
    }

    setFormData(updatedData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/bookings", formData);
      alert("Booking successful!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        house: "",
        checkIn: "",
        checkOut: "",
        guests: "1",
        price: "",
      });

      localStorage.removeItem("registeredUser");
      setIsRegistered(false);
    } catch (error) {
      console.error("Booking Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center p-4 pt-20 relative overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="  bg-gradient-to-r from-white shadow-4xl rounded-2xl p-8 w-full
           max-w-4xl flex flex-col md:flex-row z-10 "
        >
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0"
          >
            <h2 className="text-3xl font-bold text-center text-green-500 mb-6">
              Book a House
            </h2>

            {!isRegistered && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-red-500 text-center font-bold mb-4"
              >
                ❌ Please register first before booking.
              </motion.p>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md"
                  disabled={!isRegistered}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md"
                  disabled={!isRegistered}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md"
                  disabled={!isRegistered}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <select
                  name="house"
                  className="w-full p-3 border rounded-md"
                  required
                  value={formData.house}
                  onChange={handleChange}
                  disabled={!isRegistered}
                >
                  <option value="">Select House</option>
                  {houses.map((house, index) => (
                    <option key={index} value={house}>
                      {house}
                    </option>
                  ))}
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <input
                  type="date"
                  name="checkIn"
                  required
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md"
                  disabled={!isRegistered}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <input
                  type="date"
                  name="checkOut"
                  required
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md"
                  disabled={!isRegistered}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <select
                  name="guests"
                  className="w-full p-3 border rounded-md"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  disabled={!isRegistered}
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <input
                  type="text"
                  name="price"
                  placeholder="Total Price"
                  className="w-full p-3 border rounded-md"
                  value={formData.price}
                  readOnly
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full text-white py-3 rounded-md transition duration-300 ${
                    isRegistered
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-green-500 cursor-not-allowed"
                  }`}
                  disabled={!isRegistered}
                >
                  Confirm Booking
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 h-[400px] md:h-[700px] overflow-hidden rounded-2xl"
          >
            <img
              src={backgroundImage}
              alt="Booking"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Booking;