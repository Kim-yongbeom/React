import React, { useEffect, useState } from "react";
import styled from "@emotion/styled/macro";
import Skeleton from "./components/Skeleton";

const Base = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 12px;
  row-gap: 24px;
`;

const Container = styled.div`
  displat: flex;
  flex-direction: columns;
  box-shadow: rgb(0 0 0 / 4%) 0px 16px 0px
  border-radius: 4px;
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;

const Title = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 24px;
`;

const Description = styled.p`
  margin: 8px 0 0 0;
  padding: 0;
  font-size: 16px;
`;

const Placeholder: React.FC = () => (
  <Container>
    <ImageWrapper>
      <Skeleton width={320} height={220} />
    </ImageWrapper>
    <Info>
      <Skeleton width={150} height={29} rounded />
      <div style={{ height: "8px" }} />
      <Skeleton width={200} height={19} rounded />
    </Info>
  </Container>
);

const Item: React.FC = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image src="http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg" />
      </ImageWrapper>
      <Info>
        <Title></Title>
        <Description>zzzzzzz</Description>
      </Info>
    </Container>
  );
};

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <Base>
      {loading
        ? Array.from({ length: 25 }).map((_, idx) => <Placeholder key={idx} />)
        : Array.from({ length: 25 }).map((_, idx) => <Item key={idx} />)}
    </Base>
  );
}

export default App;
