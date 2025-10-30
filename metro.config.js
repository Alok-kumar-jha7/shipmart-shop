// Import the Expo superclass which has support for PostCSS.
const { getDefaultConfig } = require('@expo/metro-config');
const { FileStore } = require('@expo/metro-config/file-store');
const { withNativeWind } = require('nativewind/metro-config');

const config = getDefaultConfig(__dirname);
config.cacheStores = [
  new FileStore({
    root: '/path/to/custom/cache',
  }),
];

module.exports = withNativeWind(config,{input:"./app/global.css"});
