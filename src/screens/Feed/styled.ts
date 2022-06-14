import { styled } from '@linaria/react'

import { COLOR, TEXT } from 'ui/vars'
import { InteractiveIcon } from 'ui/atoms'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Icon = styled(InteractiveIcon)`
  color: var(${COLOR.ACCENT});
`
