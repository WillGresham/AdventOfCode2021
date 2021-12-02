import { partOne, partTwo } from '.'

const input = 'forward 5\ndown 5\nforward 8\nup 3\ndown 8\nforward 2'

it('should return 150 for partOne', () => expect(partOne(input)).toBe(150))

it('should return 900 for partTwo', () => expect(partTwo(input)).toBe(900))
