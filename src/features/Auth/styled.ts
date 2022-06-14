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

  margin: 15px 0 0 0;
`

export const Field = styled(Input)``

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 235px;
  height: 20px;

  color: var(${COLOR.ACCENT});
  ${TEXT.THIN};

  text-align: center;

  cursor: pointer;

  &:hover,
  &:focus {
    color: var(${COLOR.ACCENT_DARK});
  }

  &:active {
    color: rgba(var(${COLOR.ACCENT_DARK}), 0.5);
  }

  input {
    position: absolute;

    width: 100%;
    height: 100%;
    padding: 15px 0 15px;

    opacity: 0;

    cursor: pointer;
  }
`

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
