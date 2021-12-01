import getInput from '../get-input'

const parseInput = (input: string) => input.split('\n').map((number) => +number)

const countIncreases = (depths: number[]) =>
  depths.filter((depth, index) => index > 0 && depth > depths[index - 1]).length

export const partOne = (input: string): number =>
  countIncreases(parseInput(input))

export const partTwo = (input: string): number => {
  const depths = parseInput(input)
  return countIncreases(
    new Array(depths.length - 2)
      .fill(0)
      .map((_, i) =>
        [depths[i], depths[i + 1], depths[i + 2]].reduce(
          (acc, cur) => acc + cur,
          0,
        ),
      ),
  )
}

console.log(`Part 1: ${partOne(getInput())}`)
console.log(`Part 2: ${partTwo(getInput())}`)
