import React from "react";
import styled from "@emotion/styled/macro";
import { Global, css } from "@emotion/react";

const Base = styled.div``;

const Container = styled.div``;

const globalStyle = css`
  body {
    background-color: #abc1d1;
  }
`;

const RoomDetail: React.FC = () => {
  return (
    <Base>
      <Global styles={globalStyle} />
      <Container>{/* <MessageList /> */}</Container>
      {/* <InputChat /> */}
    </Base>
  );
};

export default RoomDetail;
