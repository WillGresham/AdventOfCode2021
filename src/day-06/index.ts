const parseInput = (input: string): number[] => {
  const fish = Array(9).fill(0)
  input
    .trim()
    .split(',')
    .forEach((value) => fish[+value]++)
  return fish
}

const breed = (fishies: number[], days: number): number => {
  for (let i = 0; i < days; i++) {
    fishies.push(fishies.shift())
    fishies[6] += fishies[8]
  }
  return fishies.reduce((acc, cur) => acc + cur, 0)
}

export const partOne = (input: string): number => breed(parseInput(input), 80)

export const partTwo = (input: string): number => breed(parseInput(input), 256)
