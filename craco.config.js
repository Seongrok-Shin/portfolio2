const path = require('path');

module.exports = {
  style: {
    css: {
      loaderOptions: {
        // These options will be passed to the css-loader
      }
    },
    sass: {
      loaderOptions: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, 'src', 'scss')],
          // any other options for sass-loader
        },
      },
    },
  },
};
