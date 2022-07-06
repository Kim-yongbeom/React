import React from "react";
import styled from "@emotion/styled/macro";
import playstroe2x from "../imgs/play-store2x.png";
import badgeapple4x from "../imgs/badge-apple4x.png";
import { FadeIn } from "../styles/animation";
import { useTheme } from "@emotion/react";

const Base = styled.div<{ color?: string }>`
  margin: 3.125rem 0 8.75rem 39rem;
  white-space: nowrap;
  ${({ color }) => color && `color: ${color}`}
`;

const TextWrapper = styled.div<{ url?: string }>`
  background-size: 3.375rem 3.375rem;
  height: 3.375rem;
  padding: 0.3125rem 0 0.3125rem 3.875rem;
  font-size: 0.875rem;
  line-height: 1.375rem;
  margin-right: 2.4375rem;
  display: inline-block;
  font-family: sans-serif;
  ${({ url }) => url && `background-image: url(${url})`};
  background-position: left top;
  background-repeat: no-repeat;
  font-weight: bold;
  animation: ${FadeIn} 0.7s 0.2s;
`;

const Text = styled.div``;

const Award: React.FC = () => {
  const theme = useTheme();

  return (
    <Base color={theme.colors.gray[0.8]}>
      <TextWrapper url={playstroe2x}>
        <Text>
          2018 구글 플레이스토어
          <br />
          올해의 앱 최우수상 수상
        </Text>
      </TextWrapper>
      <TextWrapper url={badgeapple4x}>
        <Text>
          2018 애플 앱스토어
          <br />
          오늘의 여행앱 선정
        </Text>
      </TextWrapper>
    </Base>
  );
};

export default Award;
