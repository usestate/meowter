import { FC } from 'react'
import { Layout } from 'ui/widgets/Layout'

interface Props {
  title: string
}

export const PageTemplate: FC<Props> = ({ children, title }) => {
  return (
    <Layout>
      <Layout.Header title={title} />

      <Layout.Content>{children}</Layout.Content>

      <Layout.Nav />
    </Layout>
  )
}
