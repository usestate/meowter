import * as yup from 'yup'

export const REGISTRATION_FIELDS = {
  NAME: 'name',
  PASSWORD: 'password',
  LOGIN: 'login'
}

export const registrationSchema = yup.object({
  [REGISTRATION_FIELDS.NAME]: yup.string().required('Введите никнейм'),
  [REGISTRATION_FIELDS.PASSWORD]: yup.string().required('Введите пароль'),
  [REGISTRATION_FIELDS.LOGIN]: yup.string().required('Введите почту или телефон')
})
