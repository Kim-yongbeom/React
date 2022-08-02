import React from "react";
import styled from "@emotion/styled/macro";
import Button from "./Button";

const ImageContainer = styled.div`
  z-index: -99;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
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
  margin-top: 3%;
  font-size: 20px;
`;

const SliderContent = styled.div`
  font-size: 30px;
`;

function Image({ url, title, text, kind }) {
  return (
    <>
      <ImageContainer url={url}>
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
        </InfoContainer>
      </ImageContainer>
    </>
  );
}

export default Image;
