import { createEvent, createStore } from 'effector'

import { Meow } from './types'

const defaultStore: Meow = {
  text: ''
}

export const setMeow = createEvent<Meow>()

export const $meow = createStore<Meow>(defaultStore)

$meow.on(setMeow, (state, payload) => payload)
