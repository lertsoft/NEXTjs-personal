// webpackFinal: async (config, { configType }) => {
//     config.resolve.fallback = {
//       ...config.resolve.fallback,
//       fs: false, // <------
//       path: false // <-----
//     };
//     return config;
//   };

// webpackFinal: async (config, {configType}) => {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       'next-i18next': 'react-i18next'
//     }
//     return config