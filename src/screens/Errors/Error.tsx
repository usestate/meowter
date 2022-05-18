import { ReactNode, FC, useCallback } from 'react'
import { t } from '@lingui/macro'
import { Helmet } from 'react-helmet'
import { useLocation, useNavigate } from 'react-router-dom'

import { Button } from 'ui/atoms'

import { Actions, Cat, Container, Description, Details, Heading } from './styled'

interface ErrorProps {
  title: string
  msg: string
  image: ReactNode
  canUpdatePage?: boolean
  toRegistration?: boolean
  toLogin?: boolean
  toMain?: boolean
}

export const Error: FC<ErrorProps> = ({
  title,
  msg,
  image,
  canUpdatePage,
  toLogin,
  toMain,
  toRegistration
}) => {
  const { state } = useLocation()
  const navigate = useNavigate()

  const onReload = useCallback(() => {
    window.location.reload()
  }, [])

  return (
    <>
      <Helmet>{title}</Helmet>

      <Container>
        <Cat src={image} />
        <Heading>{title}</Heading>
        <Description>{msg}</Description>
        {/* @ts-ignore */}
        {state?.exception && (
          <Details>
            {/* @ts-ignore */}
            Error: {state?.error?.message}
            <br />
            {/* @ts-ignore */}
            {state?.exception?.componentStack}
          </Details>
        )}
        <Actions>
          {toMain && (
            <Button type='button' onClick={() => navigate('/')}>
              {t({
                id: 'error.btn.goToMain',
                message: 'На главную'
              })}
            </Button>
          )}

          {canUpdatePage && (
            <Button type='button' onClick={onReload}>
              {t({
                id: 'error.btn.reloadPage',
                message: 'Обновить страницу'
              })}
            </Button>
          )}

          {toLogin && (
            <Button type='button' onClick={() => navigate('/signin')}>
              {t({
                id: 'error.btn.signin',
                message: 'Войти'
              })}
            </Button>
          )}

          {toRegistration && (
            <Button type='button' onClick={() => navigate('/signup')}>
              {t({
                id: 'error.btn.signup',
                message: 'Зарегистрироваться'
              })}
            </Button>
          )}
        </Actions>
      </Container>
    </>
  )
}
