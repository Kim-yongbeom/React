import React from "react";
import styled from "@emotion/styled/macro";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { selectedTodoState, Todo } from "./atom";
import { todoFormModalOpenState } from "../TodoFormModal/atom";

const TodoItem = styled.li<{ done?: boolean; selected?: boolean }>`
  max-width: 100px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: ${({ done, selected }) =>
    selected
      ? "rgba(112,71,235,1)"
      : done
      ? "transparent"
      : "rgba(112,71,235,0.4)"};
  padding: 2px 4px;
  margin: 0;
  border-radius: 8px;
  font-size: 10px;
  text-decoration: ${({ done }) => done && "line-throuth"};
  cursor: pointer;
`;

const EtcItem = styled.li`
  padding: 2px 4px;
  margin: 0;
  font-size: 10px;
  cursor: pointer;
`;

const Base = styled.div`
  list-style: none;
  margin: 36px 0 0 0;
  padding: 0;
  width: 100%;
  height: 60px;
  ${TodoItem} + ${TodoItem} {
    margin-top: 1px;
  }
  ${TodoItem} + ${TodoItem} {
  }
`;

interface Props {
  items: Array<Todo>;
}

const TodoList: React.FC<Props> = ({ items }) => {
  const selectedTodo = useRecoilValue(selectedTodoState);

  // useRecoilState() hook을 사용한다면 업데이트를 구독하고
  // atom 혹은 selector가 업데이트되면 리렌더링을 합니다.
  // useSetRecoilState()을 사용하는 것은 컴포넌트가
  // 값이 바뀔 때 리렌더링을 하기 위해 컴포넌트를 구독하지 않고도 값을 설정하게 해줍니다.
  const setSelectedTodo = useSetRecoilState(selectedTodoState);
  const setTodoStatisticsModalOpen = useSetRecoilState(todoFormModalOpenState);

  // React.SyntheticEvent(합성이벤트): 객체로 모든 브라우저에서 이벤트를 동일하게 처리하기 위한 Wrapper 객체이다.
  // 대부분의 인터페이스는 브라우저 고유 이벤트와 같다.
  // HTMLLIElement 인터페이스는 리스트 엘리먼트를 조작하기 위한 특정 프로퍼티와 메소드들을 제공합니다.
  const handleClick = (e: React.SyntheticEvent<HTMLLIElement>, todo: Todo) => {
    // stopPropagation: 현재 이벤트가 캡처링/버블링 단계에서 더 이상 전파되지 않도록 방지합니다.
    e.stopPropagation();
    setSelectedTodo(
      selectedTodo?.id === todo.id && selectedTodo.date === todo.date
        ? null
        : todo
    );
  };

  const handleTodoStatisticsModalOpen = (
    e: React.SyntheticEvent<HTMLLIElement>
  ) => {
    e.stopPropagation();

    setTodoStatisticsModalOpen(true);
  };

  return (
    <Base>
      {items.slice(0, 3).map((item, idx) => (
        <TodoItem
          key={item.id}
          done={item.done}
          onClick={(e) => handleClick(e, item)}
        >
          {item.content}
        </TodoItem>
      ))}
      {items.length > 3 && (
        <EtcItem onClick={handleTodoStatisticsModalOpen}>{`그 외 ${
          items.length - 3
        }`}</EtcItem>
      )}
    </Base>
  );
};

export default TodoList;
