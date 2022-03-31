import { CoreRoute } from 'lib/routing'

import { Feed } from 'screens/Feed'

export enum ROUTES {
  feed = '/feed'
}

export const routing: CoreRoute[] = [
  {
    path: ROUTES.feed,
    element: Feed
  }
]
