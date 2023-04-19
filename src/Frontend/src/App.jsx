import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        //Public access routes
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        //Private access routes
        <Route path="/admin">
          <Route index />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
