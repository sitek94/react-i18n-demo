import * as React from 'react'
import { useTranslation } from 'react-i18next'

import { Example, Section } from 'components/lib'

export function Plurals() {
  const [count, setCount] = React.useState(0)
  const { t } = useTranslation()

  return (
    <Section title={t('plurals.title')}>
      <p>{t('plurals.description')}</p>
      <Example>
        <code>count === {count}</code>
        <span style={{ marginLeft: '1rem' }}>
          {t('plurals.example', { count })}
        </span>
      </Example>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </Section>
  )
}
