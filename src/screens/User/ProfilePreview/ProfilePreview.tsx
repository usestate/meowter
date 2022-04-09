import { FC } from 'react'

import * as S from './styled'
import { Avatar, Button } from 'ui/atoms'

const user = {
  fullName: 'Сергей Сурганов',
  about: 'Грузчик в Pyatorochka LLC',
  subscribers: 1201,
  subscriptions: 569
}

interface Props {
  className?: string
}

export const ProfilePreview: FC<Props> = ({ className }) => {
  return (
    <S.Container className={className}>
      <Avatar size={60} title={user.fullName} />
      <S.Title>{user.fullName}</S.Title>
      <S.About>{user.about}</S.About>
      <S.Statistics>
        <S.CountWrapper>
          <S.Count>{user.subscriptions}</S.Count>
          <S.Description>читает</S.Description>
        </S.CountWrapper>

        <S.CountWrapper>
          <S.Count>{user.subscribers}</S.Count>
          <S.Description>читателя</S.Description>
        </S.CountWrapper>
      </S.Statistics>

      <Button variant='secondary' size='sm'>
        Подписаться
      </Button>
    </S.Container>
  )
}
