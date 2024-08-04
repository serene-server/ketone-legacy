/** @type {import("eslint").Linter.Config} */
module.exports = {
  ignorePatterns: ["node_modules", "dist", "build", "*.config.ts"],
  extends: ["@repo/eslint-config/react.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
