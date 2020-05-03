module.exports = {
  presets: [
    ['@babel/preset-env', {
      useBuiltIns: 'usage',
      corejs: 3,
      loose: true
      // debug: true,
      // exclude: ['es6.regexp.to-string', 'es6.number.constructor'],
    }],
    "@babel/preset-typescript",
    "@babel/preset-react"
  ],

  plugins: ["@babel/plugin-proposal-class-properties"]
}