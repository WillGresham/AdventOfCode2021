type Board = string[][]
const parseInput = (input: string): { numbers: string[]; boards: Board[] } => {
  const [numbers, ...boards] = input.split('\n\n')
  return {
    numbers: numbers.trim().split(','),
    boards: boards.map((board) =>
      board.split('\n').map((line) => line.trim().split(/\s+/)),
    ),
  }
}

const scoreBoard = (numbers: string[], board: Board): number | null => {
  const lineResult = board
    .map((line) => line.map((value) => numbers.indexOf(value)))
    .filter((line) => !line.includes(-1))
    .map((line) => Math.max(...line))
  const columnResult = new Array(board[0].length)
    .fill(null)
    .map((_, index) =>
      board.map((line) => line[index]).map((value) => numbers.indexOf(value)),
    )
    .filter((line) => !line.includes(-1))
    .map((line) => Math.max(...line))
  return Math.min(...lineResult, ...columnResult)
}

const calculateScore = (
  winningMethod: (...values: number[]) => number,
  input: string,
): number => {
  const { boards, numbers } = parseInput(input)
  const results = boards.map((board) => scoreBoard(numbers, board))
  const winningIndex = winningMethod(...results)
  return (
    boards[results.indexOf(winningIndex)].reduce(
      (lineAcc, line) =>
        lineAcc +
        line.reduce(
          (acc, cur) => (acc += numbers.indexOf(cur) > winningIndex ? +cur : 0),
          0,
        ),
      0,
    ) * +numbers[winningIndex]
  )
}

export const partOne = (input: string): number =>
  calculateScore(Math.min, input)

export const partTwo = (input: string): number =>
  calculateScore(Math.max, input)
