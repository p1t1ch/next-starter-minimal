module.exports = {
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/*.d.ts'],
  moduleNameMapper: {
    '^.+\\.module\\.css$': 'identity-obj-proxy',
    '^.+\\.css$': '<rootDir>/__mocks__/styleMock.js',
    '^.+\\.(jpg|jpeg|png|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '@test-utils': ['<rootDir>/test/test-utils.tsx'],
    '~icons/(.*)': ['<rootDir>/src/assets/icons/$1'],
    '~images/(.*)': ['<rootDir>/src/assets/images/$1'],
    '~styles/(.*)': ['<rootDir>/src/assets/styles/$1'],
    '~components/(.*)': ['<rootDir>/src/components/$1'],
    '~containers/(.*)': ['<rootDir>/src/containers/$1'],
    '~lib/(.*)': ['<rootDir>/src/lib/$1'],
    '~types/(.*)': ['<rootDir>/src/types/$1'],
  },
  testPathIgnorePatterns: ['node_modules', '.next'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.css$'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  setupFilesAfterEnv: ['<rootDir>/test/jest-setup.ts'],
}
