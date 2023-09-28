export function formatText(text) {
  const [first, second] = text.split(' ');
  return [first?.toLowerCase(), second]?.join('');
}
