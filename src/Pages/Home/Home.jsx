import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import FeaturedPropertyTypes from "../../components/propertyTypes/FeaturedPropertyTypes";
import RecentPropertyListed from "../../components/RecentPropertyListed/RecentPropertyListed";
import Location from "../../components/location/location";
import Footer from "../../components/Footer/Footer";


function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedPropertyTypes />
      <RecentPropertyListed />
      <Location />
      <Footer />
    </div>
  );
}

export default Home;
