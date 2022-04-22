import { FC } from 'react'

import { Avatar } from 'ui/atoms'

import * as S from './styled'

interface Props {
  name: string
  date: string
}

export const User: FC<Props> = ({ name, date }) => {
  return (
    <S.Container>
      <Avatar size={35} title={name} />

      <S.Info>
        <S.FullName>{name}</S.FullName>
        <S.Time>{date}</S.Time>
      </S.Info>
    </S.Container>
  )
}
