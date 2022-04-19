import { FC } from 'react'

import * as S from './styled'

interface Props {}

export const Content: FC<Props> = ({ children }) => {
  return <S.Container>{children}</S.Container>
}
