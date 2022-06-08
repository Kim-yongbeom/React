import { atom, atomFamily, selectorFamily } from "recoil";
import { isSameDay } from "../../utils/date";

export interface Todo {
  id: string;
  content: string;
  done: boolean;
  date: Date;
}

// 할 일 목록상태를 받는 atom
export const todoListState = atom<Array<Todo>>({
  key: "todoListState",
  default: [],
});

// 선택한 날짜를 받는 atom
export const selectedDateState = atom<Date>({
  key: "selectedDateState",
  default: new Date(),
});

// 선택한 Todo
export const selectedTodoState = atom<Todo | null>({
  key: "selectedTodoState",
  default: null,
});

// todoList를 필터링 해주는 역할
export const filteredTodoListState = atomFamily<Array<Todo>, Date>({
  key: "filteredTodoListState",
  default: selectorFamily({
    key: "filteredTodoListState/default",
    get:
      (selectedDate) =>
      ({ get }) => {
        const todoList = get(todoListState);

        return todoList.filter((todo) => isSameDay(todo.date, selectedDate));
      },
  }),
});
