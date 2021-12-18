type ParsedInput = { x1: number; y1: number; x2: number; y2: number }
const parseInput = (input: string): ParsedInput[] =>
  input
    .trim()
    .split('\n')
    .map((line) => {
      const [x1, y1, x2, y2] = line.split(/ -> |,/).map((value) => +value)
      return { x1, y1, x2, y2 }
    })

const direction = (delta: number): number =>
  delta > 0 ? 1 : delta < 0 ? -1 : 0

const countOverlaps = (
  coordinates: ParsedInput[],
  diagonals = false,
): number[] => {
  const grid: Record<string, number> = {}
  coordinates.forEach(({ x1, x2, y1, y2 }) => {
    const xDelta = x2 - x1
    const yDelta = y2 - y1
    if (!diagonals && xDelta !== 0 && yDelta !== 0) {
      return
    }
    const xDirection = direction(xDelta)
    const yDirection = direction(yDelta)
    new Array(Math.abs(xDelta === 0 ? yDelta : xDelta) + 1)
      .fill(0)
      .forEach((_, index) => {
        grid[`${y1 + yDirection * index}-${x1 + xDirection * index}`] =
          (grid[`${y1 + yDirection * index}-${x1 + xDirection * index}`] || 0) +
          1
      })
  })
  return Object.values(grid)
}

export const partOne = (input: string): number =>
  countOverlaps(parseInput(input)).filter((i) => i > 1).length

export const partTwo = (input: string): number =>
  countOverlaps(parseInput(input), true).filter((i) => i > 1).length
