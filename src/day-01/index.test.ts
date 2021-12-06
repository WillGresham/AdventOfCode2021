import { partOne, partTwo } from './index'
import { loadInput } from '../utils'

const inputData = loadInput('.', 'testInput')

it('partOne should return 7', () => expect(partOne(inputData)).toEqual(7))

it('partTwo should return 5', () => expect(partTwo(inputData)).toEqual(5))
