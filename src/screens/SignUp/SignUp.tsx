import { Registration as RegistrationForm } from 'features/Auth'

import { Template, Container } from './styled'

export const SignUpScreen = () => {
  return (
    <Template isNav={false}>
      <Container>
        <RegistrationForm />
      </Container>
    </Template>
  )
}
