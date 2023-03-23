export function shuffleArray(inputArray) {
  return inputArray
    .map(value => ({ value, position: Math.random() }))
    .sort((a, b) => a.position - b.position)
    .map(({ value }) => value)
}
