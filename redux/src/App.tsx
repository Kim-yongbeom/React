// npm install @types/react-redux
import React from "react";
import { legacy_createStore as createStore } from "redux";

// store에서의 state 초기값 설정
function reducer(state: any, action: any) {
  if (state === undefined) {
    return { color: "yellow" };
  }
}

// store 생성
const store = createStore(reducer);

// state 가져오기
console.log(store.getState());

function App() {
  return <div className="App"></div>;
}

export default App;
