import type { LocaleData, Messages } from '@lingui/core'
import { ru as ruPlurals, en as enPlurals } from 'make-plural/plurals'

import { messages as ruMessages } from 'locales/ru/messages'
import { messages as enMessages } from 'locales/en/messages'

export const RU = 'ru'
export const EN = 'en'

export const LANGUAGES = {
  RU,
  EN
}

export const LOCALE_DATA: { [locale: string]: LocaleData } = {
  [RU]: { plurals: ruPlurals },
  [EN]: { plurals: enPlurals }
}

export const MESSAGES: { [locale: string]: Messages } = {
  [RU]: ruMessages,
  [EN]: enMessages
}
