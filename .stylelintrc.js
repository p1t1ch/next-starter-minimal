module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'value-keyword-case': ['lower', { ignoreKeywords: ['currentColor'] }],
  },
}
