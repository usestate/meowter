import { useRoutes } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { ErrorBoundary } from 'react-error-boundary'

import { GLOBALS, VARIABLES } from 'ui/theme'
import { AlertProvider } from 'ui/alert'

import { ClientError } from 'screens/Errors/atoms'

import { routing } from './routing'

export const App = () => {
  const routes = useRoutes(routing)

  return (
    <>
      <Helmet titleTemplate='%s / Мяутер' defaultTitle='Мяутер'>
        <body className={`${GLOBALS} ${VARIABLES}`} />
      </Helmet>

      <ErrorBoundary FallbackComponent={ClientError}>
        <AlertProvider />

        {routes}
      </ErrorBoundary>
    </>
  )
}
