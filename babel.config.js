module.exports = {
  targets: { node: 'current' },
  presets: [
    '@babel/preset-env'
  ],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./'],
        alias: {
          '@root': './',
          '@src': './src',
          '@': './src'
        }
      }
    ],
    '@babel/plugin-transform-typescript',
    '@babel/plugin-transform-modules-commonjs'
  ]
}
