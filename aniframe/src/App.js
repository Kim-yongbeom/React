// npm i @emotion/styled @emotion/react
// npm i react-router-dom
// npm i react-icons
// npm install react-slick
// npm install slick-carousel
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vimeo from "./pages/Vimeo";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Vimeo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
