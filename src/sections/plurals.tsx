import * as React from 'react'
import { useTranslation } from 'react-i18next'

import { Section } from 'components/section'

export function Plurals() {
  const [count, setCount] = React.useState(0)
  const { t } = useTranslation()

  return (
    <Section title={t('plurals.title')}>
      <p>{t('plurals.description')}</p>
      <blockquote>
        <code>count === {count}</code>
        <br />
        {t('plurals.example', { count })}
      </blockquote>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </Section>
  )
}
