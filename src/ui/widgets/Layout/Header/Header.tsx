import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { ChevronLeft, Notification, Check } from 'ui/icons/24'

import * as S from './styled'

interface Props {
  title: string
  isMeow: boolean
}

export const Header: FC<Props> = ({ title, isMeow }) => {
  const navigation = useNavigate()

  const handleGoBack = () => {
    navigation(-1)
  }

  return (
    <S.Container>
      <S.Icon icon={ChevronLeft} onClick={handleGoBack} />
      <S.Title>{title}</S.Title>
      {isMeow ? <S.MeowIcon icon={Check} /> : <S.Icon icon={Notification} />}
    </S.Container>
  )
}
