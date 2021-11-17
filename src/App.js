import React from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import Loading from "./components/Loading";
import Error from "./components/Error";

import styled from "styled-components";

import { getTransactions } from "./service";

import { useFetch } from "./hooks/useFetch";

const StyledTable = styled(Table)`
  margin: 32px;
  margin-bottom: 0px;
`;

function App() {
  const [isLoading, hasErrorOccurred, data] = useFetch(getTransactions);

  const getContent = () => {
    if (isLoading) return <Loading />;

    if (hasErrorOccurred) return <Error />;

    console.log(`data`, data);
    const [transactions, total] = data;
    return <StyledTable transactions={transactions} total={total} />;
  };

  return (
    <>
      <Header title="Bench Test" />

      {getContent()}
    </>
  );
}

export default App;
