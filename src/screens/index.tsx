import { Routes } from 'react-router-dom'

import { createRedirect, createRoutes } from '@lib/routing'
import { ROUTES, routing } from './routing'

const routes = createRoutes(routing)
const redirect = createRedirect({ from: '*', to: ROUTES.feed })

export const App = () => {
  return (
    <Routes>
      {routes}
      {redirect}
    </Routes>
  )
}
