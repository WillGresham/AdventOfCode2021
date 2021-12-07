import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  coverageProvider: 'v8',
  testEnvironment: 'node',
  rootDir: 'src',
}

export default config
