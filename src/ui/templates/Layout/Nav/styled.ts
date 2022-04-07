import { styled } from '@linaria/react'
import { NavLink } from 'react-router-dom'
import { COLOR } from 'ui/vars'

export const Container = styled.nav`
  position: sticky;
  bottom: 0;
  z-index: 99;

  display: flex;
  justify-content: space-between;

  padding: 14px 30px 15px;

  background-color: var(${COLOR.BG});
  border-top: 1px solid rgba(var(${COLOR.PRIMARY_MEDIUM_RGB}), 0.2);
`

// @ts-ignore
export const Link = styled(NavLink)`
  &[aria-current='page'] {
    > button {
      color: var(${COLOR.ACCENT});
    }
  }
`
