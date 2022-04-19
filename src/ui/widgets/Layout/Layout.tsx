import { FC } from 'react'

import * as S from './styled'

interface Props {}

export const Layout: FC<Props> = ({ children }) => {
  return <S.Container>{children}</S.Container>
}
