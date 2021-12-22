const parseInput = (input: string): number[][] =>
  input
    .trim()
    .split('\n')
    .map((line) => line.split('').map((item) => +item))

const lowerThanNeighbours = (num: number, ...neighbours: number[]): boolean => {
  return neighbours.every((value) => value === undefined || value > num)
}

export const partOne = (input: string): number => {
  let lows = 0
  const values = parseInput(input)
  values.forEach((line, lineIndex) =>
    line.forEach((num, numberIndex) => {
      if (
        lowerThanNeighbours(
          num,
          values[lineIndex][numberIndex - 1],
          values[lineIndex][numberIndex + 1],
          values[lineIndex - 1]?.[numberIndex],
          values[lineIndex + 1]?.[numberIndex],
        )
      ) {
        lows += num + 1
      }
    }),
  )
  return lows
}
