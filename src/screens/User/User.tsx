import { FC } from 'react'
import { Helmet } from 'react-helmet'

import { Layout } from 'ui/templates/Layout'
import { ProfilePreview } from './ProfilePreview'

export const UserScreen: FC = () => {
  const username = '@surganov'

  return (
    <Layout>
      <Helmet title={username} />

      <Layout.Header title={username} />

      <Layout.Content>
        <ProfilePreview />
      </Layout.Content>

      <Layout.Nav />
    </Layout>
  )
}
