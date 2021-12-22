const parseInput = (input: string): { pattern: string[]; output: string[] }[] =>
  input
    .trim()
    .split('\n')
    .map((line) => {
      const [pattern, output] = line.split(' | ')
      return { pattern: pattern.split(' '), output: output.split(' ') }
    })

export const partOne = (input: string): number =>
  parseInput(input).reduce(
    (acc, cur) =>
      acc +
      cur.output.filter((output) => [2, 3, 4, 7].indexOf(output.length) > -1)
        .length,
    0,
  )

export const partTwo = (input: string): number =>
  parseInput(input)
    .map((line) => {
      const numbers: string[] = Array(10).fill(null)
      numbers[1] = line.pattern.find((pattern) => pattern.length === 2)
      numbers[4] = line.pattern.find((pattern) => pattern.length === 4)
      numbers[7] = line.pattern.find((pattern) => pattern.length === 3)
      numbers[8] = line.pattern.find((pattern) => pattern.length === 7)
      numbers[9] = line.pattern.find(
        (pattern) =>
          pattern.length === 6 &&
          pattern.match(new RegExp(`[${numbers[4]}]`, 'g'))?.length === 4,
      )
      numbers[0] = line.pattern.find(
        (pattern) =>
          pattern.length === 6 &&
          pattern !== numbers[9] &&
          pattern.match(new RegExp(`[${numbers[1]}]`, 'g'))?.length === 2,
      )
      numbers[6] = line.pattern.find(
        (pattern) =>
          pattern.length === 6 &&
          [numbers[0], numbers[9]].indexOf(pattern) === -1,
      )
      numbers[3] = line.pattern.find(
        (pattern) =>
          pattern.length === 5 &&
          pattern.match(new RegExp(`[${numbers[9]}]`, 'g'))?.length === 5 &&
          pattern.match(new RegExp(`[${numbers[1]}]`, 'g'))?.length === 2,
      )
      numbers[5] = line.pattern.find(
        (pattern) =>
          pattern.length === 5 &&
          pattern.match(new RegExp(`[${numbers[6]}]`, 'g'))?.length === 5,
      )
      numbers[2] = line.pattern.find(
        (pattern) =>
          pattern.length === 5 &&
          [numbers[3], numbers[5]].indexOf(pattern) === -1 &&
          pattern.match(new RegExp(`[${numbers[8]}]`, 'g'))?.length === 5,
      )
      return Number(
        line.output
          .map((output) =>
            numbers.findIndex(
              (item) =>
                item.length === output.length &&
                item.match(new RegExp(`[${output}]`, 'g'))?.length ===
                  output.length,
            ),
          )
          .join(''),
      )
    })
    .reduce((acc, cur) => acc + cur, 0)
