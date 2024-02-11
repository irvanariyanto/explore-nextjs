import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  modulePaths: ["<rootDir>/src"],
  coverageProvider: "v8",
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!**/*.type.ts",
    "!<rootDir>/.next/**",
    "!<rootDir>/*.config.{ts,js}",
    "!<rootDir>/src/app/api/**",
    "!<rootDir>/src/middlewares/**",
    "!<rootDir>/src/middleware.ts",
  ],
  testEnvironment: "jest-environment-jsdom",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
