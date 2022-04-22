import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { ChevronLeft, Notification } from 'ui/icons/24'

import * as S from './styled'

interface Props {
  title: string
  rightAction?: React.ReactNode
}

export const Header: FC<Props> = ({ title, rightAction }) => {
  const navigation = useNavigate()

  const handleGoBack = () => navigation(-1)

  return (
    <S.Container>
      <S.Icon icon={ChevronLeft} onClick={handleGoBack} />
      <S.Title>{title}</S.Title>
      {rightAction ? rightAction : <S.Icon icon={Notification} />}
    </S.Container>
  )
}
