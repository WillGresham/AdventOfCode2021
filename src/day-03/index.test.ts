import { partOne, partTwo } from '.'
import { loadInput } from '../utils'

const input = loadInput('.', 'testInput')

it('should return 150 for partOne', () => expect(partOne(input)).toBe(198))

it('should return 230 for partTwo', () => expect(partTwo(input)).toBe(230))
