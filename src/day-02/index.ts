const parseInput = (input: string): { direction: string; distance: number }[] =>
  input.split('\n').map((entry) => {
    const [direction, distance] = entry.split(' ')
    return {
      direction,
      distance: Number(distance),
    }
  })

const movements = {
  up: { movement: 'depth', modifier: '-' },
  down: { movement: 'depth', modifier: '+' },
  forward: { movement: 'horizontal', modifier: '+' },
}

export const partOne = (input: string): number => {
  const position = { horizontal: 0, depth: 0 }
  parseInput(input).forEach(({ direction, distance }) => {
    position[movements[direction].movement] += Number(
      `${movements[direction].modifier}${distance}`,
    )
  })
  return position.horizontal * position.depth
}

export const partTwo = (input: string): number => {
  const position = { horizontal: 0, depth: 0 }
  let aim = 0
  parseInput(input).forEach(({ direction, distance }) => {
    if (direction === 'forward') {
      position.horizontal += distance
      position.depth += distance * aim
      return
    }
    aim += Number(`${movements[direction].modifier}${distance}`)
  })
  return position.horizontal * position.depth
}
