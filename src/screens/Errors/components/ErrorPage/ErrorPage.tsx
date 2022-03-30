import React from 'react'
import { t } from '@lingui/macro'
import { Helmet } from 'react-helmet'

import { Wrapper, Content, Title, Actions, Msg } from './styled'

interface ErrorPageProps {
  title: string
  msg: string
  canUpdatePage: boolean
}

const ErrorPage: React.FC<ErrorPageProps> = ({ title, msg, canUpdatePage }) => {
  const onReload = React.useCallback(() => {
    window.location.reload()
  }, [])

  return (
    <Wrapper>
      <Content>
        <Title>{title}</Title>

        <Helmet>
          <title>{title}</title>
        </Helmet>

        <Msg>{msg}</Msg>

        <Actions>
          <a href='/'>
            <button type='button'>
              {t({
                id: 'error.btn.goToMain',
                message: 'На главную'
              })}
            </button>
          </a>

          {canUpdatePage && (
            <button type='button' onClick={onReload}>
              {t({
                id: 'error.btn.reloadPage',
                message: 'Обновить страницу'
              })}
            </button>
          )}
        </Actions>
      </Content>
    </Wrapper>
  )
}

export default ErrorPage
