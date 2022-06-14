import { useNavigate } from 'react-router-dom'

import { ROUTES } from 'constants/routes'

import { Login as LoginForm } from 'features/Auth'

import { Template, Container, Recover } from './styled'

export const SignInScreen = () => {
  const navigate = useNavigate()

  return (
    <Template isNav={false}>
      <Container>
        <LoginForm />

        <Recover variant='inline' onClick={() => navigate(ROUTES.hello)}>
          Восстановить пароль
        </Recover>
      </Container>
    </Template>
  )
}
