// 반복되는 애니메이션 설정
import { keyframes } from "@emotion/react";

export const FadeIn = (y: number) => keyframes`
  0% {
    opacity: 0;
    // x축, y축, z축 => y축 5%만큼 이동
    transform: translate3d(0, ${y}%, 0);
  }
  20% {
    opacity: 0.2;
  }
  40% {
    opacity: 0.4;
  }
  60% {
    opacity: 0.6;
  }
  80% {
    opacity: 0.8;
  }
  to {
    opacity: 1;
  }
`;
