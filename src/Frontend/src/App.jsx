import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Availability from "./pages/Availability";
import DefaultLayout from "./layouts/DefaultLayout";

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
          <Route path="availability" element={<Availability />} />
        </Route>
        //Private access admin routes
        <Route path="/admin">
          <Route index element={<Home />} />
          <Route path="availability" element={<Availability />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
