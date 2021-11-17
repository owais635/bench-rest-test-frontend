
/**
 * 
 * @param {!number} number to format
 * @returns number formatted in CAD currency format.
 */
export function formatCurrency(number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "CAD",
    currencyDisplay: "narrowSymbol",
  }).format(number);
}
