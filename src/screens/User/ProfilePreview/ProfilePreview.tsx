import { FC } from 'react'

import { Avatar, Button } from 'ui/atoms'

import * as S from './styled'

const user = {
  fullName: 'Валя Андреич',
  about: 'Грузчик в Pyatorochka LLC',
  subscribers: 1201,
  subscriptions: 569,
  isCurrentUser: true
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

      {!user.isCurrentUser && (
        <Button variant='secondary' size='sm'>
          Подписаться
        </Button>
      )}
    </S.Container>
  )
}
