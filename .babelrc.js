module.exports = {
  plugins: [
    [
      '@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' },
    ],
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-partial-application',
  ],
};
