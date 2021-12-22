import { partOne } from '.'
import { loadInput } from '../utils'

const input = loadInput('.', 'testInput')

it('partOne should return 15', () => expect(partOne(input)).toBe(15))
