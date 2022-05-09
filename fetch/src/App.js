import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import Example from "./components/ReactQueryExample/Example";
import InfiniteScroll from "./components/ReactQueryExample/InfiniteScroll";
// import Pagination from "./components/ReactQueryExample/Pagination";
import QuickStart from "./components/ReactQueryExample/QuickStart";
// import Cache from "./components/SWRExample/Cache";
// import Profile from "./components/SWRExample/Profile";
// import { observableTodoStore } from "./app/ObservableTodoStore";
// import TodoList from "./components/TodoList";
// import MobxExample from "./components/MobxExample";
// import TestMocking from "./components/TestMocking";
// import Counter from "./features/counter/Counter";
// import Counter2 from "./components/Counter2";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Example />
        <QuickStart />
        {/* <Pagination /> */}
        <InfiniteScroll />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      {/* <Cache /> */}
      {/* <Profile /> */}
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
