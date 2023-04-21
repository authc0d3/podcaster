module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "standard",
    "eslint-config-prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
    "import/order": [
      "error",
      {
        pathGroups: [
          {
            pattern: "@/**",
            group: "external",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        "newlines-between": "never",
      },
    ],
    "react/jsx-handler-names": [
      "error",
      {
        eventHandlerPrefix: "(handle|on|set)",
        eventHandlerPropPrefix: "on",
        checkLocalVariables: true,
        checkInlineFunction: false,
      },
    ],
    "no-console": ["error", { allow: ["warn", "error"] }],
  },
};
