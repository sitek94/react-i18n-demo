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
 * - snake_case should be used for keys
 *   - for keys with numbers use snake_case as well: "column_1"
 * - use full words: "description" instead of "desc"
 */

import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'
import ICU from 'i18next-icu'

export function initI18n() {
  i18n
    // Use ICU format, which is a format that PO Editor understands
    .use(ICU)

    // Load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
    // Learn more: https://github.com/i18next/i18next-http-backend
    .use(HttpApi)

    // Detect user language
    // Learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)

    // Pass the i18n instance to react-i18next.
    .use(initReactI18next)

    // Init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
      debug: import.meta.env.DEV,
      fallbackLng: 'en',
      ns: ['translation', 'common'],
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
      backend: {
        // When using GH Pages the path is different, because the files are not served from the root.
        // That's why we need to specify the path explicitly here. For most of the projects, the default
        // options should be fine.
        loadPath: '/react-i18n-demo/locales/{{lng}}/{{ns}}.json',
      },
    })
}
