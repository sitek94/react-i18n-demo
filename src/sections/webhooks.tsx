import * as React from 'react'
import { useTranslation } from 'react-i18next'

import { Section } from 'components/lib'

export function Webhooks() {
  const { t } = useTranslation()

  return (
    <Section title="Webhooks">
      <p>{t('webhooks.text')}</p>
    </Section>
  )
}
