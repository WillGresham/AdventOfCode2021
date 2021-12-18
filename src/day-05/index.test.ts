import { partOne, partTwo } from '.'
import { loadInput } from '../utils'

const input = loadInput('.', 'testInput')

it('partOne should return 5', () => expect(partOne(input)).toBe(5))

it('partTwo should return 12', () => expect(partTwo(input)).toBe(12))
