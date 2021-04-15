const Dotenv = require('dotenv-webpack');
const path = require('path');


module.exports = {
  mode: 'development',
  entry: ['./dist/js/index.js', './dist/js/function.js', './dist/js/map.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'node',
  plugins: [
    new Dotenv({
      systemvars: true,
    }),
  ],
};
