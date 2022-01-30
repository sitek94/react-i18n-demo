import * as React from 'react'
import { useTranslation } from 'react-i18next'

import { LanguageSwitcher } from 'components/language-switcher'
import { AboutInitialization } from 'sections/about-initialization'
import { Plurals } from 'sections/plurals'

export function App() {
  const { t } = useTranslation()

  return (
    <>
      <header>
        <h1>{t('app_title')} ⚗️</h1>
      </header>
      <LanguageSwitcher />
      <main>
        <AboutInitialization />
        <Plurals />
      </main>
    </>
  )
}
