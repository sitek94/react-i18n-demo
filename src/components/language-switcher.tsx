import * as React from 'react'
import { useTranslation } from 'react-i18next'

const languages = {
  en: { nativeName: '🇬🇧 English' },
  pl: { nativeName: '🇵🇱 Polski' },
}

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <div className="language-switcher">
      {Object.entries(languages).map(([language, { nativeName }]) => (
        <button
          type="button"
          key={language}
          disabled={language === i18n.resolvedLanguage}
          onClick={() => i18n.changeLanguage(language)}
        >
          {nativeName}
        </button>
      ))}
    </div>
  )
}
