const parseInput = (input: string): string[] => input.split('\n')

export const partOne = (input: string): number => {
  const items = parseInput(input)
  const bits: boolean[] = new Array(items[0].length)
    .fill(null)
    .map(
      (_, index) =>
        items.filter((item) => item[index] === '1').length > items.length / 2,
    )

  const gamma = parseInt(bits.map((i) => Number(i)).join(''), 2)
  const epsilon = parseInt(bits.map((i) => 1 - Number(i)).join(''), 2)
  return gamma * epsilon
}
