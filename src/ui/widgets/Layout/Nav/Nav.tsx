import { FC } from 'react'

import { User, CirclePlus as Meow, Home, Search, Heart } from 'ui/icons/24'
import { InteractiveIcon } from 'ui/atoms'

import { ROUTES } from 'constants/routes'

import * as S from './styled'

interface Props {}

export const Nav: FC<Props> = () => {
  return (
    <S.Container>
      <S.Link to={ROUTES.feed}>
        <InteractiveIcon icon={Home} />
      </S.Link>
      <S.Link to={ROUTES.search}>
        <InteractiveIcon icon={Search} />
      </S.Link>
      <S.Link to={ROUTES.createPost}>
        <InteractiveIcon icon={Meow} />
      </S.Link>
      <S.Link to={ROUTES.actions}>
        <InteractiveIcon icon={Heart} />
      </S.Link>
      <S.Link to={ROUTES.user}>
        <InteractiveIcon icon={User} />
      </S.Link>
    </S.Container>
  )
}
