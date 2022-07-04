import { Navigate } from 'react-router-dom'

import { CoreRoute } from 'lib/routing'
import { ROUTES } from 'constants/routes'

import { FeedScreen } from './Feed'
import { UserScreen } from './User'
import { CommentsScreen } from './Comments'
import { CreatePostScreen } from './CreatePost'
import { HelloScreen } from './Hello'
import { SignInScreen } from './SignIn'
import { SignUpScreen } from './SignUp'
import { SettingsPage } from './Settings'

import {
  Error404 as NotFoundScreen,
  Error401 as UnauthorizedScreen,
  ClientError as ClientErrorScreen
} from './Errors/atoms'

export const routing: CoreRoute[] = [
  {
    path: ROUTES.feed,
    element: <FeedScreen />
  },
  {
    path: ROUTES.unauthorized,
    element: <UnauthorizedScreen />
  },
  {
    path: ROUTES.notFound,
    element: <NotFoundScreen />
  },
  {
    path: ROUTES.error,
    element: <ClientErrorScreen />
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
    path: ROUTES.createPost,
    element: <CreatePostScreen />
  },
  {
    path: ROUTES.profile,
    element: <SettingsPage />
  },
  {
    path: ROUTES.home,
    element: <Navigate to={ROUTES.hello} />
  },
  {
    path: ROUTES.signin,
    element: <SignInScreen />
  },
  {
    path: ROUTES.signup,
    element: <SignUpScreen />
  },
  {
    path: ROUTES.hello,
    element: <HelloScreen />
  }
]
