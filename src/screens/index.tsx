import { Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { ErrorBoundary } from 'core/components'

import { GLOBALS, VARIABLES } from 'ui/theme'
import { AlertProvider } from 'ui/alert'

import { createRedirect, createRoutes } from 'lib/routing'

import { ROUTES, routing } from './routing'

const routes = createRoutes(routing)
const redirect = createRedirect({ from: '*', to: ROUTES.feed })

export const App = () => {
  return (
    <>
      <Helmet titleTemplate='%s / Meowter' defaultTitle='Meowter'>
        <body className={`${GLOBALS} ${VARIABLES}`} />
      </Helmet>

      <ErrorBoundary>
        <AlertProvider />

        <Routes>
          {routes}

          {redirect}
        </Routes>
      </ErrorBoundary>
    </>
  )
}
