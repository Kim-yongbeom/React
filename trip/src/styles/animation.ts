import { keyframes } from "@emotion/react";

export const FadeIn = keyframes`
  0% {
      opacity: 0;
      // x축, y축, z축 => y축 5%만큼 이동
      transform: translate3d(0, 5%, 0);
  }
  to {
      opacity: 1;
  }
`;
