const babelParser = require("@babel/eslint-parser");
const importPlugin = require("eslint-plugin-import");

module.exports = [
  {
    files: ["src/**/*.js"],
    languageOptions: {
      parser: babelParser,
      globals: {
        console: "readonly",
        require: "readonly"
      },
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },
    plugins: {
      import: importPlugin
    },
    rules: {
      "no-console": "warn",
      "no-debugger": "error",
      "no-dupe-args": "error",
      "no-dupe-keys": "error",
      "no-extra-semi": "error",
      "no-invalid-regexp": "error",
      "no-irregular-whitespace": "warn",
      "no-unreachable": "error",
      "valid-typeof": "error",
      "no-fallthrough": "error",
      "no-redeclare": "error",
      "comma-spacing": "error",
      "eol-last": "error",
      eqeqeq: ["error", "smart"],
      indent: ["error", 2, {SwitchCase: 1}],
      "keyword-spacing": "error",
      "max-len": ["warn", 160, 2],
      "no-mixed-spaces-and-tabs": "error",
      "no-multiple-empty-lines": ["error", {max: 2}],
      "no-trailing-spaces": "error",
      "object-curly-spacing": ["error", "never"],
      quotes: ["error", "double", {avoidEscape: true}],
      semi: "error",
      "space-before-blocks": ["error", "always"],
      "space-before-function-paren": ["error", "never"],
      "space-in-parens": ["error", "never"],
      "space-infix-ops": "error",
      "space-unary-ops": "error",
      "arrow-parens": ["error", "always"],
      "arrow-spacing": ["error", {before: true, after: true}],
      "no-confusing-arrow": "error",
      "prefer-const": "error",
      "no-undef": "error",
      "no-unused-vars": ["error", {args: "none"}],
      "import/no-unresolved": ["warn", {commonjs: true, amd: true}],
      "import/export": "error"
    }
  }
];
