export function calculateSum(...prices) {
  return prices.reduce((total, price) => total + price, 0);
}
