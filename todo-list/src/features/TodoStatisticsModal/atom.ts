import { atom, atomFamily, selectorFamily } from "recoil";
import { filteredTodoListState } from "../TodoList/atom";

// modal의 열림 유무를 가르킴
export const todoStatisticsModalOpenState = atom({
  key: "todoStatisticsModalOpenState",
  default: false,
});

// 해당하는 날짜의 할 일 통계를 가져옴
export const todoStaticsticsState = atomFamily<
  { total: number; done: number },
  Date
>({
  key: "todoStaticsticsState",
  default: selectorFamily({
    key: "todoStaticsticsState/default",
    get:
      (selectedDate) =>
      ({ get }) => {
        const todoList = get(filteredTodoListState(selectedDate));

        return {
          total: todoList.length,
          // 완료된 상태
          done: todoList.filter((todo) => todo.done).length || 0,
        };
      },
  }),
});
