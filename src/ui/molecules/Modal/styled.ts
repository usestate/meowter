import { styled } from '@linaria/react'
import { css } from '@linaria/core'

import { COLOR } from 'ui/vars'

export const transitionClass = css`
  &-enter {
    opacity: 0;
  }
  &-enter-active {
    opacity: 1;
    transition: opacity 0.2s;
  }
  &-exit {
    opacity: 1;
  }
  &-exit-active {
    opacity: 0;
    transition: opacity 0.2s;
  }
`

export const Overlay = styled.div`
  top: 0;
  left: 0;
  z-index: 100;
  position: fixed;

  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  overflow: auto;
  background: rgba(var(${COLOR.TEXT_RGB}), 0.3);
`

export const Wrapper = styled.div<{ maxWidth: number }>`
  margin: auto;
  max-width: ${p => p.maxWidth}px;
`
