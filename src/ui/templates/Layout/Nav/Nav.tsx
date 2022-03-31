import { FC } from 'react'

import { User, Edit, Settings, Home } from 'ui/icons/24'
import { InteractiveIcon } from 'ui/atoms'

import * as S from './styled'

interface Props {}

export const Nav: FC<Props> = () => {
  return (
    <S.Container>
      <InteractiveIcon icon={Home} />
      <InteractiveIcon icon={User} />
      <InteractiveIcon icon={Edit} />
      <InteractiveIcon icon={Settings} />
    </S.Container>
  )
}
