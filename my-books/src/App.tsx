// npm i react-router-dom
// npm i --save-dev @types/react-router-dom

// 런타임에 문제가 있을때 에러페이지로 이동 시킬수 있다.
// npm i react-error-boundary

// npm i redux react-redux redux-saga redux-devtools-extension redux-actions
// npm i @types/react-redux @types/redux-actions -D

// antd의 css를 적용하려면 index.tsx에서 import "antd/dist/antd.min.css"; 기입
// npm i antd
// npm i @ant-design/icons

// npm i axios

import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Add from "./pages/Add";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import Error from "./pages/Error";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Signin from "./pages/Signin";

function App() {
  return (
    // npm i react-error-boundary를 설치해 ErrorBoundary사용 Error페이지로 이동하게함
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/add" element={<Add />} />
          <Route path="/book/:id" element={<Detail />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
