import React from "react";
import styled from "@emotion/styled/macro";
import { FadeIn } from "../styles/animation";
import { useTheme } from "@emotion/react";

const Base = styled.div<{ color?: string }>`
  margin-left: 39rem;
  padding-top: 9.375rem;
  ${({ color }) => color && `color: ${color}`}
`;

const Line = styled.div`
  font-size: 2.25rem;
  letter-spacing: -1px;
  font-family: sans-serif;
  margin-bottom: 1.25rem;
  animation: ${FadeIn} 0.7s 0.1s;
`;

const Text = styled.strong``;

const Count: React.FC = () => {
  const theme = useTheme();
  return (
    <Base color={theme.colors.primary}>
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