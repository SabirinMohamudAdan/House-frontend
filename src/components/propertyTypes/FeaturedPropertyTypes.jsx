// import React from "react";
// import { motion } from "framer-motion";

// function FeaturedPropertyTypes() {
//   return (
//     <section className="py-12 bg-gray-100 text-center h-[500px]">
//       <div className="container mx-auto">
//         <motion.h2
//           className="text-3xl font-bold text-gray-800"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Noocyada Guryaha ee Soomaaliya
//         </motion.h2>
//         <motion.p
//           className="text-gray-500 mt-2"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 1 }}
//         >
//           Ka hel dhammaan noocyada guryaha Soomaaliya.
//         </motion.p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
//           {[
//             {
//               icon: "🏡",
//               color: "red-500",
//               bg: "red-100",
//               title: "Guri Dabaq ah",
//               count: "45 Guryo",
//             },
//             {
//               icon: "🏠",
//               color: "green-500",
//               bg: "green-100",
//               title: "Guri Dhisme Cusub",
//               count: "85 Guryo",
//             },
//             {
//               icon: "🏢",
//               color: "yellow-500",
//               bg: "yellow-100",
//               title: "Apartment Muqdisho",
//               count: "200 Guryo",
//             },
//             {
//               icon: "🏬",
//               color: "purple-500",
//               bg: "purple-100",
//               title: "Xafiisyo Ganacsi",
//               count: "60 Xafiis",
//             },
//             {
//               icon: "🏖️",
//               color: "blue-500",
//               bg: "blue-100",
//               title: "Guryo Xeebeed",
//               count: "30 Guryo",
//             },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-md transition
//               transform hover:scale-105 hover:shadow-xl hover:bg-gray-50 cursor-pointer"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, y: 0 }}
//               whileHover={{ scale: 1, transition: { duration: 0.3 } }}
//               transition={{ delay: index * 0.3, duration: 0.6 }}
//             >
//               <motion.div
//                 className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-${item.bg} transition-transform duration-300`}
//                 whileHover={{ rotate: 10 }}
//               >
//                 <span className={`text-3xl text-${item.color}`}>
//                   {item.icon}
//                 </span>
//               </motion.div>
//               <h3 className="text-lg font-semibold text-gray-700 mt-4">
//                 {item.title}
//               </h3>
//               <p className="text-gray-500">{item.count}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default FeaturedPropertyTypimport React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { FaBath, FaBed, FaExpand, FaHeart, FaPlusCircle } from "react-icons/fa";
import image1 from "../../Assets/feature1.jpg";
import image2 from "../../Assets/feature2.jpg";
import image3 from "../../Assets/feature3.jpg";
import image4 from "../../Assets/feature4.jpg";
import image5 from "../../Assets/feature5.jpg";
import image6 from "../../Assets/feature6.jpg";

const listings = [
  {
    id: 1,
    title: "New Apartment Nice View",
    price: "$149/Month",
    location: "Hodan",
    image: image1,
    bedrooms: 3,
    bathrooms: 2,
    size: 3450,
    status: "FOR RENT",
    statusColor: "bg-green-500",
  },
  {
    id: 2,
    title: "Citra Puri Los Angles Living",
    price: "$215/Month",
    location: "Wadajir",
    image: image2,
    bedrooms: 3,
    bathrooms: 2,
    size: 3450,
    status: "FOR RENT",
    statusColor: "bg-green-500",
  },
  {
    id: 3,
    title: "Citra Puri Los Angles Living",
    price: "$225/Month",
    location: "warta",
    image: image3,
    bedrooms: 3,
    bathrooms: 2,
    size: 3450,
    status: "FOR SALE",
    statusColor: "bg-yellow-500",
  },
  {
    id: 4,
    title: "Luxury Beach House",
    price: "$500/Month",
    location: "Hodan",
    image: image4,
    bedrooms: 4,
    bathrooms: 3,
    size: 5000,
    status: "FOR RENT",
    statusColor: "bg-green-500",
  },
  {
    id: 5,
    title: "Modern City Loft",
    price: "$350/Month",
    location: "Karan",
    image: image5,
    bedrooms: 2,
    bathrooms: 1,
    size: 2000,
    status: "FOR SALE",
    statusColor: "bg-yellow-500",
  },
  {
    id: 6,
    title: "Spacious Countryside House",
    price: "$400/Month",
    location: "Kaxda",
    image: image6,
    bedrooms: 5,
    bathrooms: 4,
    size: 4500,
    status: "FOR RENT",
    statusColor: "bg-green-500",
  },
];

const propertyTypes = [
  {
    icon: "🏡",
    color: "red-500",
    bg: "red-100",
    title: "Guri Dabaq ah",
    count: "45 Guryo",
  },
  {
    icon: "🏠",
    color: "green-500",
    bg: "green-100",
    title: "Guri Dhisme Cusub",
    count: "85 Guryo",
  },
  {
    icon: "🏢",
    color: "yellow-500",
    bg: "yellow-100",
    title: "Apartment Muqdisho",
    count: "200 Guryo",
  },
  {
    icon: "🏬",
    color: "purple-500",
    bg: "purple-100",
    title: "Xafiisyo Ganacsi",
    count: "60 Xafiis",
  },
  {
    icon: "🏖️",
    color: "blue-500",
    bg: "blue-100",
    title: "Guryo Xeebeed",
    count: "30 Guryo",
  },
];

const FeaturedPropertyTypes = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-12">
      {/* Property Types Section */}
      <section className="py-12 bg-gray-100 text-center h-auto min-h-[500px]">
  <div className="container mx-auto px-4">
    <motion.h2
      className="text-2xl sm:text-3xl font-bold text-gray-800"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Noocyada Guryaha ee Soomaaliya
    </motion.h2>
    <motion.p
      className="text-gray-500 mt-2 text-sm sm:text-base"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1 }}
    >
      Ka hel dhammaan noocyada guryaha Soomaaliya.
    </motion.p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mt-8">
      {[
        {
          icon: "🏡",
          color: "red-500",
          bg: "red-100",
          title: "Guri Dabaq ah",
          count: "45 Guryo",
        },
        {
          icon: "🏠",
          color: "green-500",
          bg: "green-100",
          title: "Guri Dhisme Cusub",
          count: "85 Guryo",
        },
        {
          icon: "🏢",
          color: "yellow-500",
          bg: "yellow-100",
          title: "Apartment Muqdisho",
          count: "200 Guryo",
        },
        {
          icon: "🏬",
          color: "purple-500",
          bg: "purple-100",
          title: "Xafiisyo Ganacsi",
          count: "60 Xafiis",
        },
        {
          icon: "🏖️",
          color: "blue-500",
          bg: "blue-100",
          title: "Guryo Xeebeed",
          count: "30 Guryo",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          className="bg-white p-4 sm:p-6 rounded-lg shadow-md transition 
          transform hover:scale-105 hover:shadow-xl hover:bg-gray-50 cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1, transition: { duration: 0.3 } }}
          transition={{ delay: index * 0.3, duration: 0.6 }}
        >
          <motion.div
            className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto flex items-center justify-center rounded-full bg-${item.bg} transition-transform duration-300`}
            whileHover={{ rotate: 10 }}
          >
            <span className={`text-2xl sm:text-3xl text-${item.color}`}>
              {item.icon}
            </span>
          </motion.div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-700 mt-4">
            {item.title}
          </h3>
          <p className="text-sm sm:text-base text-gray-500">{item.count}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Featured Listings Section */}
      <section className="relative mt-12">
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 md:mb-10 tracking-wide">
    Featured Listings
  </h2>
  <div className="relative">
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      navigation={{
        nextEl: ".custom-swiper-button-next",
        prevEl: ".custom-swiper-button-prev",
      }}
      modules={[Navigation]}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="relative"
    >
      {listings.map((listing) => (
        <SwiperSlide key={listing.id} className="p-2 md:p-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-2xl">
            <div className="relative">
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-48 md:h-64 object-cover transition-transform 
                duration-300 hover:scale-105"
              />
              <div
                className={`absolute top-3 right-3 text-white 
                  text-xs font-bold px-3 py-1 rounded-lg ${listing.statusColor}`}
              >
                {listing.status}
              </div>
              <div className="absolute bottom-3 left-3 bg-black/60 text-white
               text-xs px-2 py-1 rounded-md">
                📍 {listing.location}
              </div>
            </div>
            <div className="p-4 md:p-5">
              <p className="text-xl font-bold text-yellow-500">
                {listing.price}
              </p>
              <h3 className="text-xl font-semibold text-gray-900 hover:text-green-500 transition-all duration-300">
                {listing.title}
              </h3>
              <div className="flex items-center gap-4 mt-2 text-gray-600 text-base">
                <span className="flex items-center gap-1">
                  <FaBed /> {listing.bedrooms} Beds
                </span>
                <span className="flex items-center gap-1">
                  <FaBath /> {listing.bathrooms} Baths
                </span>
                <span className="flex items-center gap-1">
                  <FaExpand /> {listing.size} Sq Ft
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Custom Navigation Buttons - Outside the boxes */}
    <button className="custom-swiper-button-prev absolute top-1/2 left-[-20px] md:left-[-40px] transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 transition-all z-10">
      ←
    </button>
    <button className="custom-swiper-button-next absolute top-1/2 right-[-20px] md:right-[-40px] transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 transition-all z-10">
      →
    </button>
  </div>
</section>
    </div>
  );
};

export default FeaturedPropertyTypes;
