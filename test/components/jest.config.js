module.exports = {
  displayName: 'components',
  setupTestFrameworkScriptFile: '<rootDir>/setup.js',
  testMatch: ['<rootDir>/**/*-test.js'],
  moduleNameMapper: {
    'css$': '<rootDir>/css-mock.js'
  }
}
