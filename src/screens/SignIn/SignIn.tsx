import { Login as LoginForm } from 'features/Auth'

import { Template, Container } from './styled'

export const SignInScreen = () => {
  return (
    <Template isNav={false}>
      <Container>
        <LoginForm />
      </Container>
    </Template>
  )
}
