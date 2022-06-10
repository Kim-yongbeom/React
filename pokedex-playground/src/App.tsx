// npm i @emotion/react @emotion/styled axios react-query reset-css
// npm i react-router-dom
// npm i @types/react-router-dom -D

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
