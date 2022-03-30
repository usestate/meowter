import React from 'react'
import { t } from '@lingui/macro'

import { ErrorPage } from 'screens/Errors/components'

const Error500: React.FC = () => (
  <ErrorPage
    title={t({
      id: 'error.title.500',
      message: 'Ошибка 500'
    })}
    msg={t({
      id: 'error.msg.500',
      message: 'Произошла непредвиденная ошибка'
    })}
    canUpdatePage
  />
)

export default Error500
