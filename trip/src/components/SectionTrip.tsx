import React from "react";
import styled from "@emotion/styled/macro";
import TripImg from "./TripImg";
import Count from "./Count";
import Award from "./Award";

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
        <Count />
        <Award />
      </Container>
    </Base>
  );
};

export default SectionTrip;
