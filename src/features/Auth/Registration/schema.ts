import * as yup from 'yup'

export const REGISTRATION_FIELDS = {
  NAME: 'name',
  PASSWORD: 'password',
  EMAIL: 'email',
  TEL: 'tel'
}

export const registrationSchema = yup.object({
  isEmail: yup.boolean(),
  [REGISTRATION_FIELDS.NAME]: yup.string().required('Введите никнейм'),
  [REGISTRATION_FIELDS.PASSWORD]: yup.string().required('Введите пароль'),
  [REGISTRATION_FIELDS.EMAIL]: yup
    .string()
    .when('isEmail', (isEmail, schema) => (isEmail ? schema.required('Введите почту') : schema)),
  [REGISTRATION_FIELDS.TEL]: yup
    .string()
    .when('isEmail', (isEmail, schema) => (isEmail ? schema : schema.required('Введите телефон')))
})
