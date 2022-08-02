import React from "react";
import styled from "@emotion/styled/macro";

const Base = styled.div`
  width: 100%;
  height: 100%;
`;

const ImageFrame = styled.iframe``;

function Image() {
  return (
    <Base>
      <ImageFrame
        src="https://www.youtube.com/embed/lJXNC5J68V8"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></ImageFrame>
    </Base>
  );
}

export default Image;
