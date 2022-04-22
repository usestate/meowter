import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { InteractiveIcon } from 'ui/atoms'
import { ChevronLeft, Notification } from 'ui/icons/24'

import * as S from './styled'

interface Props {
  title: string
}

export const Header: FC<Props> = ({ title }) => {
  const navigation = useNavigate()

  const handleGoBack = () => {
    navigation(-1)
  }

  return (
    <S.Container>
      <S.BackIcon icon={ChevronLeft} onClick={handleGoBack} />
      <S.Title>{title}</S.Title>
      <InteractiveIcon icon={Notification} />
    </S.Container>
  )
}
