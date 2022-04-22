import { styled } from '@linaria/react'
import { COLOR, TEXT } from 'ui/vars'

export const Container = styled.div`
  display: flex;

  align-items: center;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  margin-left: 10px;
`

export const FullName = styled.p`
  ${TEXT.SMALL_MEDIUM};

  color: var(${COLOR.TEXT});
`

export const Time = styled.p`
  ${TEXT.THIN};

  color: rgba(var(${COLOR.TEXT_RGB}), 0.5);
`
