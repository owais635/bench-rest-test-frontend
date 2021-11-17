import { formatDate } from "../dateFormatter";

describe("dateFormatter", () => {
  test("should format", () => {
    expect(formatDate("2013-12-1")).toBe("Dec 1st, 2013");
  });
});
