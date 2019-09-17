module.exports = {
    // Stop running tests after the first failure
    bail: true,

    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // An array of glob patterns indicating a set of files for which coverage information should be collected
    collectCoverageFrom: [
        'lambdas/property-api/**/*.js',
        '!**/node_modules/**',
    ],

    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',

    coveragePathIgnorePatterns: ['/node_modules/'],

    // A list of reporter names that Jest uses when writing coverage reports
    coverageReporters: [
        // "json",
        // "text",
        // "lcov",
        // "clover",
        'html',
        'text-summary',
    ],

    // Automatically restore mock state between every test
    restoreMocks: true,

    // The test environment that will be used for testing
    testEnvironment: 'node',

    // The glob patterns Jest uses to detect test files
    testMatch: ['**/__tests__/**/*.js'],

    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    testPathIgnorePatterns: ['/node_modules/'],

    moduleDirectories: ['node_modules', 'lambdas'],
};
