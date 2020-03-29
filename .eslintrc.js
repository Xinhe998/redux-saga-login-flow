const path = require('path');

module.exports = {
  parser: 'babel-eslint',
  plugins: ['babel'],
  globals: {
    document: false,
    localStorage: false,
    fetch: false,
    alert: false,
    window: false,
    React$Element: false,
    ReactClass: false,
    API_HOST: false,
    FormData: false,
    Image: false,
    S3_ZONE: false,
    S3_BUCKET: false,
    location: false,
  },
  extends: [
    'airbnb', 'react-app',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', path.join(__dirname,'src')],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json']
      }
    },
  },
};
