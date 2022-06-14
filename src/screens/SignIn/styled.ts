import { styled } from '@linaria/react'

import { PageTemplate } from 'ui/templates'
import { COLOR } from 'ui/vars'
import { Button } from 'ui/atoms'

export const Template = styled(PageTemplate)`
  width: 100%;
  height: 100%;

  background: var(${COLOR.BG});

  header {
    border: 0;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  padding: 0 15px 15px;

  form {
    margin: 10vh 0 0 0;
  }
`

export const Recover = styled(Button)`
  margin: auto 0 0;
`
