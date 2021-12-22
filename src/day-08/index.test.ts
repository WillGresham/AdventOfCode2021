import { partOne, partTwo } from '.'
import { loadInput } from '../utils'

const input = loadInput('.', 'testInput')

it('partOne should return 26', () => expect(partOne(input)).toBe(26))

it('partTwo should return 61229', () => expect(partTwo(input)).toBe(61229))
