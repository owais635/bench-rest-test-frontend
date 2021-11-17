import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background: ${(props) => props.theme.primary};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Header({ title }) {
  return (
    <StyledHeader>
      <p>{title}</p>
    </StyledHeader>
  );
}
