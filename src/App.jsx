// import React from "react";
// import Home from "./Pages/Home/Home";
// import { Route, Router, Routes } from "react-router-dom";
// import About from "./Pages/About";
// import Service from "./Pages/Service";
// import ContactForm from "./Pages/Contect/ContactForm";
// import Signup from "./Pages/Signup/Signup";
// import Dashboard from "./Pages/Dashboard/Dashboard";
// import Login from "./Pages/Login/Login";
// // import UserList from "./Pages/userList/UserList";
// import UserList from "./Pages/userList/UserList";
// import Booking from "./Pages/Booking/Booking";
// import BookingList from "./Pages/BookingList/BookingList";
// import UpdateBooking from "./Pages/UpdateBooking/UpdateBooking";
// import AddCustomer from "./Pages/AddCustomer/AddCustomer";
// import OrdersPage from "./Pages/OrdersPage/OrdersPage";
// import CustomerDisplay from "./Pages/CustomerDisplay/CustomerDisplay";
// import ProtectedRoute from "./Pages/ProtectedRoute/ProtectedRoute";

// function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/service" element={<Service />} />
//         <Route path="/ContactForm" element={<ContactForm />} />
//         <Route path="/booking" element={<Booking />} />
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//               <Login />
//             </ProtectedRoute>
//           }
//         />
//         <Route path="/register" element={<Signup />} />
//         <Route path="/Login" element={<Login />} />
//         <Route path="/UserList" element={<UserList />} />
//         <Route path="/booking" element={<Booking />} />
//         <Route path="/bookingList" element={<BookingList />} />
//         <Route path="/update-booking/:id" element={<UpdateBooking />} />
//         <Route path="/addCustomer" element={<AddCustomer />} />
//         <Route path="/order" element={<OrdersPage />} />
//         <Route path="/displayCustomer" element={<CustomerDisplay />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Home from "./Pages/Home/Home";
// import About from "./Pages/About";
// import Service from "./Pages/Service";
// import ContactForm from "./Pages/Contect/ContactForm";
// import Signup from "./Pages/Signup/Signup";
// import Dashboard from "./Pages/Dashboard/Dashboard";
// import Login from "./Pages/Login/Login";
// import UserList from "./Pages/userList/UserList";
// import Booking from "./Pages/Booking/Booking";
// import BookingList from "./Pages/BookingList/BookingList";
// import UpdateBooking from "./Pages/UpdateBooking/UpdateBooking";
// import AddCustomer from "./Pages/AddCustomer/AddCustomer";
// import OrdersPage from "./Pages/OrdersPage/OrdersPage";
// import CustomerDisplay from "./Pages/CustomerDisplay/CustomerDisplay";
// import ProtectedRoute from "./Pages/ProtectedRoute/ProtectedRoute";

// function App() {
//   return (
//     <div>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/service" element={<Service />} />
//         <Route path="/ContactForm" element={<ContactForm />} />
//         <Route path="/booking" element={<Booking />} />
//         <Route path="/register" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/UserList" element={<UserList />} />
//         <Route path="/bookingList" element={<BookingList />} />
//         <Route path="/update-booking/:id" element={<UpdateBooking />} />
//         <Route path="/addCustomer" element={<AddCustomer />} />
//         <Route path="/order" element={<OrdersPage />} />
//         <Route path="/displayCustomer" element={<CustomerDisplay />} />

//         {/* Protected Routes (Require Login) */}
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/UserList"
//           element={
//             <ProtectedRoute>
//               <UserList />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/bookingList"
//           element={
//             <ProtectedRoute>
//               <BookingList />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/update-booking/:id"
//           element={
//             <ProtectedRoute>
//               <UpdateBooking />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/addCustomer"
//           element={
//             <ProtectedRoute>
//               <AddCustomer />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/order"
//           element={
//             <ProtectedRoute>
//               <OrdersPage />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/displayCustomer"
//           element={
//             <ProtectedRoute>
//               <CustomerDisplay />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Home from "./Pages/Home/Home";
// import About from "./Pages/About";
// import Service from "./Pages/Service";
// import ContactForm from "./Pages/Contect/ContactForm";
// import Dashboard from "./Pages/Dashboard/Dashboard";
// import Login from "./Pages/Login/Login";
// import UserList from "./Pages/userList/UserList";
// import Booking from "./Pages/Booking/Booking";
// import BookingList from "./Pages/BookingList/BookingList";
// import UpdateBooking from "./Pages/UpdateBooking/UpdateBooking";
// import AddCustomer from "./Pages/AddCustomer/AddCustomer";
// import OrdersPage from "./Pages/OrdersPage/OrdersPage";
// import CustomerDisplay from "./Pages/CustomerDisplay/CustomerDisplay";
// import ProtectedRoute from "./Pages/ProtectedRoute/ProtectedRoute";

// function App() {
//   return (
//     <div>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/service" element={<Service />} />
//         <Route path="/ContactForm" element={<ContactForm />} />
//         <Route path="/booking" element={<Booking />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/addCustomer" element={<AddCustomer />} />

//         {/* Protected Routes (Require Login) */}
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/UserList"
//           element={
//             <ProtectedRoute>
//               <UserList />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/bookingList"
//           element={
//             <ProtectedRoute>
//               <BookingList />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/update-booking/:id"
//           element={
//             <ProtectedRoute>
//               <UpdateBooking />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/order"
//           element={
//             <ProtectedRoute>
//               <OrdersPage />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/displayCustomer"
//           element={
//             <ProtectedRoute>
//               <CustomerDisplay />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import ContactForm from "./Pages/Contect/ContactForm";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import UserList from "./Pages/userList/UserList";
import Booking from "./Pages/Booking/Booking";
import BookingList from "./Pages/BookingList/BookingList";
import UpdateBooking from "./Pages/UpdateBooking/UpdateBooking";
import AddCustomer from "./Pages/AddCustomer/AddCustomer";
import OrdersPage from "./Pages/OrdersPage/OrdersPage";
import CustomerDisplay from "./Pages/CustomerDisplay/CustomerDisplay";
import ProtectedRoute from "./Pages/ProtectedRoute/ProtectedRoute";
import PropertyDetail from "./components/RecentPropertyListed/PropertyDetail";
import ContactMessages from "./Pages/ContactMessages/ContactMessages";

function App() {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addCustomer" element={<AddCustomer />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        {/* <Route path="/ContactMessages" element={<ContactMessages />} /> */}

        {/* Protected Routes (Require Login) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/ContactMessages"
          element={
            <ProtectedRoute>
              <ContactMessages />
            </ProtectedRoute>
          }
        />

        <Route
          path="/UserList"
          element={
            <ProtectedRoute>
              <UserList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/bookingList"
          element={
            <ProtectedRoute>
              <BookingList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/update-booking/:id"
          element={
            <ProtectedRoute>
              <UpdateBooking />
            </ProtectedRoute>
          }
        />
        <Route
          path="/order"
          element={
            <ProtectedRoute>
              <OrdersPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/displayCustomer"
          element={
            <ProtectedRoute>
              <CustomerDisplay />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
