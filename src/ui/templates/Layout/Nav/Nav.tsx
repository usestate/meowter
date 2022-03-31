import { FC } from 'react'

import { User, Pencil, Settings, Home } from 'ui/icons/24'
import { InteractiveIcon } from 'ui/atoms'

import * as S from './styled'

interface Props {}

export const Nav: FC<Props> = () => {
  return (
    <S.Container>
      <InteractiveIcon icon={Home} />
      <InteractiveIcon icon={User} />
      <InteractiveIcon icon={Pencil} />
      <InteractiveIcon icon={Settings} />
    </S.Container>
  )
}
