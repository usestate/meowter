import { Header } from './Header'
import { Content } from './Content'
import { Nav } from './Nav'
import { Layout as InternalLayout } from './Layout'

type InternalLayoutType = typeof InternalLayout

interface LayoutType extends InternalLayoutType {
  Header: typeof Header
  Content: typeof Content
  Nav: typeof Nav
}

const Layout = InternalLayout as LayoutType

Layout.Header = Header
Layout.Nav = Nav
Layout.Content = Content

export { Layout }
