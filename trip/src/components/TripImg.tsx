import React from "react";
import styled from "@emotion/styled/macro";
import { keyframes } from "@emotion/react";
import triple2x from "../imgs/triple2x.png";

// fadein animation
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
  position: relative;
  top: 9.375rem;
  font-size: 0.9375rem;
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
  color: rgba(58, 58, 58, 0.7);
  animation: ${FadeIn} 0.7s;
`;

const Text = styled.div``;

const TripImg: React.FC = () => {
  return (
    <Base>
      <TextWrapper url={triple2x}>
        <Text>2021년 12월 기준</Text>
      </TextWrapper>
    </Base>
  );
};

export default TripImg;
