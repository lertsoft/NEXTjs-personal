const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  // webpackFinal: async (config, { configType }) => {
  //   config.resolve.fallback = {
  //     ...config.resolve.fallback,
  //     fs: false, // <------
  //     path: false // <-----
  //   };
  //   return config;
  // },
}