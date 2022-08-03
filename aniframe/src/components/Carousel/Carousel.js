import React, { useCallback, useRef } from "react";
import styled from "@emotion/styled/macro";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

const Row = styled.section`
  margin-top: 2%;
  margin-right: 10vw;
`;

const Sliders = styled.div`
  position: relative;
  z-index: 2;
`;

const PrevButton = styled.button`
  position: absolute;
  top: 37%;
  left: -5vw;
  z-index: 2;
  padding: 8px 12px;
  font-size: 40px;
  background-color: transparent;
  color: #fff;
  border: none;
  margin: 0;
  cursor: pointer;
`;

const NextButton = styled.button`
  position: absolute;
  top: 37%;
  right: -5vw;
  z-index: 3;
  padding: 8px 12px;
  font-size: 40px;
  background-color: transparent;
  color: #fff;
  border: none;
  margin: 0;
  cursor: pointer;
`;

const ImageContainer = styled.span``;

const Image = styled.div`
  height: 20vh;
  width: 19vw;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  &:hover {
    transform: scale(1.05);
  }
`;

const Text = styled.div`
  padding: 10px 0 0 15px;
  font-size: 20px;
`;

const SubText = styled.div`
  padding: 10px 0 0 15px;
  font-size: 13px;
`;

function Carousel({ dataVideoCarousel, dataAWCarousel, dataArtCarousel }) {
  const slickRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    arrows: false,
  };

  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);

  return (
    <Row>
      <Sliders>
        <Slider ref={slickRef} {...settings}>
          {dataVideoCarousel &&
            dataVideoCarousel.map((data) => (
              <ImageContainer key={data.id}>
                <Image url={Object.values(data.url)[0]}>
                  <Text>{data.title}</Text>
                  {data.subtitle && <SubText>{data.subtitle}</SubText>}
                </Image>
              </ImageContainer>
            ))}
          {dataAWCarousel &&
            dataAWCarousel.map((data) => (
              <ImageContainer key={data.id}>
                <Image url={Object.values(data.url)[0]}>
                  <Text>{data.title}</Text>
                  {data.subtitle && <SubText>{data.subtitle}</SubText>}
                </Image>
              </ImageContainer>
            ))}
          {dataArtCarousel &&
            dataArtCarousel.map((data) => (
              <ImageContainer key={data.id}>
                <Image url={Object.values(data.url)[0]}>
                  <Text>{data.title}</Text>
                  {data.subtitle && <SubText>{data.subtitle}</SubText>}
                </Image>
              </ImageContainer>
            ))}
        </Slider>
        <PrevButton onClick={previous}>
          <AiOutlineLeftCircle />
        </PrevButton>
        <NextButton onClick={next}>
          <AiOutlineRightCircle />
        </NextButton>
      </Sliders>
    </Row>
  );
}

export default Carousel;
