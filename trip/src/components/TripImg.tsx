import React from "react";
import styled from "@emotion/styled/macro";
import triple2x from "../imgs/triple2x.png";

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
