const Dotenv = require('dotenv-webpack');
const path = require('path');


module.exports = {
  mode: 'development',
  entry: ['./public/js/index.js', './public/js/src/option.js', './public/js/src/function.js', './public/js/src/map.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'node',
  plugins: [
    new Dotenv(),
  ],
};
