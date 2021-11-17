import React from "react";
import styled from "styled-components";
import { formatDate } from "../utils/dateFormatter";
import { formatCurrency } from "../utils/currencyFormatter";

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
    font-size: small;
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
            <th>{formatCurrency(total)}</th>
          </StyledHeader>
        </thead>

        <tbody>
          {transactions.map((el, i) => {
            const props = { isGain: el.Amount > 0 };

            // We do not want to show expenses as negative
            // Expenses are shown in normal text colour, while income is shown highlighted
            const amount = el.Amount > 0 ? el.Amount : -1 * el.Amount;

            // ideally key should be a unique id and not just index.
            // Since we're not moving rows around index is ok to use
            return (
              <StyledRow index={i} key={i}>
                <StyledData {...props}>{formatDate(el.Date)}</StyledData>
                <StyledData isMain {...props}>
                  {el.Company}
                </StyledData>
                <StyledData {...props}>{el.Ledger}</StyledData>
                <StyledData isMain {...props}>
                  {formatCurrency(amount)}
                </StyledData>
              </StyledRow>
            );
          })}
        </tbody>
      </StyledTable>
    </div>
  );
}
