import { Navigate, Route } from 'react-router-dom'

import { CoreRoute } from './types'

export const createRoutes = (routes: CoreRoute[]) => {
  return routes.map(({ children, element: Element, ...route }) => (
    <Route key={route.path} element={<Element />} {...route}>
      {children ? createRoutes(children) : null}
    </Route>
  ))
}

interface RedirectProps {
  from: string
  to: string
}

export const createRedirect = ({ to, from }: RedirectProps) => {
  return <Route path={from} element={<Navigate to={to} />} />
}
