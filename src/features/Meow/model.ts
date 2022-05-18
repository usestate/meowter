import { createEvent, createStore } from 'effector'
import { createGate } from 'effector-react'

import { Meow } from './types'

const defaultStore: Meow = {
  text: ''
}

export const gate = createGate()

export const setMeow = createEvent<Meow>()

export const $meow = createStore<Meow>(defaultStore)

$meow.on(setMeow, (state, payload) => payload).reset(gate.close)
