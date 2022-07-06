// TripImg, ContentList, AwardList 를 묶은 하나의 section
import React from "react";
import styled from "@emotion/styled/macro";
import TripImg from "./TripImg";
import ContentList from "./ContentList";
import AwardList from "./AwardList";

const Base = styled.section`
  height: auto;
  min-width: 75rem;
`;

const Container = styled.div`
  max-width: 65rem;
  margin: 0 auto;
`;

const SectionTrip: React.FC = () => {
  return (
    <Base>
      <Container>
        <TripImg />
        <ContentList />
        <AwardList />
      </Container>
    </Base>
  );
};

export default SectionTrip;
