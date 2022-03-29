import { FC } from 'react'

export interface CoreRoute {
  path: string
  element: FC
  index?: boolean
  children?: CoreRoute[]
}
