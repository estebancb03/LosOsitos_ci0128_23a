import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
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
          <Route index />
        </Route>
        //Private access admin routes
        <Route path="/admin">
          <Route index />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
