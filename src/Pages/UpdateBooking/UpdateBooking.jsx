import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideNav from "../Sidenav/Sidenav";

const UpdateBooking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    house: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/bookings/${id}`)
      .then((response) => {
        setFormData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching booking data:", error);
        toast.error("Error fetching booking details!", {
          position: "top-right",
        });
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/bookings/${id}`, formData);
      toast.success("Booking updated successfully!", { position: "top-right" });
      setTimeout(() => navigate("/bookingList"), 2000);
    } catch (error) {
      console.error("Error updating booking:", error);
      toast.error("Update failed. Please try again.", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideNav />
      <div className="flex-grow flex items-center justify-center p-6">
        <ToastContainer />
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Wax Ka Beddel Kireynta
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Magaca Buuxa"
              className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Cinwaanka Emailka"
              className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Lambarka Taleefanka"
              className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
              required
              value={formData.phone}
              onChange={handleChange}
            />
            <select
              name="house"
              className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
              required
              value={formData.house}
              onChange={handleChange}
            >
              <option value="">Dooro Guri</option>
              {[
                "Villa Raaxo",
                "Guri Xeebeed",
                "Buuraleyda Cabin",
                "Guri Magaaleed",
              ].map((house, index) => (
                <option key={index} value={house}>
                  {house}
                </option>
              ))}
            </select>
            <input
              type="date"
              name="checkIn"
              className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
              required
              value={formData.checkIn}
              onChange={handleChange}
            />
            <input
              type="date"
              name="checkOut"
              className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
              required
              value={formData.checkOut}
              onChange={handleChange}
            />
            <input
              type="number"
              name="guests"
              min="1"
              placeholder="Tirada Martida"
              className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
              required
              value={formData.guests}
              onChange={handleChange}
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-300 shadow-lg"
            >
              Xaqiiji Beddelka
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default UpdateBooking;
