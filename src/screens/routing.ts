import { CoreRoute } from '@lib/routing'

import { Feed } from './Feed'

export enum ROUTES {
  feed = '/feed',
}

export const routing: CoreRoute[] = [
  {
    path: ROUTES.feed,
    element: Feed,
  }
]
