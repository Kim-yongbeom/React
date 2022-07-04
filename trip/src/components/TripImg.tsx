import React from "react";
import styled from "@emotion/styled/macro";
import triple2x from "../imgs/triple2x.png";

const Base = styled.div`
  position: absolute;
  top: 9.375rem;
  width: 25rem;
  height: 21.125rem;
  background-size: 25rem 21.125rem;
  padding-top: 17.5rem;
  box-sizing: border-box;
  background-image: url(${triple2x});
  background-repeat: no-repeat;
  font-size: 15px;
`;

const BaseImg = styled.div`
  text-align: center;
  font-family: sans-serif;
  color: rgba(58, 58, 58, 0.7);
`;

const TripImg: React.FC = () => {
  return (
    <Base>
      <BaseImg>2021년 12월 기준</BaseImg>
    </Base>
  );
};

export default TripImg;
