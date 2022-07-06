// 수상내역 모음
import React from "react";
import styled from "@emotion/styled/macro";
import playstroe2x from "../../imgs/play-store2x.png";
import badgeapple4x from "../../imgs/badge-apple4x.png";
import Award from "./Award";
import { useTheme } from "@emotion/react";

const Base = styled.div<{ color?: string }>`
  margin: 3.125rem 0 8.75rem 39rem;
  white-space: nowrap;
  font-size: 0.875rem;
  font-family: sans-serif;
  font-weight: bold;
  line-height: 1.375rem;
  ${({ color }) => color && `color: ${color}`}
`;

const AwardList: React.FC = () => {
  // theme.ts에서 설정해준 값 가져옴
  const theme = useTheme();

  return (
    <Base color={theme.colors.gray[0.8]}>
      <Award
        text1="2018 구글 플레이스토어"
        text2="올해의 앱 최우수상 수상"
        image={playstroe2x}
      />
      <Award
        text1="2018 애플 앱스토어"
        text2="오늘의 여행앱 선정"
        image={badgeapple4x}
      />
    </Base>
  );
};

export default AwardList;
