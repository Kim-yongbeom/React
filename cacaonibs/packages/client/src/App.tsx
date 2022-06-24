// npx create-react-app ./ --template typescript
// npm i react-router-dom
// index.tsx에서 import { BrowserRouter } from 'react-router-dom' 추가
// App을 BrowserRouter로 감싸줌

import React from "react";
import { Routes, Route } from "react-router-dom";

import Lobby from "./pages/Lobby";
import Friends from "./pages/Friends";
import RoomDetail from "./pages/RoomDetail";
import RoomList from "./pages/RoomList";
import SeeMore from "./pages/SeeMore";

function App() {
  return (
    <Routes>
      {/* Lobby */}
      <Route index element={<Lobby />}></Route>
      {/* Friends */}
      <Route path="/friends" element={<Friends />}></Route>
      {/* RoomList */}
      <Route path="/rooms" element={<RoomList />}></Route>
      {/* RoomDetail */}
      <Route path="/rooms/:roomId" element={<RoomDetail />}></Route>
      {/* SeeMore */}
      <Route path="/more" element={<SeeMore />}></Route>
    </Routes>
  );
}

export default App;
