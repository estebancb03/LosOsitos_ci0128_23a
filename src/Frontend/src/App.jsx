import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/auth/authProvider";
import Home from "./pages/Home";
import ReservationList from "./pages/ReservationList";
import DefaultLayout from "./layouts/DefaultLayout";
import AdminLayout from "./layouts/AdminLayout";
import OperatorLayout from "./layouts/OperatorLayout";
import Reservation from "./pages/Reservation";
import Reports from "./pages/Reports";
import ParkStatus from "./pages/ParkStatus";
import Settings from "./pages/Settings";
import UserList from "./pages/UserList";
import LogIn from "./pages/LogIn";
import MeetJunquillal from "./pages/MeetJunquillal";
import ContactUs from "./pages/ContactUs";
import Information from "./pages/Information";
import Testimonials from "./pages/Testimonials";
import "filepond/dist/filepond.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          //Public access routes
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="reservation" element={<Reservation />} />
            <Route path="login" element={<LogIn />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="information" element={<Information />} />
            <Route path="meet" element={<Testimonials />} />
            <Route path="testimonials" element={<Testimonials />} />

          </Route>
          //Private access operator routes
          <Route path="/operator" element={<OperatorLayout />}>
            <Route index element={<Home />} />
            <Route path="reservation-list" element={<ReservationList />} />
            <Route path="reservation" element={<Reservation />} />
            <Route path="reports" element={<Reports />} />
            <Route path="park-status" element={<ParkStatus />} />
          </Route>
          //Private access admin routes
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Home />} />
            <Route path="reservation-list" element={<ReservationList />} />
            <Route path="reservation" element={<Reservation />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
            <Route path="park-status" element={<ParkStatus />} />
            <Route path="user-list" element={<UserList />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
