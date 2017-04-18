'use strict';

/*************************************************************
 * Variables
 ************************************************************/
// Local
var themeDir = process.cwd() + '/';
var distFolder = 'assets';  // Output folder in theme
// Global
global.paths = {
  relative: './',
  themeDir: themeDir,
  js: [
    themeDir + 'components/_patterns/**/*.js',
  ],
  sass: themeDir,
  img: themeDir + '/images',
  dist_folder: themeDir + distFolder,
  dist_js: themeDir + distFolder + '/js',
  dist_css: themeDir + distFolder + '/css',
  dist_img: themeDir + distFolder + '/img',
  dist_svg: themeDir + distFolder + '/svg'
};
