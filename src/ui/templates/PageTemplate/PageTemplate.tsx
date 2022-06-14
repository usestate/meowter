import React, { FC } from 'react'

import { Layout } from 'ui/widgets/Layout'
import { ProtectedRoute } from 'lib/routing'

interface Props {
  className?: string
  title?: string
  rightAction?: React.ReactNode
  isNav?: boolean
  isAllowed?: boolean
  redirectPath?: string
}

const PageTemplate: FC<Props> = ({
  className,
  children,
  title,
  rightAction,
  isNav = true,
  isAllowed = true,
  redirectPath
}) => {
  return (
    <ProtectedRoute isAllowed={isAllowed} redirectPath={redirectPath}>
      <Layout className={className}>
        {isNav ? (
          <>
            <Layout.Header title={title} rightAction={rightAction} />

            <Layout.Content>{children}</Layout.Content>

            <Layout.Nav />
          </>
        ) : (
          <>
            <Layout.Header title={title} rightAction={rightAction} />

            {children}
          </>
        )}
      </Layout>
    </ProtectedRoute>
  )
}

export default PageTemplate
