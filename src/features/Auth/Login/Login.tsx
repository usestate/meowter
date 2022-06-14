import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from 'constants/routes'

import { setUser } from 'features/Auth/model'

import { Accept, Form, Description, Field, Heading } from '../styled'

import { loginSchema as schema, LOGIN_FIELDS as FIELDS } from './schema'

export const Login = () => {
  const navigate = useNavigate()

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = handleSubmit(data => {
    setUser({ login: data.login, name: data.login })
    navigate(ROUTES.feed)
  })

  return (
    <Form onSubmit={onSubmit}>
      <Heading>Авторизация</Heading>
      <Description>Войдите в аккаунт, чтобы продолжить обсуждать любимые темы</Description>
      <Field
        placeholder='Почта или телефон'
        error={errors[FIELDS.LOGIN]}
        {...register(FIELDS.LOGIN)}
      />
      <Field
        type='password'
        placeholder='Пароль'
        error={errors[FIELDS.PASSWORD]}
        {...register(FIELDS.PASSWORD)}
      />
      <Accept type='submit'>Далее</Accept>
    </Form>
  )
}
