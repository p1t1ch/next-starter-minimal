module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'next',
    'prettier',
  ],
  rules: {
    // Next.JS <Link /> component is used without href attribute on <a />
    'jsx-a11y/anchor-is-valid': 'off',
    'import/order': 'error',
  },
}
