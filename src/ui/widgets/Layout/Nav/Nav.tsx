import { FC } from 'react'

import { User, Pencil, Settings, Home } from 'ui/icons/24'
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
      <S.Link to={ROUTES.user}>
        <InteractiveIcon icon={User} />
      </S.Link>
      <S.Link to={ROUTES.createPost}>
        <InteractiveIcon icon={Pencil} />
      </S.Link>
      <S.Link to={ROUTES.profile}>
        <InteractiveIcon icon={Settings} />
      </S.Link>
    </S.Container>
  )
}
