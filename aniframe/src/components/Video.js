import React from "react";
import styled from "@emotion/styled/macro";

const Base = styled.div`
  width: 100%;
  height: 100%;
`;

const VideoFrame = styled.iframe``;

function Video() {
  return (
    <Base>
      <VideoFrame
        src="https://www.youtube.com/embed/lJXNC5J68V8"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></VideoFrame>
    </Base>
  );
}

export default Video;
