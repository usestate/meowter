import { styled } from '@linaria/react'
import { COLOR, TEXT } from 'ui/vars'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 15px;

  background-color: var(${COLOR.BG});
`

export const Text = styled.p`
  ${TEXT.SMALL};

  color: var(${COLOR.TEXT});
`

export const Content = styled.div`
  margin-top: 12px;
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 10px;
`
