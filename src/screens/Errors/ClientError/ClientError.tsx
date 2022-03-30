import React from 'react'
import { t } from '@lingui/macro'

import { ErrorPage } from 'screens/Errors/components'

const ClientError: React.FC = () => (
  <ErrorPage
    title={t({
      id: 'error.title.clientError',
      message: 'Ошибка интерфейса'
    })}
    msg={t({
      id: 'error.msg.clientError',
      message: 'Произошла непредвиденная ошибка'
    })}
    canUpdatePage
  />
)

export default ClientError
