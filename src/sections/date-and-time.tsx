import * as React from 'react'
import { useTranslation } from 'react-i18next'

import { Section } from 'components/lib'

export function DateAndTime() {
  const { t } = useTranslation()
  const [count, setCount] = React.useState(0)

  return (
    <Section title="TODO: Date and Time">
      <p>tba</p>
      <p>{t(`Let's try sentence as a key with interpolation`)}</p>
      <p>{t(`Uploaded {{count}} reading`, { count })}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </Section>
  )
}
