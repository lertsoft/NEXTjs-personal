module.exports = {
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'es'],
      localePath: path.resolve("./public/locales/"),
      // use: [initReactI18next],   // this line did not affect the error in any way
      debug: true,
    },
  }