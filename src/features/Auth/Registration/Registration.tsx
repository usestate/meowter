import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from 'constants/routes'

import { setUser } from 'features/Auth/model'

import { Accept, Form, Description, Field, Heading, Wrapper } from '../styled'

import { registrationSchema as schema, REGISTRATION_FIELDS as FIELDS } from './schema'

export const Registration = () => {
  const navigate = useNavigate()

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit
  } = useForm({
    resolver: yupResolver(schema)
  })

  const { isEmail } = watch()

  const onSubmit = handleSubmit(data => {
    setUser({ login: data.email || data.tel, name: data.name })
    console.log(data)
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
      {isEmail ? (
        <Field placeholder='Почта' error={errors[FIELDS.EMAIL]} {...register(FIELDS.EMAIL)} />
      ) : (
        <Field placeholder='Телефон' error={errors[FIELDS.TEL]} {...register(FIELDS.TEL)} />
      )}
      <Wrapper>
        <input type='checkbox' {...register('isEmail')} />
        {isEmail ? 'Использовать телефон' : 'Использовать электронную почту'}
      </Wrapper>
      <Accept type='submit'>Далее</Accept>
    </Form>
  )
}
