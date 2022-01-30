- [tutorial](https://dev.to/adrai/how-to-properly-internationalize-a-react-application-using-i18next-3hdb)

- https://github.com/i18next/react-i18next/blob/master/example/react/src/App.js
- https://github.com/locize/react-i18next-example-app/tree/main/src
- https://www.i18next.com/overview/getting-started
- https://www.i18next.com/translation-function/plurals

- [Keys naming and organizing](https://lokalise.com/blog/translation-keys-naming-and-organizing)
- [l10n and i18n best practices](https://www.infragistics.com/community/blogs/b/devtoolsguy/posts/l10n-and-i18n-best-practices)

 
https://phrase.com/blog/posts/localizing-react-apps-with-i18next/#Basic_Translation_Messages

## i18next-scanner -> i18next-parser

The former doesn't support v4 JSON format, so we should migrate to the latter.

https://github.com/ph1p/i18next-scanner-webpack/issues/15

Long term solution would be to handle the translations using backend translations, as both projects mentioned above,
are not actively maintained.

https://www.i18next.com/how-to/extracting-translations#3-runtime-extraction
