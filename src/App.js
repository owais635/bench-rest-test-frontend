import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Table from "./components/TransactionTable";
import Error from "./components/Error";
import Loading from "./components/Loading";
import { useMakeRequest } from "./hooks/useMakeRequest";
import { getTransactions, getTransactionTotal } from "./service";

const StyledTable = styled(Table)`
  margin: 32px;
`;

function App() {
  const [isLoading, hasErrorOccurred, transactions] =
    useMakeRequest(getTransactions);

  const getContent = () => {
    if (isLoading) return <Loading />;

    if (hasErrorOccurred) return <Error />;

    return (
      <StyledTable
        transactions={transactions}
        total={getTransactionTotal(transactions)}
      />
    );
  };

  return (
    <>
      <Header title="Bench Test" />
      {getContent()}
    </>
  );
}

export default App;
