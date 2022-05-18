import { styled } from '@linaria/react'

import { COLOR, TEXT } from 'ui/vars'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const Cat = styled.div<{ src: any }>`
  width: 228px;
  height: 303px;
  margin: 0 0 20px 0;
  background: center / contain no-repeat ${p => `url(${p.src})`};
`

export const Heading = styled.div`
  margin: 0 0 10px;

  ${TEXT.H1};
`

export const Description = styled.div`
  width: 50%;
  margin: 0;
  text-align: center;

  ${TEXT.NORMAL};

  color: var(${COLOR.TEXT});
`

export const Details = styled.details`
  margin: 10px 0 0 0;
  white-space: pre-wrap;
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
