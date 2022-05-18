import React from 'react'
import { t } from '@lingui/macro'

import { Error } from '../../index'

import NotFoundCat from '../assets/notfound.png'

export const Error404: React.FC = () => (
  <Error
    title={t({
      id: 'error.title.404',
      message: 'Ой!'
    })}
    msg={t({
      id: 'error.msg.404',
      message: 'Такой страницы нет...'
    })}
    image={NotFoundCat}
    toMain
  />
)
