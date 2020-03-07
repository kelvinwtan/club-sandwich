// next.config.js
const path = require('path');
const withImages = require('next-images');
const withStyles = require('@zeit/next-sass');

module.exports = withImages(
  withStyles({
    /* config options here */
    esModule: true,
    webpack(config, options) {
      config.resolve.alias['@'] = path.join(__dirname, 'src');
      return config;
    }
  })
);
