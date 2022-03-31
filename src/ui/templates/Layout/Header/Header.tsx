import { FC } from 'react'

import { InteractiveIcon } from 'ui/atoms'
import { ChevronLeft, Notification } from 'ui/icons/24'

import * as S from './styled'

interface Props {
  title: string
}

export const Header: FC<Props> = ({ title }) => {
  return (
    <S.Container>
      <S.BackIcon icon={ChevronLeft} />
      <S.Title>{title}</S.Title>
      <InteractiveIcon icon={Notification} />
    </S.Container>
  )
}
