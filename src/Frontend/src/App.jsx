import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ReservationList from "./pages/ReservationList";
import DefaultLayout from "./layouts/DefaultLayout";
import PicnicCampingButtons from "./pages/PicnicCampingButtons"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        //Public access routes
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
        </Route>
        //Private access operator routes
        <Route path="/operator">
          <Route index element={<Home />} />
          <Route path="reservation-list" element={<ReservationList />} />
          <Route path="reservation" element={<PicnicCampingButtons />} />
        </Route>
        //Private access admin routes
        <Route path="/admin">
          <Route index element={<Home />} />
          <Route path="reservation-list" element={<ReservationList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
