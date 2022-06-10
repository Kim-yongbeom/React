// 포켓몬 목록 표시
import React from "react";
import styled from "@emotion/styled/macro";

import PoketmonList from "../components/PoketmonList";

const Base = styled.div``;

const Title = styled.h1``;

const Description = styled.small``;

const ImageWrapper = styled.div``;

const Image = styled.img``;

const IndexPage: React.FC = () => {
  return (
    <div>
      <PoketmonList />
    </div>
  );
};

export default IndexPage;
