import type { AxiosError } from 'axios'

export const ERROR_CODES = {
  // validation codes
  VALIDATION_MIN: 'VALIDATION_MIN',
  VALIDATION_MAX: 'VALIDATION_MAX',
  VALIDATION_REQUIRED: 'VALIDATION_REQUIRED',
  VALIDATION_HEXADEMICAL: 'VALIDATION_HEXADEMICAL', // [a-f0-9]
  VALIDATION_ONEOF: 'VALIDATION_ONEOF',
  VALIDATION_EMAIL: 'VALIDATION_EMAIL',
  VALIDATION_ALPHANUM: 'VALIDATION_ALPHANUM', // [a-z0-9]
  VALIDATION_ALPHAUNICODE: 'VALIDATION_ALPHAUNICODE',
  VALIDATION_RGBA: 'VALIDATION_RGBA',
  VALIDATION_HEXCOLOR: 'VALIDATION_HEXCOLOR', // #EEE #EEEEEE #EEEEEEEE
  VALIDATION_PHONE: 'VALIDATION_PHONE',
  VALIDATION_OBJECTID: 'VALIDATION_OBJECTID',
  VALIDATION_ALPHANUMDASH: 'VALIDATION_ALPHANUMDASH', // проверка символов тегов, по сути проверка на валидность одного уровня доменного имени
  VALIDATION_ZXCVBN: 'VALIDATION_ZXCVBN', // проверка сложности пароля
  VALIDATION_CONTENTTYPE: 'VALIDATION_CONTENTTYPE',
  VALIDATION_PUBKEY: 'VALIDATION_PUBKEY', // проверка формата публичного ключа

  // token validation errors
  TOKEN_MALFORMED: 'TOKEN_MALFORMED',
  TOKEN_EXPIRED: 'TOKEN_EXPIRED',
  TOKEN_FOR_FUTURE: 'TOKEN_FOR_FUTURE',
  BAD_TOKEN: 'BAD_TOKEN',
  TOKEN_ALREADY_EXISTS: 'TOKEN_ALREADY_EXISTS',
  TOKEN_TRIES_EXCEEDED: 'TOKEN_TRIES_EXCEEDED',

  // encryption errors
  KEY_ERROR: 'KEY_ERROR',

  // authentication
  USER_NOT_AUTHENTICATED: 'USER_NOT_AUTHENTICATED',
  BAD_DEVICE: 'BAD_DEVICE',
  BAD_CREDENTIALS: 'BAD_CREDENTIALS',
  LOGIN_ATTEMPTS_EXCEEDED: 'LOGIN_ATTEMPTS_EXCEEDED',
  USER_NOT_ACTIVATED: 'USER_NOT_ACTIVATED',
  USER_CANTJOIN: 'USER_CANTJOIN',

  // authorization (403)
  NO_RIGHTS: 'NO_RIGHTS',
  BAD_USER: 'BAD_USER',
  USER_BLOCKED: 'USER_BLOCKED',
  USER_EXPIRED: 'USER_EXPIRED',
  USER_EXTERNAL: 'USER_EXTERNAL',
  DEVICE_BLOCKED: 'DEVICE_BLOCKED',
  NEW_DEVICE_NOT_ALLOWED: 'NEW_DEVICE_NOT_ALLOWED',
  DEVICE_LIMIT_EXCEEDED: 'DEVICE_LIMIT_EXCEEDED',

  // other
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  BAD_REQUEST: 'BAD_REQUEST',
  VALIDATION_ERROR: 'VALIDATION_ERROR'
}

export interface Error {
  col?: string[]
  msg?: string
  code: string
  params?: {
    actualtag?: string
    namespace?: string
    param?: string
    type?: string
    value?: string
  }
}

export interface ErrorData {
  errors?: Error[]
}

export const getError = ({ err }: { err: AxiosError }): Error => {
  const { data }: { data: ErrorData } = err.response || { data: undefined }

  return data?.errors?.[0]
}

export const getRenderError = (err: AxiosError) => {
  if (err?.response?.status && err?.response?.status !== 401) {
    throw err.response.status
  }
}
