import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'

export const loadInput = (dir: string, file = 'input'): string => {
  return readFileSync(
    resolve(dirname(require.main.filename), dir, `${file}.txt`),
    'utf8',
  ).trim()
}
