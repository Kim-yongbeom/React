import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

const StyledSlider = styled(Slider)`
  text-align: center;
`;

const ImageContainer = styled.div`
  background-color: ${(props) => props.backgroundColor};
`;

const Image = styled.div`
  width: 100vw;
  height: 40vh;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: center;
`;

function Sliders() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplayspeed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
  };
  return (
    <StyledSlider {...settings}>
      <ImageContainer backgroundColor="rgb(249, 232, 154)">
        <Image url="https://cdn.011st.com/11dims/resize/1240x400/quality/99/11src/http://cdn.011st.com/ds/2022/08/17/1376/ea5f9204c4c5ba8d2e2391a90bd5d634.jpg" />
      </ImageContainer>
      <ImageContainer backgroundColor="rgb(225, 229, 254)">
        <Image url="https://cdn.011st.com/11dims/resize/1240x400/quality/99/11src/http://cdn.011st.com/ds/2022/06/09/1415/ff19bffebb0b979697b43a274fad8391.jpg" />
      </ImageContainer>
      <ImageContainer backgroundColor="rgb(211, 216, 254)">
        <Image url="https://cdn.011st.com/11dims/resize/1240x400/quality/99/11src/http://cdn.011st.com/ds/2022/08/17/1376/61ac38268a3866147701f28db298d2a3.jpg" />
      </ImageContainer>
      <ImageContainer backgroundColor="rgb(162, 227, 245)">
        <Image url="https://cdn.011st.com/11dims/resize/1240x400/quality/99/11src/browsing/banner/2022/08/26/33033/2022082617372630767_12399379_1.jpg" />
      </ImageContainer>
    </StyledSlider>
  );
}

export default Sliders;
