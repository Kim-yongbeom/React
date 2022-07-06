// 수상내역
import React from "react";
import styled from "@emotion/styled/macro";
import { FadeIn } from "../../styles/animation";

const TextWrapper = styled.div<{ url?: string }>`
  background-size: 3.375rem 3.375rem;
  height: 3.375rem;
  padding: 0.3125rem 0 0.3125rem 3.875rem;
  margin-right: 2.4375rem;
  display: inline-block;
  // 이미지 파일
  ${({ url }) => url && `background-image: url(${url})`};
  background-position: left top;
  background-repeat: no-repeat;
  animation: ${FadeIn} 0.7s 0.2s;
`;

const Text = styled.div``;

interface Props {
  text1: string;
  text2: string;
  image: string;
}

const Award: React.FC<Props> = ({ text1, text2, image }) => {
  return (
    <TextWrapper url={image}>
      <Text>
        {text1}
        <br />
        {text2}
      </Text>
    </TextWrapper>
  );
};

export default Award;
