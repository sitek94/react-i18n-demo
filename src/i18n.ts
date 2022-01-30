import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
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

      /**
       * ⚠️ If you're a Polish speaker, you may notice, that I'm not doing a really
       * good job with the translations and some texts are actually completely different
       * to the ones in English. I don't really care, because it's just a demo, but you
       * probably shouldn't do it in production
       *
       */

      /**
       * 🚓 Keys Naming Convention
       *
       * - snake_case should be used for keys
       *   - for keys with numbers use snake_case as well: "column_1"
       * - use full words: "description" instead of "desc"
       */

      resources: {
        en: {
          translation: {
            app_title: 'React i18n Demo',
            about_initialization: {
              title: 'About Initialization',
              description_1: 'i18n is initialized in <1>src/i18n.ts</1> file.',
              description_2: 'Visit i18next documentation to learn more',
            },
            plurals: {
              title: 'Plurals',
              description: `
                There are "special" key suffixes that can be used to handle plurals. 
                In English these are "_zero", "_one" and "_other".`,
              count: 'Count:',
              example_zero: `You haven't uploaded any readings :(`,
              example_one: `You have uploaded 1 reading.`,
              example_other: `You have uploaded {{count}} readings.`,
            },
            interpolation: {
              title: 'Interpolation',
              description: `You can use interpolation to insert dynamic values into strings.`,
              example: `Hello, {{name}}! How are you?`,
              input_label: 'Edit the name',
            },
          },
        },
        pl: {
          translation: {
            app_title: 'React i18n Demko',
            about_initialization: {
              title: 'To i owo o inicjalizacji',
              description_1: 'i18n znajdziemy w pliku <1>src/i18n.ts</1>.',
              description_2: 'Obczaj sobie mordko dokumentację i18next',
            },
            plurals: {
              title: 'Liczba Mnoga',
              description: `
                Do obsługi liczby mnogiej możemy wykorzystać sufiksy kluczy. W języku polskim są
                to "_zero", "_one", "_few", "_many" oraz "_other" - co do tego ostatniego to nie
                jestem pewien kiedy jest używany ¯\\_(ツ)_/¯.`,
              count: 'Count',
              example_zero: `Nie dodano żadnych odczytów`,
              example_one: `Dodano 1 odczyt`,
              example_few: `Dodano {{count}} odczyty`,
              example_many: `Dodano {{count}} odczytów`,
            },
            interpolation: {
              title: 'Interpolacja',
              description: `Interpolacja jest używana do wstawiania dynamicznych wartości do tekstu.`,
              example: `Siema, {{name}}! Co tam słychać w wielkim świecie?`,
              input_label: 'Edytuj imię',
            },
          },
        },
      },
    })
}
