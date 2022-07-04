import React from "react";
import styled from "@emotion/styled/macro";
import TripImg from "./TripImg";

const Base = styled.section`
  height: auto;
`;

const Container = styled.div`
  max-width: 75rem;
  height: auto;
  margin: 0 auto;
`;

const SectionTrip: React.FC = () => {
  return (
    <Base>
      <Container>
        <TripImg />
      </Container>
    </Base>
  );
};

export default SectionTrip;
