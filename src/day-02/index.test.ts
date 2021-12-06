import { partOne, partTwo } from '.'
import { loadInput } from '../utils'

const input = loadInput('.', 'testInput')

it('should return 150 for partOne', () => expect(partOne(input)).toBe(150))

it('should return 900 for partTwo', () => expect(partTwo(input)).toBe(900))
