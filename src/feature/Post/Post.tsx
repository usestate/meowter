import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { Heart, Messages } from 'ui/icons/24'
import { InteractiveIcon } from 'ui/atoms'
import { stringifyRoute } from 'lib/routing'
import { ROUTES } from 'constants/routes'
import { User } from 'ui/molecules'

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
      <User name={name} date={date} />

      <S.Content>
        <S.Text>{message}</S.Text>

        <S.Actions>
          <NavLink
            to={stringifyRoute(ROUTES.comments, {
              postId: '4918482'
            })}
          >
            <InteractiveIcon icon={Messages} />
          </NavLink>
          <InteractiveIcon icon={Heart} />
        </S.Actions>
      </S.Content>
    </S.Container>
  )
}
