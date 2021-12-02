import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'

const day = process.argv[2]?.padStart(2, '0')

const loadInput = (dir: string): string => {
  return readFileSync(
    resolve(dirname(require.main.filename), dir, 'input.txt'),
    'utf8',
  ).trim()
}

if (!day) throw new Error('Missing parameter, Usage: npm start <day>')

const load = async () => {
  const tasks = await import(`./day-${day}`)
  const input = loadInput(`./day-${day}`)
  tasks.partOne && console.log(`Part one: ${tasks.partOne(input)}`)
  tasks.partTwo && console.log(`Part two: ${tasks.partTwo(input)}`)
}

load()
