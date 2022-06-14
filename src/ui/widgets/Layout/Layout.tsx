import { FC } from 'react'

import * as S from './styled'

interface Props {
  className: string
}

export const Layout: FC<Props> = ({ className, children }) => {
  return <S.Container className={className}>{children}</S.Container>
}
