import React from "react";
import styled from "@emotion/styled/macro";
import TripImg from "./TripImg";
import Count from "./Count";
import Award from "./Award";

const Base = styled.section`
  height: 34.5rem;
`;

const Container = styled.div`
  max-width: 75rem;
  margin: 0 auto;
`;

// React사용해 Fadein 구현해야함

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
