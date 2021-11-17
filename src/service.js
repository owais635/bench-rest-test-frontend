// Should use .env file, for diff environments (staging, prod, etc.)
// This is a simple project, thus we are hard coding the API here.
const API = "https://resttest.bench.co/transactions";

/**
 * Makes a GET request to API.
 * @param {number} pageNumber the page to use when making the request.
 * @returns {object} JSON object with totalCount and transactions.
 */
export function getTransactionsApi(pageNumber = 1) {
  return fetch(`${API}/${pageNumber}.json`).then((res) => res.json());
}

/**
 * Fetches all of the transactions.
 * @returns {array} an array containing all of the transactions.
 */
export async function getTransactions() {
  let pageNumber = 1;

  let { totalCount, transactions } = await getTransactionsApi(pageNumber);

  let count = transactions.length;
  let allTransactions = [...transactions];

  // get the remaining transactions from other pages
  while (count < totalCount) {
    pageNumber += 1;

    let { transactions } = await getTransactionsApi(pageNumber);
    count += transactions.length;
    allTransactions = [...allTransactions, ...transactions];
  }

  return allTransactions;
}

/**
 * Calculates the total of all transactions
 * @param {array} transactions the transactions that the total needs to be computed for.
 * @returns {number} the total of the transactions.
 */
export function getTransactionTotal(transactions) {
  return transactions.reduce((acc, curr) => acc + parseFloat(curr.Amount), 0);
}
