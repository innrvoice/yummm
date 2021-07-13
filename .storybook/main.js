const path = require('path');
const tsConfigPath = path.join(process.cwd(), 'tsconfig.storybook.json');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-controls'],
  typescript: {
    check: true,
    checkOptions: {
      tsconfig: tsConfigPath,
    },
  },
};
