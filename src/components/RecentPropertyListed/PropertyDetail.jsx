import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import properties from "../Data/Data";
import image1 from "../../images/p-1.png";
import image2 from "../../images/p-2.png";
import image3 from "../../images/p-7.png";
import image4 from "../../images/p-4.png";
import image5 from "../../images/p-5.png";
import image6 from "../../images/p-6.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null); 
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of additional images (using local images)
  const additionalImages = [
    property?.image, // Main image
    image1, // Image 1
    image2, // Image 2
    image3, // Image 3
  ];

  useEffect(() => {
    // Find the property by ID
    const selectedProperty = properties.find((prop) => prop.id === parseInt(id));
    if (selectedProperty) {
      setProperty(selectedProperty);
      setSelectedImage(selectedProperty.image); 
    }
    setLoading(false);
  }, [id]);

  // Automatically cycle through images
  useEffect(() => {
    if (additionalImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % additionalImages.length);
        setSelectedImage(additionalImages[currentIndex]);
      }, 3000); 

      return () => clearInterval(interval); 
    }
  }, [currentIndex, additionalImages]);

  // Handle next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % additionalImages.length);
    setSelectedImage(additionalImages[currentIndex]);
  };

  // Handle previous image
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? additionalImages.length - 1 : prevIndex - 1
    );
    setSelectedImage(additionalImages[currentIndex]);
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (!property) {
    return <div className="text-center py-8">Property not found.</div>;
  }

  return (
    <div>
      <Header/>
      <div className="bg-gray-100 min-h-screen py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Selected Image with Navigation Controls */}
          <div className="relative">
            <img
              src={selectedImage}
              alt={property.name}
              className="w-full h-64 sm:h-96 object-cover"
            />
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
            >
              <FaChevronLeft />
            </button>
            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-4">
            {additionalImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Property ${index + 1}`}
                className={`w-full h-24 object-cover cursor-pointer ${
                  selectedImage === image ? "border-2 border-green-500" : ""
                }`}
                onClick={() => {
                  setSelectedImage(image); 
                  setCurrentIndex(index); 
                }}
              />
            ))}
          </div>

          {/* Property Details */}
          <div className="p-4 sm:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              {property.name}
            </h1>
            <p className="text-gray-600 mb-6">{property.description}</p>

            {/* Price and Type */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 
            sm:mr-0 mr-48
            ">
              <span className="text-2xl  font-bold text-green-600 mb-2 sm:mb-0">
                ${property.price}
              </span>
              <span className="text-sm text-green-500 bg-gray-200 px-3 py-1 rounded-full">
                {property.type}
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center text-yellow-500 mb-6">
              <FaMapMarkerAlt className="mr-2" />
              <p>{property.location}</p>
            </div>

            {/* Additional Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <FaBed className="mr-2" />
                <p>3 Bedrooms</p>
              </div>
              <div className="flex items-center text-gray-600">
                <FaBath className="mr-2" />
                <p>2 Bathrooms</p>
              </div>
              <div className="flex items-center text-gray-600">
                <FaRulerCombined className="mr-2" />
                <p>1500 sqft</p>
              </div>
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="mr-2" />
                <p>Parking</p>
              </div>
            </div>

            {/* Contact Button */}
            <button className="w-full bg-yellow-500 text-white py-3 mt-6 rounded-lg font-bold hover:bg-green-600 transition">
              Choose u House
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default PropertyDetail;