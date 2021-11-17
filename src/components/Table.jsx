import React from "react";
import styled from "styled-components";

const data = [
  {
    date: "2013-12-22", // String, date of transaction
    company: "The ABC Company",
    ledger: "Phone & Internet Expense", // String, ledger name
    amount: 13381.98, // String, amount
  },
  {
    date: "2013-12-22", // String, date of transaction
    company: "The ABC Company",
    ledger: "Phone & Internet Expense", // String, ledger name
    amount: 5781.73, // String, amount
  },
  {
    date: "2013-12-22", // String, date of transaction
    company: "The ABC Company",
    ledger: "Phone & Internet Expense", // String, ledger name
    amount: 2141.22, // String, amount
  },
  {
    date: "2013-12-22", // String, date of transaction
    company: "The ABC Company",
    ledger: "Phone & Internet Expense", // String, ledger name
    amount: 2141.22, // String, amount
  },
];

const StyledTable = styled.table`
  background: white;
  width: 100%;
  border-radius: 3px;
  border-collapse: collapse;
`;

const StyledHeader = styled.tr`
  color: ${(props) => props.theme.primaryText};
  text-align: left;

  > th {
    padding: 16px;
  }

  & > th:nth-child(4) {
    text-align: end;
  }
`;

const StyledRow = styled.tr`
  background-color: #faf9f8;
  > td {
    padding: 16px;
  }

  &:hover {
    background-color: #d3d3d340;
  }

  > td:nth-child(4) {
    text-align: end;
  }
`;

const StyledSecondaryData = styled.td`
  color: ${({ index, theme }) =>
    index % 2 === 1 ? theme.primary : theme.secondaryText};
`;

const StyledMainData = styled.td`
  font-weight: bold;
  color: ${({ index, theme }) =>
    index % 2 === 1 ? theme.primary : theme.mainText};
`;

export default function Table({ className }) {
  const total = 1729;
  return (
    <div className={className}>
      <StyledTable>
        <StyledHeader>
          <th>Date</th>
          <th>Company</th>
          <th>Account</th>
          <th>{`$${total}`}</th>
        </StyledHeader>

        {data.map((el, i) => (
          <StyledRow index={i}>
            <StyledSecondaryData index={i}>{el.date}</StyledSecondaryData>
            <StyledMainData index={i}>{el.company}</StyledMainData>
            <StyledSecondaryData index={i}>{el.ledger}</StyledSecondaryData>
            <StyledMainData index={i}>{el.amount}</StyledMainData>
          </StyledRow>
        ))}
      </StyledTable>
    </div>
  );
}
