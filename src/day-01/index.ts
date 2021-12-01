import getInput from '../get-input'

const parseInput = (input: string) => input.split('\n').map((number) => +number)

export const partOne = (input: string): number => {
  const results = parseInput(input)
  return results.filter((depth, index) => {
    if (index === 0 || depth < results[index - 1]) return
    return true
  }).length
}

console.log(`Part 1: ${partOne(getInput())}`)
