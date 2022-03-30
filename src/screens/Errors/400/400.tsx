import React from 'react'
import { t } from '@lingui/macro'

import { ErrorPage } from 'screens/Errors/components'

const Error400: React.FC = () => (
  <ErrorPage
    title={t({
      id: 'error.title.400',
      message: 'Ошибка 400'
    })}
    msg={t({
      id: 'error.msg.400',
      message: 'Произошел неверный запрос'
    })}
    canUpdatePage
  />
)

export default Error400
