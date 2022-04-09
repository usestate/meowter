import { styled } from '@linaria/react'
import { COLOR, TEXT } from 'ui/vars'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 15px;

  background-color: var(${COLOR.BG});
`

export const FullName = styled.p`
  ${TEXT.SMALL_MEDIUM};

  color: var(${COLOR.TEXT});
`

export const Header = styled.div`
  display: flex;

  align-items: center;
`

export const Time = styled.p`
  ${TEXT.THIN};

  color: rgba(var(${COLOR.TEXT_RGB}), 0.5);
`

export const Text = styled.p`
  ${TEXT.SMALL};

  color: var(${COLOR.TEXT});
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  margin-left: 10px;
`

export const Content = styled.div`
  margin-top: 12px;
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 10px;
`
