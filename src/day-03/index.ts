const parseInput = (input: string): string[] => input.split('\n')

const mostCommonBit = (items: string[], index: number): number =>
  items.filter((item) => item[index] === '1').length >= items.length / 2 ? 1 : 0

export const partOne = (input: string): number => {
  const items = parseInput(input)
  const bits: number[] = items[0]
    .split('')
    .map((_, index) => mostCommonBit(items, index))

  const gamma = parseInt(bits.join(''), 2)
  const epsilon = parseInt(bits.map((i) => 1 - i).join(''), 2)
  return gamma * epsilon
}

export const partTwo = (input: string): number => {
  const items = parseInput(input)
  let oxygenItems = [...items]
  let co2Items = [...items]

  items[0].split('').forEach((_, index) => {
    if (oxygenItems.length > 1) {
      oxygenItems = oxygenItems.filter(
        (item) => item[index] === mostCommonBit(oxygenItems, index).toString(),
      )
    }

    if (co2Items.length > 1) {
      co2Items = co2Items.filter(
        (item) =>
          item[index] === (mostCommonBit(co2Items, index) ? 0 : 1).toString(),
      )
    }
  })

  const oxygen = parseInt(oxygenItems.join(''), 2)
  const co2 = parseInt(co2Items.join(''), 2)
  return oxygen * co2
}
