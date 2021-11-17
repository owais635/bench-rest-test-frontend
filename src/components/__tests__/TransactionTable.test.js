import React from "react";
import renderer from "react-test-renderer";
import TransactionTable from "../TransactionTable";

jest.mock("../../utils/dateFormatter", () => ({
  formatDate: jest.fn((str) => str),
}));

const mockTransactions = [
  {
    Date: "2013-12-13",
    Ledger: "Insurance Expense",
    Amount: "-117.81",
    Company: "LONDON DRUGS 78 POSTAL VANCOUVER BC",
  },
  {
    Date: "2013-12-13",
    Ledger: "Equipment Expense",
    Amount: "-520.85",
    Company: "ECHOSIGN xxxxxxxx6744 CA xx8.80 USD @ xx0878",
  },
  {
    Date: "2013-12-13",
    Ledger: "Equipment Expense",
    Amount: "58.17",
    Company: "APPLE STORE #R280 VANCOUVER BC",
  },
];

describe("TransactionTable", () => {
  test("should render with transactions and total", () => {
    const component = renderer.create(
      <TransactionTable total={-580.49} transactions={mockTransactions} />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
