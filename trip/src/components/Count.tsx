import React from "react";
import styled from "@emotion/styled/macro";
import { keyframes } from "@emotion/react";

const FadeIn = keyframes`
  0% {
      opacity: 0;
      // x축, y축, z축 => y축 10%만큼 이동
      transform: translate3d(0, 5%, 0);
  }
  to {
      opacity: 1;
  }
`;

const Base = styled.div`
  margin-left: 39rem;
  padding-top: 9.375rem;
`;

const Line = styled.div`
  font-size: 2.25rem;
  letter-spacing: -1px;
  font-family: sans-serif;
  color: rgb(58, 58, 58);
  margin-bottom: 1.25rem;
  animation: ${FadeIn} 0.7s 0.1s;
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
