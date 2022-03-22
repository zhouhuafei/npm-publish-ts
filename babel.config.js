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
          '@': './src'
        }
      }
    ],
    '@babel/plugin-transform-modules-commonjs'
  ]
}
