import { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { ROUTES } from 'constants/routes'

interface ProtectedRouteProps {
  isAllowed: boolean
  redirectPath?: string
}

// @ts-ignore
export const ProtectedRoute: FC<ProtectedRouteProps> = ({
  isAllowed,
  redirectPath = ROUTES.unauthorized,
  children
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />
  }

  return children ? children : <Outlet />
}
