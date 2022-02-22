module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'property-no-unknown': [true, { ignoreProperties: [/composes/] }],
    'value-no-vendor-prefix': [true, { ignoreValues: ['box'] }],
  },
}
