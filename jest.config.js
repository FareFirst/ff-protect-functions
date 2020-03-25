module.exports = {
  verbose: true,
  testPathIgnorePatterns: [
    '/node_modules/',
    '/coverage/',
    '/.circleci/',
    '/build/',
  ],
  testRegex: '/src/.*(/__tests__/.*|(\\.|/)(test|spec))\\.(j|t)sx?$',
  resetMocks: true,
  testEnvironment: 'node',
};
