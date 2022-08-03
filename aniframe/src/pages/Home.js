import React from "react";
import styled from "@emotion/styled/macro";
import Image from "../components/Image";
import Video from "../components/Video";
import main2 from "../images/main2.jpg";
import main3 from "../images/main3.jpg";
import {
  dataArtCarousel,
  dataAWCarousel,
  dataVideoCarousel,
} from "../components/Carousel/dataCarousel";
import { buttonPlay } from "../components/Button/dataButton";

const Container = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  color: white;
`;

function Home() {
  return (
    <Container>
      <Video
        title={"LUX"}
        text={
          "LUX brings the world’s most celebrated media artists working \n with the latest audio-visual technologies, including LG OLED, \n to expand the boundaries of \n interactive, immersive art."
        }
        kind={"PROJECT"}
        dataVideoCarousel={dataVideoCarousel}
      />
      <Image
        url={main2}
        title={"Shooting into \n the Corner"}
        text={"Anish Kapoor"}
        kind={"ARTWORK"}
        dataAWCarousel={dataAWCarousel}
        buttonPlay={buttonPlay}
      />
      <Image
        url={main3}
        title={"Anish Kapoor"}
        kind={"ARTIST"}
        dataArtCarousel={dataArtCarousel}
      />
    </Container>
  );
}

export default Home;
