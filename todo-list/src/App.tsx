import React from "react";
import { atom, RecoilRoot, selector, useRecoilValue } from "recoil";
import axios from "axios";
import Calendar from "./components/Calendar";

// const todoIdState = atom({
//   key: "todoIdState",
//   default: 1,
// });

// const todoItemQuery = selector({
//   key: "todoItemQuery",
//   get: async ({ get }) => {
//     const id = get(todoIdState);

//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/todos/${id}`
//     );

//     return response.data;
//   },
// });

function App() {
  // todoItemQuery api의 return 값을 받아옴
  // const data = useRecoilValue(todoItemQuery);

  return (
    //RecoilRoot는 recoil의 hook를 사용하는 최상위 컴포넌트에 선언해야함
    <RecoilRoot>
      <Calendar />
      {/* {data.title}
      {data.userId} */}
    </RecoilRoot>
  );
}

export default App;
