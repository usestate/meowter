import React from 'react'
import { t } from '@lingui/macro'

import { Error } from '../../index'

import UnauthorizedCat from '../assets/credentials.png'

export const Error401: React.FC = () => (
  <Error
    title={t({
      id: 'error.title.401',
      message: 'Ай!'
    })}
    msg={t({
      id: 'error.msg.401',
      message: 'Кажется, вам сюда нельзя...'
    })}
    image={UnauthorizedCat}
    toRegistration
    toLogin
  />
)
