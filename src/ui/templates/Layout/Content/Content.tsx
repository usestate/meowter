import { FC } from 'react'

interface Props {}

export const Content: FC<Props> = ({ children }) => {
  return <main>{children}</main>
}
