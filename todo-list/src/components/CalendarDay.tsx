// 날짜에 해당하는 할 일 목록
import React from "react";
import styled from "@emotion/styled/macro";

import { isSameDay } from "../utils/date";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../features/TodoList/atom";

interface Props {
  date: Date;
}

const TableData = styled.td`
  text-align: center;
  color: #c9c8cc;
  padding: 8px;
  position: relative;
`;

const DisplayDate = styled.div<{ isToday?: boolean; isSelected?: boolean }>`
  color: ${({ isToday }) => isToday && "#F8F7FA"};
  background-color: ${({ isToday, isSelected }) =>
    isSelected ? "#7047EB" : isToday ? "#313133" : ""};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  align-self: flex-end;
  position: absolute;
  top: 8px;
  right: 8px;
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

const CalendarDay: React.FC<Props> = ({ date }) => {
  const today = new Date();
  const selectedDate = useRecoilValue(filteredTodoListState(date));

  return (
    <TableData key={d} onClick={() => selectDate(thisDay)}>
      <DisplayDate
        isSelected={isSameDay(selectedDate, thisDay)}
        isToday={isSameDay(today, thisDay)}
      >
        {new Date(year, month, d + 1).getDate()}
      </DisplayDate>
    </TableData>
  );
};

export default CalendarDay;
