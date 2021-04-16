// https://github.com/thymikee/jest-preset-angular#brief-explanation-of-config
module.exports = {
  preset: 'jest-preset-angular',
  roots: ['src'],
  coverageDirectory: 'reports',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@core': ['<rootDir>/src/app/@core'],
    '@core/(.*)': ['<rootDir>/src/app/@core/$1'],
    '@shared': ['<rootDir>/src/app/@shared'],
    '@shared/(.*)': ['<rootDir>/src/app/@shared/$1'],
    '@modules': ['<rootDir>/src/app/@modules'],
    '@modules/(.*)': ['<rootDir>/src/app/@modules/$1'],
    '@layout': ['<rootDir>/src/app/@layout'],
    '@layout/(.*)': ['<rootDir>/src/app/@layout/$1'],
    '@translations': ['<rootDir>/src/translations'],
    '@translations/(.*)': ['<rootDir>/src/translations/$1'],
    '@env': '<rootDir>/src/environments/environment'
  },
  globals: {
    'ts-jest': {
      allowSyntheticDefaultImports: true,
      tsconfig: '<rootDir>/tsconfig.spec.json'
    },
  },
  // Do not ignore librairies such as ionic, ionic-native to transform them during unit testing.
  transformIgnorePatterns: ['node_modules/(?!(jest-test))']
};
