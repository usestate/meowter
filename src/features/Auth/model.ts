import { createEvent, createStore } from 'effector'

import { User } from './types'

const defaultStore: User = {
  tel: null,
  email: null,
  login: null,
  firstName: null,
  lastName: null,
  about: null
}

export const setUser = createEvent<User>()

export const $user = createStore<User>(defaultStore)

$user.on(setUser, (state, payload) => payload)
