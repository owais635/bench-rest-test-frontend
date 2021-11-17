import { formatCurrency } from "../currencyFormatter";

describe("currencyFormatter", () => {
  test("should format", () => {
    expect(formatCurrency(123.99)).toBe("$123.99");
  });

  test("should format with separator", () => {
    expect(formatCurrency(1234567.89)).toBe("$1,234,567.89");
  });
});
