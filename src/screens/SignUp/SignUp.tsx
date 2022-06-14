import { useNavigate } from 'react-router-dom'

import { ROUTES } from 'constants/routes'

import { Registration as RegistrationForm } from 'features/Auth'

import { Template, Container, Enter } from './styled'

export const SignUpScreen = () => {
  const navigate = useNavigate()

  return (
    <Template isNav={false}>
      <Container>
        <RegistrationForm />

        <Enter variant='inline' onClick={() => navigate(ROUTES.signin)}>
          Войти в аккаунт
        </Enter>
      </Container>
    </Template>
  )
}
