// 컨텐츠 내용 모음
import React from "react";
import styled from "@emotion/styled/macro";
import { useTheme } from "@emotion/react";
import Content from "./Content";

const Base = styled.div<{ color?: string }>`
  margin-left: 39rem;
  padding-top: 9.375rem;
  font-size: 2.25rem;
  font-family: sans-serif;
  ${({ color }) => color && `color: ${color}`}
`;

const ContentList: React.FC = () => {
  // theme.ts에서 설정해준 값 가져옴
  const theme = useTheme();

  return (
    <Base color={theme.colors.primary}>
      <Content numberText={700} text1="만 명" text2="의 여행자" />
      <Content numberText={100} text1="만 개" text2="의 여행 리뷰" />
      <Content numberText={470} text1="만 개" text2="의 여행 일정" />
    </Base>
  );
};

export default ContentList;
