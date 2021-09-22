module.exports = {
    coverageDirectory: 'coverage',
    setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    testMatch: [
        '<rootDir>/test/**/*.spec.[jt]s?(x)'
    ]
};
