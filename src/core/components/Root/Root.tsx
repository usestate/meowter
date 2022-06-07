import React, { FC } from 'react'
import { I18nProvider } from '@lingui/react'
import { i18n } from '@lingui/core'
import { BrowserRouter } from 'react-router-dom'

import { App } from 'screens'

import { LANGUAGES, LOCALE_DATA, MESSAGES } from 'locales'

import { LocalizationProvider } from 'utils/locales'

i18n.loadLocaleData(LANGUAGES.EN, LOCALE_DATA[LANGUAGES.EN])
i18n.loadLocaleData(LANGUAGES.RU, LOCALE_DATA[LANGUAGES.RU])
i18n.load(LANGUAGES.EN, MESSAGES[LANGUAGES.EN])
i18n.load(LANGUAGES.RU, MESSAGES[LANGUAGES.RU])
i18n.activate(LANGUAGES.RU)

interface RootProps {}

const Root: FC<RootProps> = () => {
  return (
    <I18nProvider i18n={i18n}>
      <LocalizationProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LocalizationProvider>
    </I18nProvider>
  )
}

export default Root
