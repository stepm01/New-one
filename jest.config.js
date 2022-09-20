module.exports = {
  modulePaths: ['<rootDir>'],
  rootDir: '__tests__',
  moduleNameMapper: {
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
  },

  // coverageThreshold: {
  //   global: {
  //     statements: 80,
  //     branches: 80,
  //     functions: 80,
  //     lines: 80,
  //   },
  // },

  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx}',
    '!<rootDir>/src/**/constants/*.js',
    '!<rootDir>/src/**/{consts,constants}.js',
  ],

  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'App Tests',
        outputDirectory: '.',
        outputName: './test-coverage/junit.xml',
        classNameTemplate: '{classname}-{title}',
        titleTemplate: '{classname}-{title}',
        ancestorSeparator: ' › ',
        usePathForSuiteName: 'true',
      },
    ],
  ],

  projects: [
    {
      displayName: 'dom',
      testEnvironment: 'jest-environment-jsdom',
      testMatch: ['<rootDir>/__tests__/**/*.test.jsx'],
      setupFilesAfterEnv: ['<rootDir>/test/dom.setup.js'],
      transform: {
        '^.+\\.js(x?)$': ['@swc/jest'],
      },
    },
    {
      displayName: 'node',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/__tests__/**/*.test.js'],
      setupFilesAfterEnv: ['<rootDir>/test/node.setup.js'],
      transform: {
        '^.+\\.js(x?)$': ['@swc/jest'],
      },
    },
  ],
}
