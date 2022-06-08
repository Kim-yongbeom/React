import React, { useState } from "react";
import styled from "@emotion/styled/macro";
import { useRecoilValue, useRecoilState, useRecoilCallback } from "recoil";
// npm i @types/uuid -D
// uuid: 네트워크 상에서 고유성이 보장되는 id를 만들기 위한 표준 규약.
import { v4 as uuidv4 } from "uuid";

import Modal from "../../components/Modal";

import { selectedDateState, todoListState } from "../TodoList/atom";
import { todoFormModalOpenState } from "./atom";
import { getSimpleDateFormat } from "../../utils/date";

const ModalBody = styled.div`
  width: 100vw;
  max-width: 386px;
  padding: 8px;
`;

const Date = styled.small`
  display: block;
  color: #c9c8cc;
`;

const InputTodo = styled.input`
  padding: 16px 24px;
  border: none;
  width: 100%;
  box-sizing: border-box;
  background-color: transparent;
  color: #c9c8cc;
  caret-color: #c9c8cc;
`;

const Card = styled.div`
  width: 100%;
  max-width: 370px;
  border-radius: 16px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  padding: 24px;
  box-sizing: border-box;
  background-color: #19181a;
  ${Date} + ${InputTodo} {
    margin-top: 24px;
  }
`;

const TodoFormModal: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  // useRecoilValue: 주어진 Recoil 상태의 값을 리턴합니다.
  // 이 hook 은 상태를 읽을 수만 있게 하고 싶을 때 사용하는 것을 추천합니다
  const selectedDate = useRecoilValue(selectedDateState);
  const todoList = useRecoilValue(todoListState);

  // useSetRecoilState: Recoil 상태의 값을 업데이트하기 위한 setter 함수를 반환힙니다.
  // 이 hook은 상태를 읽지 않고 쓰기만 하고 싶을 때 추천합니다.
  const [isOpen, setIsOpen] = useRecoilState(todoFormModalOpenState);

  const handleClose = () => setIsOpen(false);

  const reset = () => {
    setTodo("");
  };

  // useRecoilCallback: Recoil 상태(state)에서 callback이 동작하도록 API를 제공합니다.
  // 이 hook은 비동기적으로 현재의 Recoil 상태를 업데이트하고 일기 전용 Snapshot에 접근할 수 있는 callback을 구축하기 위해 사용한다.
  const addTodo = useRecoilCallback(
    ({ snapshot, set }) =>
      () => {
        const todoList = snapshot.getLoadable(todoListState).getValue();

        const newTodo = {
          id: uuidv4(),
          content: todo,
          done: false,
          date: selectedDate,
        };

        set(todoListState, [...todoList, newTodo]);
      },
    [todo, selectedDateState, todoList]
  );

  // enter를 누를 때 할일 목록을 추가시킴
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo();
      reset();
      handleClose();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalBody>
        <Card>
          {/* utils폴더안에 있는 함수 2022-06-08 형태로 바꿔줌 */}
          <Date>{getSimpleDateFormat(selectedDate)}</Date>
          <InputTodo
            placeholder="새로운 이벤트"
            onKeyPress={handleKeyPress}
            value={todo}
            onChange={handleChange}
          />
        </Card>
      </ModalBody>
    </Modal>
  );
};

export default TodoFormModal;
