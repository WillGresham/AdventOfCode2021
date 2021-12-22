import { partOne, partTwo } from '.'
import { loadInput } from '../utils'

const input = loadInput('.', 'testInput')

it('partOne should return 37', () => expect(partOne(input)).toBe(37))

it('partTwo should return 168', () => expect(partTwo(input)).toBe(168))
