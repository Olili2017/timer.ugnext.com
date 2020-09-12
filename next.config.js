const withImages = require('next-images');
const withFonts = require('next-fonts');

module.exports = withFonts(withImages({
  // eslint-disable-next-line no-unused-vars
  webpack(config, options) {
    return config;
  },
}));
