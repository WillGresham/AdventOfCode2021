import { partOne, partTwo } from '.'
import { loadInput } from '../utils'

const input = loadInput('.', 'testInput')

it('partOne should return 5934', () => expect(partOne(input)).toBe(5934))

it('partTwo should return 26984457539', () =>
  expect(partTwo(input)).toBe(26984457539))
