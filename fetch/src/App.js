import "./App.css";
import Cache from "./components/SWRExample/Cache";
import Profile from "./components/SWRExample/Profile";
// import { observableTodoStore } from "./app/ObservableTodoStore";
// import TodoList from "./components/TodoList";
// import MobxExample from "./components/MobxExample";
// import TestMocking from "./components/TestMocking";
// import Counter from "./features/counter/Counter";
// import Counter2 from "./components/Counter2";

function App() {
  return (
    <div className="App">
      <Cache />
      <Profile />
      {/* <MobxExample /> */}
      {/* <TestMocking /> */}
      {/* <Counter /> */}
      {/* <br /> */}
      {/* <Counter2 /> */}
      {/* <TodoList store={observableTodoStore} /> */}
    </div>
  );
}

export default App;
