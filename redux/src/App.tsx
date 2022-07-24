// npm install @types/react-redux
import React from "react";
import "./App.css";
import { legacy_createStore as createStore } from "redux";
import styled from "@emotion/styled/macro";

const Base = styled.div<{ state: any }>`
  background-color: ${({ state }) => state};
`;

// store에서의 state 초기값 설정
function reducer(state: any, action: any) {
  if (state === undefined) {
    return { color: "red" };
  }
}

// store 생성
const store = createStore(reducer);

let state: any = undefined;

function App() {
  const dom = () => {
    console.log(state);
    state = store.getState();
  };

  return (
    <Base state={state}>
      <h1>red</h1>
      <input type="button" value="fire" onClick={dom} />
    </Base>
  );
}

export default App;
