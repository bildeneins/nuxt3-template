module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
        },
        postCssLoaderOptions: {
          implementation: require('postcss'),
        }
      },
    }
  ],
  core: {
    builder: 'storybook-builder-vite',
  }
}
