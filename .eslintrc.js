// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    // eslint-disable-next-line no-undef
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    // eslint-disable-next-line no-undef
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/no-var-requires": 0, // 为了解决"Require statement not part of import statement"
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
