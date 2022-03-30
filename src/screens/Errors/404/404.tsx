import React from 'react'
import { t } from '@lingui/macro'

import { ErrorPage } from 'screens/Errors/components'

const Error404: React.FC = () => (
  <ErrorPage
    title={t({
      id: 'error.title.404',
      message: 'Ошибка 404'
    })}
    msg={t({
      id: 'error.msg.404',
      message: 'Страница не найдена'
    })}
    canUpdatePage
  />
)

export default Error404
