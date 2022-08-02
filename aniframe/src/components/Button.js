import React from "react";
import styled from "@emotion/styled/macro";
import { FaPlay } from "react-icons/fa";
import { GiInfo } from "react-icons/gi";

const Base = styled.div`
  margin-top: 1%;
`;

const PlayButton = styled.button`
  width: 120px;
  height: 35px;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid white;
  border-radius: 20px;
  color: white;
`;

const InfoButton = styled.button`
  margin-left: 1%;
  width: 120px;
  height: 35px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid white;
  border-radius: 20px;
`;

const Text = styled.span`
  margin-left: 10px;
  font-size: 16px;
`;

function Button() {
  return (
    <Base>
      <PlayButton>
        <FaPlay />
        <Text>PLAY</Text>
      </PlayButton>
      <InfoButton>
        <GiInfo />
        <Text>INFO</Text>
      </InfoButton>
    </Base>
  );
}

export default Button;
