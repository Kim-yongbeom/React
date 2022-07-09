// npm i react-router-dom
// npm i --save-dev @types/react-router-dom
import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/add" element={<Add />} />
        <Route path="/book/:id" element={<Detail />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route element={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
