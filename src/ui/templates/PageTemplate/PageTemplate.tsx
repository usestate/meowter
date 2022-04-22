import React, { FC } from 'react'

import { Layout } from 'ui/widgets/Layout'

interface Props {
  title: string
  rightAction?: React.ReactNode
}

const PageTemplate: FC<Props> = ({ children, title, rightAction }) => {
  return (
    <Layout>
      <Layout.Header title={title} rightAction={rightAction} />

      <Layout.Content>{children}</Layout.Content>

      <Layout.Nav />
    </Layout>
  )
}

export default PageTemplate
