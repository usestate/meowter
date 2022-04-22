import { FC } from 'react'
import { Layout } from 'ui/widgets/Layout'

interface Props {
  title: string
  isMeow: boolean
}

const PageTemplate: FC<Props> = ({ children, title, isMeow }) => {
  return (
    <Layout>
      <Layout.Header title={title} isMeow={isMeow} />

      <Layout.Content>{children}</Layout.Content>

      <Layout.Nav />
    </Layout>
  )
}

export default PageTemplate
