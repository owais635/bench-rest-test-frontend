import {
  getTransactionsApi,
  getTransactions,
  getTransactionTotal,
} from "../transactions";

const API = "https://resttest.bench.co/transactions";

const mockResponse = {
  totalCount: 12,
  page: 1,
  transactions: [
    {
      Date: "2013-12-22",
      Ledger: "Phone & Internet Expense",
      Amount: "-110.71",
      Company: "SHAW CABLESYSTEMS CALGARY AB",
    },
    {
      Date: "2013-12-21",
      Ledger: "Travel Expense, Nonlocal",
      Amount: "-8.1",
      Company: "BLACK TOP CABS VANCOUVER BC",
    },
    {
      Date: "2013-12-21",
      Ledger: "Business Meals & Entertainment Expense",
      Amount: "-9.88",
      Company: "GUILT & CO. VANCOUVER BC",
    },
  ],
};

describe("transactions", () => {
  beforeEach(() => {
    global.fetch = jest
      .fn()
      .mockResolvedValue({ json: () => Promise.resolve(mockResponse) });
  });

  afterEach(() => fetch.mockClear());

  describe("getTransactionsApi", () => {
    test("should use page 1 by default", async () => {
      await getTransactionsApi();
      expect(global.fetch).toBeCalledWith(`${API}/1.json`);
    });

    test("should use page number", async () => {
      await getTransactionsApi(5);
      expect(global.fetch).toBeCalledWith(`${API}/5.json`);
    });
  });

  describe("getTransactions", () => {
    test("should fetch multiple times to get all transactions", async () => {
      const allTransactions = await getTransactions();

      expect(global.fetch).toHaveBeenNthCalledWith(1, `${API}/1.json`);
      expect(global.fetch).toHaveBeenNthCalledWith(2, `${API}/2.json`);
      expect(global.fetch).toHaveBeenNthCalledWith(3, `${API}/3.json`);
      expect(global.fetch).toHaveBeenNthCalledWith(4, `${API}/4.json`);

      expect(allTransactions.length).toBe(12);
    });

    test("should reject promise when a fetch fails", () => {
      global.fetch = jest
        .fn()
        .mockResolvedValueOnce({ json: () => Promise.resolve(mockResponse) })
        .mockRejectedValueOnce({ error: "404 - Page 2 not found." });

      return expect(getTransactions()).rejects.toEqual({
        error: "404 - Page 2 not found.",
      });
    });
  });

  describe("getTransactionTotal", () => {
    test("should compute total for transactions", () => {
      const total = getTransactionTotal(mockResponse.transactions);
      expect(total).toBe(-128.69);
    });

    test("should compute total for empty transactions array", () => {
      const total = getTransactionTotal([]);
      expect(total).toBe(0);
    });
  });
});
