import { FC, ReactNode } from 'react'

interface LoaderProps {
  loader: ReactNode
  isLoading: boolean
}

export const Loader: FC<LoaderProps> = ({ children, loader, isLoading }) => {
  return <>{isLoading ? loader : children}</>
}
