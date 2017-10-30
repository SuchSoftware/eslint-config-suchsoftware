module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "airbnb"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "array-bracket-spacing": ["off"],
    "arrow-parens": ["error", "as-needed"],
    "comma-dangle": ["error", "always-multiline"],
    "comma-style": ["error", "last"],
    "import/prefer-default-export": ["off"],
    indent: ["off"],
    "max-len": ["error", 80],
    "no-console": "error",
    "no-debugger": 2,
    "no-use-before-define": ["error", "nofunc"],
    "react/jsx-indent": ["off"],
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "react/jsx-wrap-multilines": ["off"],
    "react/no-unused-prop-types": ["error", { skipShapeProps: true }],
    semi: ["error", "never"],
    "template-curly-spacing": ["off"]
  }
};
