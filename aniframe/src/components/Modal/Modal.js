import React from "react";
import styled from "@emotion/styled/macro";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ModalBackground = styled.div`
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: rgba(200, 200, 200, 0.4);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;

const ModalContainer = styled.div`
  position: relative;
  width: 70vw;
  height: 60vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const CloseButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 3vh;
  right: 3vw;
  font-size: 40px;
  color: white;
  cursor: pointer;
`;

const Title = styled.div`
  display: inline-block;
  margin-top: 10px;
  font-size: 25px;
`;

const Body = styled.div`
  font-size: 18px;
`;

const Location = styled.div`
  margin-top: 5vh;
`;

const Artist = styled.div`
  margin-top: 1vh;
`;

function Modal({ buttonPlay, setOpenModal }) {
  const closer = () => {
    setOpenModal(false);
  };

  return (
    <ModalBackground>
      <ModalContainer url={Object.values(buttonPlay.img)[0]}>
        <CloseButton onClick={closer}>
          <AiOutlineCloseCircle />
        </CloseButton>
        <Title>
          <h1>{buttonPlay.title}</h1>
        </Title>
        <Body>
          {(buttonPlay.content || "").split("\n").map((txt, index) => (
            <div key={index}>
              {txt}
              <br />
            </div>
          ))}
        </Body>
        <Location>Loction: {buttonPlay.location}</Location>
        <Artist>Artist: {buttonPlay.artist}</Artist>
      </ModalContainer>
    </ModalBackground>
  );
}

export default Modal;
