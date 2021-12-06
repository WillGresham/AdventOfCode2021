import { loadInput } from './utils'
;(async () => {
  const day = process.argv[2]?.padStart(2, '0')
  if (!day) throw new Error('Missing parameter, Usage: npm start <day>')
  const tasks = await import(`./day-${day}`)
  const input = loadInput(`./day-${day}`)
  tasks.partOne && console.log(`Part one: ${tasks.partOne(input)}`)
  tasks.partTwo && console.log(`Part two: ${tasks.partTwo(input)}`)
})()
