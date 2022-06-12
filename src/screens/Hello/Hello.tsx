import { Navigate, useNavigate } from 'react-router-dom'
import { useStore } from 'effector-react'
import { t } from '@lingui/macro'

import { $user } from 'features/Auth/model'

import { Button } from 'ui/atoms'
import { ROUTES } from 'constants/routes'

import { Screen, Cat, Heading, Description, Actions } from './styled'

export const HelloScreen = () => {
  const user = useStore($user)
  const navigate = useNavigate()

  if (!!user.login) {
    return <Navigate to={ROUTES.feed} replace />
  }

  return (
    <Screen>
      <Cat />
      <Heading>Добро пожаловать</Heading>
      <Description>
        Если вам хочется принять участие в обсуждении последних новостей, вместо того, чтобы
        работать
      </Description>
      <Actions>
        <Button type='button' onClick={() => navigate(ROUTES.signup)}>
          {t({
            id: 'error.btn.signup',
            message: 'Зарегистрироваться'
          })}
        </Button>
        <Button type='button' variant='inline' onClick={() => navigate(ROUTES.signin)}>
          {t({
            id: 'error.btn.signin',
            message: 'Войти'
          })}
        </Button>
      </Actions>
    </Screen>
  )
}
