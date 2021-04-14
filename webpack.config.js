const Dotenv = require('dotenv-webpack');
const path = require('path');


module.exports = {
  mode: 'development',
  entry: './dist/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'node',
  plugins: [
    new Dotenv(),
  ],
};
