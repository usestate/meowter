import { styled } from '@linaria/react'

import { COLOR, TEXT } from 'ui/vars'

import { Button, Input } from 'ui/atoms'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Accept = styled(Button)`
  width: 100%;
`

export const Field = styled(Input)``

export const Description = styled.div`
  margin: 0 0 20px;

  color: var(${COLOR.SECONDARY});

  text-align: center;

  ${TEXT.NORMAL};
`

export const Heading = styled.div`
  margin: 0 0 10px;

  ${TEXT.H1};
`
