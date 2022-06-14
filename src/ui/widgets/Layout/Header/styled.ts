import { styled } from '@linaria/react'

import { COLOR, TEXT } from 'ui/vars'
import { InteractiveIcon } from 'ui/atoms'

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 99;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 14px 15px 13px;

  background-color: var(${COLOR.BG});
  border-bottom: 1px solid rgba(var(${COLOR.PRIMARY_MEDIUM_RGB}), 0.2);
`

export const Title = styled.h2`
  ${TEXT.H2}
`

export const Icon = styled(InteractiveIcon)`
  color: var(${COLOR.ACCENT});
`

export const Blank = styled.div`
  width: 24px;
  height: 24px;
`
