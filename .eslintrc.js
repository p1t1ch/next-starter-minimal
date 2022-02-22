module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
    'next',
    'prettier',
  ],
  rules: {
    // Next.JS <Link /> component is used without href attribute on <a />
    'jsx-a11y/anchor-is-valid': 'off',
    'import/order': 'error',
  },
}
