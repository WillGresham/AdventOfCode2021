const parseInput = (input: string): number[] =>
  input
    .trim()
    .split(',')
    .map((value) => +value)
    .sort((a, b) => a - b)

export const partOne = (input: string): number => {
  const positions = parseInput(input)
  const median = positions[Math.round(positions.length / 2)]
  return positions
    .map((position) => Math.abs(position - median))
    .reduce((acc, cur) => acc + cur, 0)
}

export const partTwo = (input: string): number => {
  const positions = parseInput(input)
  const mean = Math.ceil(
    positions.reduce((acc, cur) => acc + cur, 0) / positions.length,
  )

  return Math.min(
    ...[mean, mean - 1].map((meanValue) =>
      positions
        .map((position) => Math.abs(position - meanValue))
        .reduce((acc, cur) => acc + (cur * (cur + 1)) / 2, 0),
    ),
  )
}
