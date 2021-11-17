import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Table from "./components/TransactionTable";
import Error from "./components/Error";
import Loading from "./components/Loading";
import { useMakeRequest } from "./hooks/useMakeRequest";
import { getTransactions } from "./service";

const StyledTable = styled(Table)`
  margin: 32px;
`;

function App() {
  const [isLoading, hasErrorOccurred, data] = useMakeRequest(getTransactions);

  const getContent = () => {
    if (isLoading) return <Loading />;

    if (hasErrorOccurred) return <Error />;

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
