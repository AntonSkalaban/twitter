module.exports = {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "^api$": "<rootDir>/src/api/index.ts",
    "^constants$": "<rootDir>/src/constants/index.ts",
    "^.+\\.(jpg|jpeg|png|gif|webp|svg|css)$": "jest-transform-stub",
  },
  testEnvironment: "jsdom",
  // testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!(@aws-amplify/ui-react))/"],
};
