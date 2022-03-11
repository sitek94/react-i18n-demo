import * as React from 'react'
import { useTranslation } from 'react-i18next'

import { Example, Section } from 'components/lib'

export function CustomFormatters() {
  const { t } = useTranslation()

  const text = t('EffECT of POSiTivE aND NEGaTivE EmoTIOns')

  return (
    <Section title={t('customFormatters.title')}>
      <p>{t('customFormatters.description')}</p>
      <p>{t('Input text: "{{text}}"', { text })}</p>
      <Example>
        <p>{t('lowerCase: "{{text, lowerCase}}"', { text })}</p>
        <p>{t('upperCase: "{{text, upperCase}}"', { text })}</p>
        <p>{t('capitalize: "{{text, capitalize}}"', { text })}</p>
        <p>
          {t('capitalizeFirst: "{{text, capitalizeFirst}}"', {
            text,
          })}
        </p>
        <p>{t('titleCase: "{{text, titleCase}}"', { text })}</p>
      </Example>
    </Section>
  )
}
