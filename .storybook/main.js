const { resolve } = require('path')

module.exports = {
  stories: ['./*.stories.@(tsx|mdx)', '../src/components/**/*.stories.@(tsx|mdx)'],
  addons: [
    'storybook-css-modules-preset',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  webpackFinal: async config => {
    // Add SVGR support
    const svgRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'))
    svgRule.exclude = /\.svg$/
    config.module.rules.push({
      test: /\.svg$/,
      use: {
        loader: '@svgr/webpack',
        options: {
          prettier: false,
          svgo: true,
          svgoConfig: { plugins: [{ removeViewBox: false }] },
          titleProp: true,
        },
      },
    })

    // Add aliases support
    config.resolve.alias = {
      '~icons': resolve(__dirname, '../src/assets/icons'),
      '~images': resolve(__dirname, '../src/assets/images'),
      '~styles': resolve(__dirname, '../src/assets/styles'),
      '~components': resolve(__dirname, '../src/components'),
      '~containers': resolve(__dirname, '../src/containers'),
      '~lib': resolve(__dirname, '../src/lib'),
      '~types': resolve(__dirname, '../src/types'),
    }

    return config
  },
  core: {
    builder: 'webpack5',
  },
}
