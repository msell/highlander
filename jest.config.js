module.exports = {
    collectCoverageFrom: ['**/*.js'],
    resetMocks: true,
    verbose: true,
    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname'
      ],    
  }