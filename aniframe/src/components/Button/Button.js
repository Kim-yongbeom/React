import React, { useState } from "react";
import styled from "@emotion/styled/macro";
import { FaPlay } from "react-icons/fa";
import { GiInfo } from "react-icons/gi";

const Base = styled.div`
  margin-top: 2%;
`;

const PlayButton = styled.button`
  width: 120px;
  height: 35px;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid white;
  border-radius: 20px;
  color: white;
  cursor: pointer;
`;

const InfoButton = styled.button`
  margin-left: 1%;
  width: 120px;
  height: 35px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid white;
  border-radius: 20px;
  cursor: pointer;
`;

const WatchVideo = styled.a`
  text-decoration: none;
  color: white;
`;

const Text = styled.span`
  margin-left: 10px;
  font-size: 16px;
`;

function Button({ buttonPlay }) {
  const [play, setPlay] = useState(false);

  const playClick = () => {
    buttonPlay && setPlay(true);
  };

  return (
    <Base>
      <PlayButton onClick={playClick}>
        {buttonPlay || play ? (
          <WatchVideo href="http://localhost:3000/video">
            <FaPlay />
            <Text>PLAY</Text>
          </WatchVideo>
        ) : (
          <>
            <FaPlay />
            <Text>PLAY</Text>
          </>
        )}
      </PlayButton>
      <InfoButton>
        <GiInfo />
        <Text>INFO</Text>
      </InfoButton>
    </Base>
  );
}

export default Button;
