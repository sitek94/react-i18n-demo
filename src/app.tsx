import { Trans, useTranslation } from 'react-i18next'

export function App() {
  const { t } = useTranslation()

  return (
    <main>
      <h1>React i18n Demo ⚗️</h1>
      <p>
        <Trans i18nKey="description.part1">
          i18n is initialized in <code>src/i18n.ts</code> file.
        </Trans>
      </p>
      <a
        href="https://www.i18next.com/"
        target="_blank"
        rel="noreferrer noopener"
      >
        {t('description.part2')}
      </a>
    </main>
  )
}
