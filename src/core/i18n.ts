/**
 * @fileoverview i18n initialization
 *
 * The translations can be found in the `public/locales` folder.
 *
 * ⚠️ If you're a Polish speaker, you may notice, that I'm not doing a really
 * good job with the translations and some texts are actually completely different
 * to the ones in English. I don't really care, because it's just a demo, but you
 * probably shouldn't do it in production
 *
 * 🚓 Keys Naming Convention
 *
 * - camelCase should be used for keys, so that they are distinguishable from plurals
 *   - e.g. "helloWorld", "column1", "column2"
 * - use full words: "description" instead of "desc"
 */

import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'

import { stringFormatters } from '../utils/string-formatters'

export async function initI18n() {
  await i18n
    // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
    // learn more: https://github.com/i18next/i18next-http-backend
    // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
    .use(HttpApi)

    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector

    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)

    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
      // debug: import.meta.env.DEV,
      supportedLngs: ['en', 'es', 'pl'],
      fallbackLng: 'en',
      ns: ['translation', 'common'],
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
      backend: {
        // When using GH Pages the path is different, because the files are not served from the root.
        // That's why we need to specify the path here.
        loadPath: '/react-i18n-demo/locales/{{lng}}/{{ns}}.json',
      },
    })

  for (const [name, fn] of Object.entries(stringFormatters)) {
    i18next.services.formatter?.add(name, fn)
  }
}
