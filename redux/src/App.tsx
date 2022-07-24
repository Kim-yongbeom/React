// npm install @types/react-redux
import React from "react";
import { legacy_createStore as createStore } from "redux";
import styled from "@emotion/styled/macro";

const Base = styled.div<{ state: string }>`
  border: 10px solid gray;
  background-color: ${({ state }) => state};
`;

// store에서의 state 초기값 설정
function reducer(state: any, action: any) {
  console.log(state, action);
  if (state === undefined) {
    return { color: "yellow" };
  }
  let newState;
  if (action.type === "CHANGE_COLOR") {
    newState = Object.assign({}, state, { color: "red" });
  }
  return newState;
}

// store 생성
const store = createStore(reducer);

function App() {
  const state: any = store.getState();

  const Color = () => {
    store.dispatch({ type: "CHANGE_COLOR", color: "red" });
  };

  return (
    <Base state={state.color}>
      <h1>red</h1>
      <input type="button" value="fire" onClick={Color} />
    </Base>
  );
}

export default App;
