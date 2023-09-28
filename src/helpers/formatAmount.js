export function formatAmount(amount) {
  return new Intl.NumberFormat().format(amount);
}
