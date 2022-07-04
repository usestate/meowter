import { FC } from 'react'
import { Helmet } from 'react-helmet'
import { useStore } from 'effector-react'

import { $user } from 'features/Auth/model'

import * as S from './styled'
import { Avatar, Button, Input } from 'ui/atoms'
import { useForm } from 'react-hook-form'

const mock = {
  firstName: 'Валя',
  secondName: 'Андреич',
  about: 'Грузчик в Pyatorochka LLC',
  email: 'trplfr@gmail.com'
}

type FormFields = {
  firstName: string
  secondName: string
  about: string
  email: string
  currentPassword: string
  password: string
  passwordConfirmation: string
}

export const SettingsPage: FC = () => {
  const user = useStore($user)

  const { register } = useForm<FormFields>({
    defaultValues: mock
  })

  return (
    <S.Template title='Настройки' isAllowed={!!user.login}>
      <Helmet title='Настройки' />

      <S.Container>
        <Avatar size={60} title={`${mock.firstName} ${mock.secondName}`} />

        <S.Form>
          <S.Section>
            <S.Title>Общая информация</S.Title>
            <Input {...register('firstName')} />
            <Input {...register('secondName')} />
            <Input type='textarea' {...register('about')} />
          </S.Section>

          <S.Section>
            <S.Title>Контакты</S.Title>
            <Input {...register('email')} />
          </S.Section>

          <S.Section>
            <S.Title>Безопасность</S.Title>
            <Input {...register('currentPassword')} placeholder='Введите старый пароль' />
            <Input {...register('password')} placeholder='Введите новый пароль' />
            <Input {...register('passwordConfirmation')} placeholder='Повторите пароль' />
          </S.Section>

          <Button>Обновить</Button>
        </S.Form>
      </S.Container>
    </S.Template>
  )
}
