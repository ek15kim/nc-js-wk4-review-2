/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: ".",
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ["<rootDir>/../", "node_modules"]
};