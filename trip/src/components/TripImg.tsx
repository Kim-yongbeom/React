import React from "react";
import styled from "@emotion/styled/macro";
import triple2x from "../imgs/triple2x.png";
import { FadeIn } from "../styles/animation";
import { useTheme } from "@emotion/react";

const Base = styled.div<{ color?: string }>`
  position: relative;
  top: 9.375rem;
  font-size: 0.9375rem;
  ${({ color }) => color && `color: ${color}`}
`;

const TextWrapper = styled.div<{ url?: string }>`
  position: absolute;
  width: 25rem;
  height: 21.125rem;
  padding-top: 17.5rem;
  background-size: 25rem 21.125rem;
  box-sizing: border-box;
  ${({ url }) => url && `background-image: url(${url})`};
  background-repeat: no-repeat;
  text-align: center;
  font-family: sans-serif;
  animation: ${FadeIn} 0.7s;
`;

const Text = styled.div``;

const TripImg: React.FC = () => {
  const theme = useTheme();

  return (
    <Base color={theme.colors.gray[0.7]}>
      <TextWrapper url={triple2x}>
        <Text>2021년 12월 기준</Text>
      </TextWrapper>
    </Base>
  );
};

export default TripImg;
