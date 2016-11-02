module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": [ "eslint:recommended", "plugin:react/recommended", "airbnb" ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "array-bracket-spacing": [ "error", "always" ],
        "arrow-parens": [ "error", "as-needed" ],
        "comma-dangle": [
            "error",
            "never"
        ],
        "comma-style": [
            "error",
            "first"
        ],
        "import/prefer-default-export": [ "off" ],
        "max-len": [ "error", 80 ],
        "no-debugger": 2,
        "no-use-before-define": [ "error", "nofunc" ],
        "react/jsx-curly-spacing": [ "error", "always" ],
        "react/jsx-filename-extension": [
          "error",
          { "extensions": [".js", ".jsx"] }
        ],
        "react/jsx-wrap-multilines": [ "off" ],
        "react/no-unused-prop-types": [
            "error",
            { "skipShapeProps": true }
        ],
        "semi": [
            "error",
            "never"
        ],
        "template-curly-spacing": [ "error", "always" ]
    }
};
