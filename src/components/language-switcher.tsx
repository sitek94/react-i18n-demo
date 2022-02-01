import * as React from 'react'
import { useTranslation } from 'react-i18next'

const languages = {
  en: { nativeName: '🇬🇧 English' },
  pl: { nativeName: '🇵🇱 Polski' },
  es: { nativeName: '🇪🇸 Español' },
}

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <div className="language-switcher">
      {Object.entries(languages).map(([language, { nativeName }]) => {
        const isSelected = language === i18n.resolvedLanguage
        console.log({ language, resolved: i18n.resolvedLanguage })
        return (
          <button
            type="button"
            key={language}
            aria-selected={isSelected}
            disabled={isSelected}
            className={isSelected ? 'selected' : ''}
            onClick={() => i18n.changeLanguage(language)}
          >
            {nativeName}
          </button>
        )
      })}
    </div>
  )
}
