import { partOne, partTwo } from './index'

const inputData = '199\n200\n208\n210\n200\n207\n240\n269\n260\n263'
it('partOne should return 7', () => expect(partOne(inputData)).toEqual(7))

it('partTwo should return 5', () => expect(partTwo(inputData)).toEqual(5))
