module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/*.spec.ts'],
  moduleNameMapper: {
    '^@core/(.*)$': '<rootDir>/src/app/core/$1',
    '^@models/(.*)$': '<rootDir>/src/app/core/models/$1',
    '^@services/(.*)$': '<rootDir>/src/app/core/services/$1',
    '^@utils/(.*)$': '<rootDir>/src/app/core/utils/$1',
    '^@dashboard/(.*)$': '<rootDir>/src/app/features/dashboard/$1',
  },
};
