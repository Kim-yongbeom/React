import React from "react";
import styled from "@emotion/styled/macro";
import Button from "./Button/Button";
import Carousel from "./Carousel/Carousel";

const Base = styled.div`
  position: relative;
  padding-bottom: 100vh;
  height: 0px;
  overflow: hidden;
  scroll-snap-align: start;
`;

const InfoContainer = styled.div`
  margin-left: 10%;
  height: 50vh;
`;

const Logo = styled.div`
  padding-top: 2%;
  font-size: 25px;
  font-weight: bold;
`;

const Title = styled.div`
  margin-top: 10%;
  font-size: 70px;
  font-weight: bold;
`;

const Content = styled.div`
  margin-top: 4%;
  font-size: 20px;
`;

const SliderContent = styled.div`
  margin-top: 2%;
  font-size: 30px;
`;

const VideoContainer = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  border: none;
  width: 100%;
  height: 100%;
  z-index: -99;
  pointer-events: none;
`;

function Video({ title, text, kind, dataVideoCarousel }) {
  return (
    <Base>
      <InfoContainer>
        <Logo>LG OLED ART</Logo>
        <Title>
          {(title || "").split("\n").map((txt, index) => (
            <div key={index}>
              {txt}
              <br />
            </div>
          ))}
        </Title>
        <Content>
          {(text || "").split("\n").map((txt, index) => (
            <div key={index}>
              {txt}
              <br />
            </div>
          ))}
        </Content>
        <Button />
        <SliderContent>{kind}</SliderContent>
        <Carousel dataVideoCarousel={dataVideoCarousel} />
      </InfoContainer>
      <VideoContainer
        width="100vw"
        height="100vh"
        src="https://www.youtube.com/embed/lJXNC5J68V8?autoplay=1&mute=1&loop=1&playlist=lJXNC5J68V8&controls=0&disablekb=1&rel=0&modestbranding=1&showinfo=0"
        allow="autoplay; encrypted-media"
      ></VideoContainer>
    </Base>
  );
}

export default Video;
