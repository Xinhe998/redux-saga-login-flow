const path = require('path');
const {
  override,
  useBabelRc,
  addWebpackAlias,
  addLessLoader,
} = require('customize-cra');
const theme = require('./src/theme/antd-theme');

module.exports = override(
  useBabelRc(),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      ...theme,
    },
  }),
);
