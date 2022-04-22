import { Navigate } from 'react-router-dom'

import { CoreRoute } from 'lib/routing'
import { ROUTES } from 'constants/routes'

import { FeedScreen } from './Feed'
import { UserScreen } from './User'
import { CommentsScreen } from './Comments'

export const routing: CoreRoute[] = [
  {
    path: ROUTES.feed,
    element: <FeedScreen />
  },
  {
    path: ROUTES.user,
    element: <UserScreen />
  },
  {
    path: ROUTES.comments,
    element: <CommentsScreen />
  },

  {
    path: ROUTES.notResolved,
    element: <Navigate to={ROUTES.feed} />
  }
]
