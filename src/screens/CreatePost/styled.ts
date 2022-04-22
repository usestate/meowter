import { styled } from '@linaria/react'

import { COLOR } from 'ui/vars'

export const Container = styled.div`
  position: relative;

  height: 100%;
  padding: 0 15px;
`

export const Advice = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 90%;
  height: 60px;
  padding: 10px;

  text-align: center;

  border-radius: 5px;

  background: #fff;
  color: rgba(var(${COLOR.TEXT_RGB}), 0.3);
`
