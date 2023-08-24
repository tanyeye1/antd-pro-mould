module.exports = {
  extends: [require.resolve('@umijs/lint/dist/config/eslint')],
  globals: {
    page: true,
    REACT_APP_ENV: true,
  },
  // extends: [require.resolve("@alipay/bigfish/softyEslint")] ,
  rules: {
    // 你的自定义规则
    'no-nested-ternary': 0,
    // 'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'react-hooks/rules-of-hooks': 0,
    'react/jsx-key': 0,
    '@typescript-eslint/no-unused-expressions': 0,
  },
};
