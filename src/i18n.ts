import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

export function initI18n() {
  i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)

    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options

    // 🤔 init is returning a promise. Maybe at some point it will be useful to
    // await the promise to make sure the i18n instance is ready.
    .init({
      debug: true,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
      resources: {
        en: {
          translation: {
            description: {
              part1: 'i18n is initialized in <1>src/i18n.ts</1> file.',
              part2: 'Visit i18next documentation to learn more',
            },
          },
        },
        pl: {
          translation: {
            description: {
              part1: 'i18n znajdziemy w pliku <1>src/i18n.ts</1>.',
              part2: 'Obczaj sobie mordko dokumentację i18next',
            },
          },
        },
      },
    })
}
