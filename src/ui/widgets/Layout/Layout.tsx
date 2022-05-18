import { FC } from 'react'

import * as S from './styled'

interface Props {
  huy: boolean
}

export const Layout: FC<Props> = ({ huy, children }) => {
  return <S.Container>{children}</S.Container>
}
