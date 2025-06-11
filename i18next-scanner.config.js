module.exports = {
  input: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.test.{js,jsx,ts,tsx}',
    '!**/node_modules/**'
  ],
  output: './',
  options: {
    debug: true,
    func: {
      list: ['t', 'i18next.t', 'i18n.t'],
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    trans: {
      component: 'Trans',
      i18nKey: 'i18nKey',
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    lngs: ['en', 'ar'],
    ns: ['translation'],
    defaultLng: 'en',
    defaultNs: 'translation',
    defaultValue: '__STRING_NOT_TRANSLATED__',
    resource: {
      loadPath: 'src/locales/{{lng}}/{{ns}}.json',
      savePath: 'src/locales/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      lineEnding: '\n'
    }
  }
};