import { partOne } from '.'
import { loadInput } from '../utils'

const input = loadInput('.', 'testInput')

it('should return 150 for partOne', () => expect(partOne(input)).toBe(198))
