import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from 'constants/routes'

import { setUser } from 'features/Auth/model'

import { Accept, Form, Description, Field, Heading } from '../styled'

import { registrationSchema as schema, REGISTRATION_FIELDS as FIELDS } from './schema'

export const Registration = () => {
  const navigate = useNavigate()

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = handleSubmit(data => {
    setUser({ login: data.login, name: data.name })
    navigate(ROUTES.feed)
  })

  return (
    <Form onSubmit={onSubmit}>
      <Heading>Давайте начинать</Heading>
      <Description>Заведите аккаунт, чтобы полноценно пользоваться нашим сервисом</Description>
      <Field placeholder='Никнейм' error={errors[FIELDS.NAME]} {...register(FIELDS.NAME)} />
      <Field
        type='password'
        placeholder='Пароль'
        error={errors[FIELDS.PASSWORD]}
        {...register(FIELDS.PASSWORD)}
      />
      <Field
        placeholder='Почта или телефон'
        error={errors[FIELDS.LOGIN]}
        {...register(FIELDS.LOGIN)}
      />
      <Accept type='submit'>Далее</Accept>
    </Form>
  )
}
