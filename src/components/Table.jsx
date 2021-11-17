import React from "react";
import styled from "styled-components";

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

const StyledData = styled.td`
  ${(props) => (props.isMain ? " font-weight: bold;" : "")}

  color: ${({ isMain, isGain, theme }) => {
    if (isGain) return theme.primary;
    return isMain ? theme.mainText : theme.secondaryText;
  }};
`;

export default function Table({ className, total, transactions }) {
  return (
    <div className={className}>
      <StyledTable>
        <thead>
          <StyledHeader>
            <th>Date</th>
            <th>Company</th>
            <th>Account</th>
            <th>{`$${total.toFixed(2)}`}</th>
          </StyledHeader>
        </thead>

        <tbody>
          {transactions.map((el, i) => {
            const props = { isGain: el.Amount > 0 };

            // ideally key should be a unique id and not just index.
            // Since we're not moving rows around index is ok to use
            return (
              <StyledRow index={i} key={i}>
                <StyledData {...props}>{el.Date}</StyledData>
                <StyledData isMain {...props}>
                  {el.Company}
                </StyledData>
                <StyledData {...props}>{el.Ledger}</StyledData>
                <StyledData isMain {...props}>
                  {el.Amount}
                </StyledData>
              </StyledRow>
            );
          })}
        </tbody>
      </StyledTable>
    </div>
  );
}
