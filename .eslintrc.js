import provide from './build/config/provide'

module.exports = {
    "root": true,

    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module",
        "allowImportExportEverywhere": false,
        "ecmaFeatures": {
            "globalReturn": true,
            "impliedStrict": true,
            "jsx": true,
            "experimentalObjectRestSpread": true
        }
    },

    "parser": "babel-eslint",

    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "commonjs": true
    },

    "globals": Object.assign({
        "pageConfig": true,
        "__DEV__": true,
        "__PROD": true
    }, provide),

    "extends": "vue",
    "plugins": ["vue"],

    // add your custom rules
    "rules": {
        "indent": [2, 4, { "SwitchCase": 1 }],
        "camelCase": [2, { "properties": "never" }],
        "prefer-const": 0,
        "eqeqeq": 0,
    }
}