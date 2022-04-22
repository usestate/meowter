import { createEvent, createStore } from 'effector'

import { Meow } from './types'
import { createGate } from 'effector-react'

const defaultStore: Meow = {
  text: ''
}

export const gate = createGate()

export const setMeow = createEvent<Meow>()

export const $meow = createStore<Meow>(defaultStore)

$meow.on(setMeow, (state, payload) => payload).reset(gate.close)
