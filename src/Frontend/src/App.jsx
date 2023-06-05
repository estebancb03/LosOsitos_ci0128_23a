import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ReservationList from "./pages/ReservationList";
import DefaultLayout from "./layouts/DefaultLayout";
import Reservation from "./pages/Reservation";
import Reports from "./pages/Reports";
import ParkStatus from "./pages/ParkStatus";
import Settings from "./pages/Settings";
import "filepond/dist/filepond.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        //Public access routes
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="reservation" element={<Reservation />} />
        </Route>
        //Private access operator routes
        <Route path="/operator">
          <Route index element={<Home />} />
          <Route path="reservation-list" element={<ReservationList />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings/>} />
          <Route path="park-status" element={<ParkStatus />} />
        </Route>
        //Private access admin routes
        <Route path="/admin">
          <Route index element={<Home />} />
          <Route path="reservation-list" element={<ReservationList />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings/>} />
          <Route path="park-status" element={<ParkStatus />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
