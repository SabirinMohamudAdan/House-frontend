import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Bookinglists from "../components/Bookinglist";

function Booking() {
  return (
    <div>
      <Header />

      <div className="pt-48 pl-20">
        <Bookinglists />
      </div>

      <Footer />
    </div>
  );
}

export default Booking;
