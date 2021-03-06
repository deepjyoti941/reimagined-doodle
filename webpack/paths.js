/**
 * Provides path of sources to compile resources and path of destination to keep compiled resources.
 */
const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../', 'build'),
  entryPath: path.resolve(__dirname, '../', 'src/bootstrap.js'),
  templatePath: path.resolve(__dirname, '../', 'src/index.html'),
  configSourceFolder: path.resolve(__dirname, '../', 'src/static/'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  configDestinationFolder: 'static',
  cssFolder: 'css',
  jsFolder: 'js'
};
