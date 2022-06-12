import { styled } from '@linaria/react'

import { COLOR, TEXT } from 'ui/vars'

import hello from './assets/hello.png'

export const Screen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  padding: 0 15px;
`

export const Heading = styled.h1`
  margin: 0 0 10px;

  ${TEXT.H1};
`

export const Description = styled.h3`
  color: var(${COLOR.SECONDARY});
  text-align: center;

  ${TEXT.NORMAL};
`

export const Cat = styled.div`
  width: 185px;
  height: 135px;
  margin: auto 0 20px 0;
  background: url(${hello});
`

export const Actions = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin: auto 0 0;

  width: 100%;

  & > * {
    width: 100%;
    margin: 0 0 20px;
  }

  a {
    text-decoration: none;
  }
`
