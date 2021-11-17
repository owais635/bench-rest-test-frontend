// Should use .env file, for diff env (staging, prod, etc.)
// This is a simple project thus we are hard coding it here.
const API = "https://resttest.bench.co/transactions";

export function getTransactionsApi(pageNumber = 1) {
  return fetch(`${API}/${pageNumber}.json`).then((res) => res.json());
}

export async function getTransactions() {
  let pageNumber = 1;
  let response;

  try {
    response = await getTransactionsApi(pageNumber);
  } catch (err) {
    throw err;
  }

  let { totalCount, transactions } = response;

  let count = transactions.length;
  let allTransactions = [...transactions];

  // get the remaining pages of transactions
  while (count < totalCount) {
    pageNumber += 1;

    try {
      let { transactions } = await getTransactionsApi(pageNumber);
      count += transactions.length;
      allTransactions = [...allTransactions, ...transactions];
    } catch (err) {
      throw err;
    }
  }

  // calculate the total of all transactions
  const total = allTransactions.reduce(
    (acc, curr) => acc + parseFloat(curr.Amount),
    0
  );

  return [allTransactions, total];
}
