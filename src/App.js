import React from "react";
import Header from "./components/Header";
import Table from "./components/Table";

import styled from "styled-components";

const StyledTable = styled(Table)`
  margin: 32px;
  margin-bottom: 0px;
`;

function App() {
  return (
    <>
      <Header title="Bench Test" />
      <StyledTable />
    </>
  );
}

export default App;
