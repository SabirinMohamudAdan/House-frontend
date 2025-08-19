// import { useState } from "react";
// import { motion } from "framer-motion";
// import Header from "../../components/Header/Header";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({});
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // const validateForm = () => {
//   //   let newErrors = {};
//   //   if (!formData.name.trim()) newErrors.name = "Name is required";
//   //   if (!formData.email.trim()) newErrors.email = "Email is required";
//   //   else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
//   //     newErrors.email = "Invalid email format";
//   //   if (!formData.message.trim()) newErrors.message = "Message is required";
//   //   return newErrors;
//   // };

//   const validateForm = () => {
//     let newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     } else if (/\d/.test(formData.name)) {
//       newErrors.name = "Name should not contain numbers";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Invalid email format";
//     }

//     // Validate message: Ensure it is not empty
//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//     }

//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = validateForm();
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//     } else {
//       console.log("Form submitted", formData);
//       setFormData({ name: "", email: "", message: "" });
//       setErrors({});
//       alert("Message sent successfully!");
//     }
//   };

//   return (
//     <>
//       <Header />
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-lg mx-auto p-6 bg-gradient-to-r from-green-500
//        bg-[#0a1636] shadow-xl rounded-2xl text-white mt-20"
//       >
//         <h2 className="text-3xl font-bold text-center mb-6 text-yellow-500">
//           Contact Us
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             <label className="block text-lg">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-4 focus:ring-purple-400 text-gray-900"
//             />
//             {errors.name && (
//               <p className="text-red-300 text-sm">{errors.name}</p>
//             )}
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//           >
//             <label className="block text-lg">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-4 focus:ring-purple-400 text-gray-900"
//             />
//             {errors.email && (
//               <p className="text-red-300 text-sm">{errors.email}</p>
//             )}
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.7 }}
//           >
//             <label className="block text-lg">Message</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows="4"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-4 focus:ring-purple-400 text-gray-900"
//             ></textarea>
//             {errors.message && (
//               <p className="text-red-300 text-sm">{errors.message}</p>
//             )}
//           </motion.div>
//           <motion.button
//             type="submit"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="w-full bg-white text-yellow-500 font-semibold px-4 py-2 rounded-md shadow-lg hover:bg-gray-200 transition duration-300"
//           >
//             Send Message
//           </motion.button>
//         </form>
//       </motion.div>
//     </>
//   );
// };

// export default ContactForm;

// import React, { useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import { motion } from "framer-motion";
// import Header from "./../../components/Header/Header";
// import image6 from "../../Assets/feature6.jpg";

// function ContactForm() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateForm = () => {
//     let newErrors = {};
//     if (!formData.firstName.trim()) newErrors.firstName = "Enter a first name.";
//     if (!formData.lastName.trim()) newErrors.lastName = "Enter a last name.";
//     if (!formData.email.trim()) newErrors.email = "Enter a valid email.";
//     if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
//     if (!formData.message.trim()) newErrors.message = "Message is required.";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       try {
//         const response = await axios.post(
//           "http://localhost:5000/api/contact",
//           formData
//         );
//         toast.success(response.data.message, { position: "top-right" });

//         setFormData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           subject: "",
//           message: "",
//         });

//         setErrors({});
//       } catch (error) {
//         toast.error("Error sending message, try again!", {
//           position: "top-right",
//         });
//       }
//     } else {
//       toast.error("Please fill out all required fields.", {
//         position: "top-right",
//       });
//     }
//   };

//   return (
//     <>
//       <Header />
//       <section className="">
//         <ToastContainer />
//         <img className="w-full  h-[900px] relative" src={image6} alt="" />
//         <motion.div
//           className="container mx-auto px-6 absolute inset-0 top-[100px]"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl font-bold text-center text-yellow-500">
//             CONTACT US FOR A FREE QUOTE!
//           </h2>
//           <div className="flex flex-wrap mt-10  ">
//             {/* Google Map */}
//             <motion.div className="w-full md:w-1/2">
//               <iframe
//                 className="w-full h-96 rounded-lg shadow-lg"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.253663663443!2d-122.41941608468144!3d37.77492977975924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809cbae45317%3A0xf5c0ebbd1d46250!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
//                 allowFullScreen
//                 loading="lazy"
//                 title="Google Maps"
//               ></iframe>
//             </motion.div>

//             {/* Contact Form */}
//             <motion.div className="w-full md:w-1/2 px-6">
//               <form
//                 onSubmit={handleSubmit}
//                 className="bg-white shadow-lg rounded-lg p-6 absolute"
//               >
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-gray-600 font-medium">
//                       First name *
//                     </label>
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       className={`w-full mt-1 p-3 border ${
//                         errors.firstName ? "border-red-500" : "border-gray-300"
//                       } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                     />
//                     {errors.firstName && (
//                       <p className="text-red-500 text-sm">{errors.firstName}</p>
//                     )}
//                   </div>
//                   <div>
//                     <label className="block text-gray-600 font-medium">
//                       Last name *
//                     </label>
//                     <input
//                       type="text"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       className={`w-full mt-1 p-3 border ${
//                         errors.lastName ? "border-red-500" : "border-gray-300"
//                       } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                     />
//                     {errors.lastName && (
//                       <p className="text-red-500 text-sm">{errors.lastName}</p>
//                     )}
//                   </div>
//                 </div>

//                 <div className="mt-4">
//                   <label className="block text-gray-600 font-medium">
//                     Email *
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className={`w-full mt-1 p-3 border ${
//                       errors.email ? "border-red-500" : "border-gray-300"
//                     } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                   />
//                   {errors.email && (
//                     <p className="text-red-500 text-sm">{errors.email}</p>
//                   )}
//                 </div>

//                 <div className="mt-4">
//                   <label className="block text-gray-600 font-medium">
//                     Subject
//                   </label>
//                   <input
//                     type="text"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 <div className="mt-4">
//                   <label className="block text-gray-600 font-medium">
//                     Message
//                   </label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows="4"
//                     className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   ></textarea>
//                 </div>

//                 <motion.button
//                   type="submit"
//                   className="w-full mt-6 bg-yellow-500 text-white text-lg font-bold py-3 rounded-md hover:bg-yellow-400 transition duration-300"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   Submit
//                 </motion.button>
//               </form>
//             </motion.div>
//           </div>
//         </motion.div>
//       </section>
//     </>
//   );
// }

// export default ContactForm;

import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import Header from "./../../components/Header/Header";
import image6 from "../../Assets/feature3.jpg";
import Footer from "../../components/Footer/Footer";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    validateInput(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const validateInput = (name, value) => {
    let newErrors = { ...errors };

    if (name === "firstName" || name === "lastName") {
      if (!/^[A-Za-z\s]+$/.test(value)) {
        newErrors[name] = "Only letters and spaces are allowed.";
      } else {
        delete newErrors[name];
      }
    }

    if (name === "email") {
      if (!/^\S+@\S+\.\S+$/.test(value)) {
        newErrors.email = "Enter a valid email address.";
      } else {
        delete newErrors.email;
      }
    }

    if (name === "subject") {
      if (!value.trim()) {
        newErrors.subject = "Subject is required.";
      } else {
        delete newErrors.subject;
      }
    }

    if (name === "message") {
      if (!value.trim()) {
        newErrors.message = "Message is required.";
      } else {
        delete newErrors.message;
      }
    }

    setErrors(newErrors);
  };

  const validateForm = () => {
    return (
      Object.keys(errors).length === 0 &&
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.subject &&
      formData.message
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/contact",
          formData
        );
        toast.success(response.data.message, { position: "top-right" });

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });

        setErrors({});
      } catch (error) {
        toast.error("Error sending message, try again!", {
          position: "top-right",
        });
      }
    } else {
      toast.error("Please correct errors before submitting.", {
        position: "top-right",
      });
    }
  };

  return (
    <>
      <Header />
      <div className="sm:mb-0 mb-[200px]">
      <section className="w-full h-[900px] object-cover object-center 
           bg-gradient-to-r from-yellow-500 bg-[#0a1636] shadow-xl">
        <ToastContainer />
        {/* <img
          className="w-full h-[900px] object-cover object-center 
           bg-gradient-to-r from-yellow-500 bg-[#0a1636] shadow-xl"
          src=""
          alt="Background"
        /> */}
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 absolute inset-0 top-[100px]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white">
            CONTACT US FOR A FREE QUOTE!
          </h2>
          <div className="flex flex-wrap mt-10">
            {/* Google Map */}
            <motion.div className="w-full md:w-1/2 mb-8 md:mb-0">
              <iframe
                className="w-full h-64 sm:h-96 rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.253663663443!2d-122.41941608468144!3d37.77492977975924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809cbae45317%3A0xf5c0ebbd1d46250!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </motion.div>

            {/* Contact Form */}
            <motion.div className="w-full md:w-1/2 px-4 sm:px-6">
              <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-lg p-4 sm:p-6 sm:mb-0 mb-20"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-600 font-medium">
                      First name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full mt-1 p-2 sm:p-3 border ${
                        errors.firstName ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-600 font-medium">
                      Last name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full mt-1 p-2 sm:p-3 border ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-gray-600 font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full mt-1 p-2 sm:p-3 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                <div className="mt-4">
                  <label className="block text-gray-600 font-medium">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full mt-1 p-2 sm:p-3 border ${
                      errors.subject ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm">{errors.subject}</p>
                  )}
                </div>

                <div className="mt-4">
                  <label className="block text-gray-600 font-medium">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full mt-1 p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  className="w-full mt-6 bg-green-500 text-white text-lg font-bold py-2 sm:py-3 rounded-md hover:bg-yellow-400 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  disabled={!validateForm()}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </section>
      </div>
      <Footer/>
    </>
  );
}

export default ContactForm;