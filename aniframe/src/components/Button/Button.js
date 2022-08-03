import React, { useState } from "react";
import styled from "@emotion/styled/macro";
import { FaPlay } from "react-icons/fa";
import { GiInfo } from "react-icons/gi";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";

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

const WatchVideo = styled(Link)`
  text-decoration: none;
  color: white;
`;

const WatchInfo = styled.div`
  text-decoration: none;
  color: black;
`;

const Text = styled.span`
  margin-left: 10px;
  font-size: 16px;
`;

function Button({ buttonPlay }) {
  const [play, setPlay] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const playClick = () => {
    buttonPlay && setPlay(true);
  };

  const infoClick = () => {
    buttonPlay && setOpenModal(true);
  };

  return (
    <Base>
      <PlayButton onClick={playClick}>
        {buttonPlay || play ? (
          <WatchVideo to="/video">
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
      <InfoButton onClick={infoClick}>
        {openModal ? (
          <WatchInfo>
            <GiInfo />
            <Text>INFO</Text>
          </WatchInfo>
        ) : (
          <>
            <GiInfo />
            <Text>INFO</Text>
          </>
        )}
      </InfoButton>
      {openModal && (
        <Modal
          buttonPlay={buttonPlay}
          setOpenModal={setOpenModal}
          openModal={openModal}
        />
      )}
    </Base>
  );
}

export default Button;
