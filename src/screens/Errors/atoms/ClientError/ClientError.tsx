import React from 'react'
import { t } from '@lingui/macro'

import { Error } from '../../index'

import ErrorCat from '../assets/error.png'

export const ClientError: React.FC = () => (
  <Error
    title={t({
      id: 'error.title.clientError',
      message: 'Упс...'
    })}
    msg={t({
      id: 'error.msg.clientError',
      message: 'Кажется, у нас что-то произошло...'
    })}
    image={ErrorCat}
    canUpdatePage
    toMain
  />
)
