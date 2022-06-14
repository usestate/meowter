import * as yup from 'yup'

export const LOGIN_FIELDS = {
  LOGIN: 'login',
  PASSWORD: 'password'
}

export const loginSchema = yup.object({
  [LOGIN_FIELDS.LOGIN]: yup.string().required('Введите почту или телефон'),
  [LOGIN_FIELDS.PASSWORD]: yup.string().required('Введите пароль')
})
