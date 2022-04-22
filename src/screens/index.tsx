import { useRoutes } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { ErrorBoundary } from 'core/components'

import { GLOBALS, VARIABLES } from 'ui/theme'
import { AlertProvider } from 'ui/alert'

import { routing } from './routing'

export const App = () => {
  const routes = useRoutes(routing)

  return (
    <>
      <Helmet titleTemplate='%s / Мяутер' defaultTitle='Мяутер'>
        <body className={`${GLOBALS} ${VARIABLES}`} />
      </Helmet>

      <ErrorBoundary>
        <AlertProvider />

        {routes}
      </ErrorBoundary>
    </>
  )
}
