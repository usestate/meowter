import { FC } from 'react'

import { Heart, Messages } from 'ui/icons/24'
import { Avatar, InteractiveIcon } from 'ui/atoms'

import * as S from './styled'

interface Props {
  date: string
  name: string
  message: string
  likes: number
  comments: number
}

export const Post: FC<Props> = ({ name, comments, date, likes, message }) => {
  return (
    <S.Container>
      <S.Header>
        <Avatar size={35} title={name} />

        <S.Info>
          <S.FullName>{name}</S.FullName>
          <S.Time>{date}</S.Time>
        </S.Info>
      </S.Header>

      <S.Content>
        <S.Text>{message}</S.Text>

        <S.Actions>
          <InteractiveIcon icon={Messages} />
          <InteractiveIcon icon={Heart} />
        </S.Actions>
      </S.Content>
    </S.Container>
  )
}
