import { styled } from '@linaria/react';

import { COLOR, TEXT } from 'ui/vars'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  padding: 25px;
  
  button {
    width: 290px;
    margin: 0 0 15px 0;
  }

  > div {
    width: 290px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.div`
  margin: 0 0 10px 0;

  ${TEXT.H2};
  
  font-weight: 700;
  text-align: center;
`

export const Description = styled.div`
  color: rgba(var(${COLOR.TEXT_RGB}), 0.3);

  ${TEXT.SMALL};

  text-align: center;
`
