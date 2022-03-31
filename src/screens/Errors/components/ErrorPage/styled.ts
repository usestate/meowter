import { styled } from '@linaria/react'

import { COLOR, TEXT } from 'ui/vars'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(${COLOR.BG});
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  width: 100%;
  max-width: 720px;

  background: var(${COLOR.BG});
  border-radius: 40px;
`

export const Actions = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 40px 0 20px;

  & > * {
    margin: 0 10px 20px;
  }

  a {
    text-decoration: none;
  }
`

export const Title = styled.h1`
  margin: 40px 0 30px;

  color: var(${COLOR.TEXT});
  ${TEXT.H1};
  text-align: center;
`

export const Msg = styled.p`
  color: var(${COLOR.SECONDARY});
  ${TEXT.H2};
  text-align: center;
`
