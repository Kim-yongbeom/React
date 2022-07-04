import React from "react";
import styled from "@emotion/styled/macro";
import triple2x from "../imgs/triple2x.png";

const Base = styled.div<{ url?: string }>`
  position: absolute;
  top: 9.375rem;
  width: 25rem;
  height: 21.125rem;
  background-size: 25rem 21.125rem;
  padding-top: 17.5rem;
  box-sizing: border-box;
  ${({ url }) => url && `background-image: url(${url})`};
  background-repeat: no-repeat;
  font-size: 0.9375rem;
`;

const TextWrapper = styled.div`
  text-align: center;
  font-family: sans-serif;
  color: rgba(58, 58, 58, 0.7);
`;

const Text = styled.div``;

const TripImg: React.FC = () => {
  return (
    <Base url={triple2x}>
      <TextWrapper>
        <Text>2021년 12월 기준</Text>
      </TextWrapper>
    </Base>
  );
};

export default TripImg;
