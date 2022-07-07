// 컨텐츠 내용
import React from "react";
import styled from "@emotion/styled/macro";
import { FadeIn } from "../../styles/animation";
import useCount from "../../hooks/useCount";

const Line = styled.div`
  letter-spacing: -1px;
  margin-bottom: 1.25rem;
  animation: ${FadeIn} 0.7s 0.1s;
`;

const Text = styled.strong``;

interface Props {
  numberText: number;
  text1: string;
  text2: string;
}

const Content: React.FC<Props> = ({ numberText, text1, text2 }) => {
  return (
    <Line>
      <Text>
        {useCount(numberText, 0, 2000)}
        {text1}
      </Text>
      {text2}
    </Line>
  );
};

export default Content;
