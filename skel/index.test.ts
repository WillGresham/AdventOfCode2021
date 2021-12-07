import { partOne, partTwo } from '.'
import { loadInput } from '../utils'

const input = loadInput('.', 'testInput')

expect('partOne should return 0', partOne(input)).toBe(0)

expect('partTwo should return 0', partTwo(input)).toBe(0)
