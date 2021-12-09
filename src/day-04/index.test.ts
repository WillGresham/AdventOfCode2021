import { partOne, partTwo } from '.'
import { loadInput } from '../utils'

const input = loadInput('.', 'testInput')

it('partOne should return 0', () => expect(partOne(input)).toBe(4512))

it('partTwo should return 0', () => expect(partTwo(input)).toBe(1924))
