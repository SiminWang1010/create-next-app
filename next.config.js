const withLess = require('@zeit/next-less');
const withCss = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const cssLoaderGetLocalIdent = require('css-loader/lib/getLocalIdent.js');

module.exports = withPlugins([withCss, withLess], {
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: '[local]___[hash:base64:5]',
    getLocalIdent: (context, localIdentName, localName, options) => {
      const hz = context.resourcePath.replace(context.rootContext, '');
      if (/node_modules/.test(hz)) {
        return localName;
      }
      return cssLoaderGetLocalIdent(
        context,
        localIdentName,
        localName,
        options
      );
    },
  },
});
