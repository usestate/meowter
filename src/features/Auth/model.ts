import { createEvent, createStore } from 'effector'

import { User } from './types'

const defaultStore: User = {
  username: null,
  login: null,
  password: null
}

export const setUser = createEvent<User>()

export const $user = createStore<User>(defaultStore)

$user.on(setUser, (state, payload) => payload)
