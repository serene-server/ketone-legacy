const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

/** @type {import('jest').Config} */
const config = {
  preset: "@repo/jest-presets/browser",

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // The test environment that will be used for testing
  testEnvironment: "jsdom",
};

module.exports = createJestConfig(config);
