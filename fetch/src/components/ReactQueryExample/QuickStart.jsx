import React from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import GlobalLoader from "./GlobalLoader";
import { getTodos, postTodo } from "./my-api";

export default function QuickStart() {
  const queryClient = useQueryClient();
  // todos는 키
  const query = useQuery("todos", getTodos);
  // useMutation은 키값 없이 사용
  const mutation = useMutation(postTodo, {
    onSuccess: () => {
      // mutation 클릭한 내용을 바로 랜더링
      queryClient.invalidateQueries("todos");
    },
  });

  if (query.isLoading) {
    return "Loading...";
  }
  if (query.error) {
    return "Error...";
  }
  return (
    <div>
      <GlobalLoader />
      <ul>
        {query.data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: "Learn React-Query",
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
