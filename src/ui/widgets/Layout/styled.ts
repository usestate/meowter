import { styled } from '@linaria/react'
import { COLOR } from 'ui/vars'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;

  background-color: var(${COLOR.PRIMARY_BG});
`
