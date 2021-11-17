import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 50vh;
  align-items: center;
`;

export default function Loading() {
  return (
    <Container>
      <h2>Loading...</h2>
    </Container>
  );
}
