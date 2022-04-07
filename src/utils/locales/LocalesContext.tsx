import React from 'react'
import { useLingui } from '@lingui/react'

import { LANGUAGES } from 'locales'

export const saveGlobalLocale = (locale: string) => {
  // @ts-ignore
  window.__localeId__ = locale
}

export const SUPPORTED_LANGUAGES = [LANGUAGES.RU, LANGUAGES.EN]

// @ts-ignore
export const getGlobalLocale = () => window.__localeId__

interface LocalizationContextValue {
  language: string
  changeLanguage: (language: string) => Promise<void>
}

const LocalizationContext = React.createContext<LocalizationContextValue>({
  language: getGlobalLocale(),
  changeLanguage: () => null
})

const CURRENT_LANGUAGE__FIELD = '__currentLanguage'

export const getCurrentLanguage = () =>
  localStorage.getItem(CURRENT_LANGUAGE__FIELD) || LANGUAGES.RU

interface LocalizationProviderProps {}

export const LocalizationProvider: React.FC<LocalizationProviderProps> = props => {
  const { children } = props

  const { i18n } = useLingui()

  const [language, setLanguage] = React.useState(getCurrentLanguage())

  const changeLanguage = React.useCallback(
    async newLanguage => {
      i18n.activate(newLanguage)

      setLanguage(newLanguage)

      saveGlobalLocale(newLanguage)

      localStorage.setItem(CURRENT_LANGUAGE__FIELD, newLanguage)
    },
    [setLanguage, i18n]
  )

  React.useEffect(() => {
    changeLanguage(language)
  }, [])

  return language ? (
    <LocalizationContext.Provider
      value={{
        language,
        changeLanguage
      }}
    >
      {children}
    </LocalizationContext.Provider>
  ) : null
}

export const useLocalization = () => React.useContext(LocalizationContext)
