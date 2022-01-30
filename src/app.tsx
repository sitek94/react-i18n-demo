import * as React from 'react'
import { useTranslation } from 'react-i18next'

import { LanguageSwitcher } from 'components/language-switcher'
import { Header, Main, Navbar } from 'components/lib'
import { AboutInitialization } from 'sections/about-initialization'
import { DateAndTime } from 'sections/date-and-time'
import { Interpolation } from 'sections/interpolation'
import { Plurals } from 'sections/plurals'

export function App() {
  const { t } = useTranslation()

  return (
    <>
      <Header>
        <h1>{t('app_title')} ⚗️</h1>
      </Header>
      <Navbar>
        <LanguageSwitcher />
      </Navbar>
      <Main>
        <AboutInitialization />
        <Plurals />
        <DateAndTime />
        <Interpolation />
      </Main>
    </>
  )
}