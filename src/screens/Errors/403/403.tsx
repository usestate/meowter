import React from 'react'
import { t } from '@lingui/macro'

import { ErrorPage } from 'screens/Errors/components'

const Error403: React.FC = () => (
  <ErrorPage
    title={t({
      id: 'error.title.403',
      message: 'Ошибка 403'
    })}
    msg={t({
      id: 'error.msg.403',
      message: 'Доступ запрещен'
    })}
    canUpdatePage
  />
)

export default Error403
