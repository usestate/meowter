import React, { FC } from 'react'

import { Layout } from 'ui/widgets/Layout'
import { ProtectedRoute } from 'lib/routing'

interface Props {
  title: string
  rightAction?: React.ReactNode
  isActions?: boolean
  isAllowed?: boolean
  redirectPath?: string
}

const PageTemplate: FC<Props> = ({
  children,
  title,
  rightAction,
  isActions = true,
  isAllowed,
  redirectPath
}) => {
  return (
    <ProtectedRoute isAllowed={isAllowed} redirectPath={redirectPath}>
      <Layout>
        {isActions ? (
          <>
            <Layout.Header title={title} rightAction={rightAction} />

            <Layout.Content>{children}</Layout.Content>

            <Layout.Nav />
          </>
        ) : (
          <>
            <Layout.Content>{children}</Layout.Content>
          </>
        )}
      </Layout>
    </ProtectedRoute>
  )
}

export default PageTemplate
