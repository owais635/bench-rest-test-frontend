import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 40vh;
  align-items: center;
  flex-direction: column;
`;

export default function Loading() {
  return (
    <Container>
      <h2>Sorry. Something went wrong.</h2>
      <h3>Please try again later.</h3>
    </Container>
  );
}
