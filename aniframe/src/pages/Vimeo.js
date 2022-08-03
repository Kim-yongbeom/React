import React from "react";
import styled from "@emotion/styled/macro";

const Base = styled.div`
  height: 100vh;
  background-color: black;
`;

const VideoContainer = styled.iframe`
  border: none;
  width: 100%;
  height: 100vh;
`;

function Vimeo() {
  return (
    <Base>
      <VideoContainer
        src="https://player.vimeo.com/video/151292804?autoplay=1"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></VideoContainer>
    </Base>
  );
}

export default Vimeo;
