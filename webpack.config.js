const Dotenv = require('dotenv-webpack');
const path = require('path');


module.exports = {
  mode: 'development',
  entry: ['./js/index.js', './js/src/function.js', './js/src/map.js', './js/src/option.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'node',
  plugins: [
    new Dotenv(),
  ],
};
