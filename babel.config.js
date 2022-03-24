module.exports = {
  presets: [
    '@babel/typescript'
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
    '@babel/plugin-transform-modules-commonjs'
  ]
}
