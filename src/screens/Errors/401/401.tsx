import React from 'react'
import { t } from '@lingui/macro'

import { ErrorPage } from 'screens/Errors/components'

const Error401: React.FC = () => (
  <ErrorPage
    title={t({
      id: 'error.title.401',
      message: 'Ошибка 401'
    })}
    msg={t({
      id: 'error.msg.401',
      message: 'Ошибка аутентификации'
    })}
    canUpdatePage
  />
)

export default Error401
