// react-router-dom 5버전으로 설치해야함
// 2022-07-13 일자에 설치한 버전은 6버전
// https://codingapple.com/forums/topic/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%9D%BC%EC%9A%B0%ED%84%B0-%EB%8F%94-%EC%97%90%EB%9F%AC%EC%9D%B8%EA%B2%83%EA%B0%99%EC%95%84%EC%9A%94/
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

// npm i connected-react-router

// npm i moment

import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Switch } from "react-router-dom";
import Add from "./pages/Add";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import Error from "./pages/Error";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Signin from "./pages/Signin";
import { ConnectedRouter } from "connected-react-router";
import history from "./history";

function App() {
  return (
    // npm i react-error-boundary를 설치해 ErrorBoundary사용 Error페이지로 이동하게함
    <ErrorBoundary FallbackComponent={Error}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/book/:id" component={Detail} />
          <Route exact path="/edit/:id" component={Edit} />
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </ErrorBoundary>
  );
}

export default App;
