import { styled } from '@linaria/react'
import { TEXT } from 'ui/vars'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.p`
  margin-top: 15px;

  ${TEXT.MEDIUM};
`

export const About = styled.p`
  margin: 5px 0 10px;

  ${TEXT.SMALL};
`

export const Count = styled.p`
  ${TEXT.SMALL_MEDIUM};
`

export const Description = styled.p`
  ${TEXT.THIN};
`

export const CountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Statistics = styled.div`
  display: flex;

  gap: 10px;

  margin-bottom: 15px;
`
