import React from "react";
import styled from "@emotion/styled/macro";

const Base = styled.div`
  margin-left: 49rem;
  padding-top: 9.475rem;
`;

const Line = styled.div`
  font-size: 2.25rem;
  letter-spacing: -1px;
  font-family: sans-serif;
  color: rgb(58, 58, 58);
  margin-bottom: 1.25rem;
`;

const Text = styled.strong``;

const Count: React.FC = () => {
  return (
    <Base>
      <Line>
        <Text>700만 명</Text>의 여행자
      </Line>
      <Line>
        <Text>100만 개</Text>의 여행 리뷰
      </Line>
      <Line>
        <Text>470만 개</Text>의 여행 일정
      </Line>
    </Base>
  );
};

export default Count;
