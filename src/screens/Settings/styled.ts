import { styled } from '@linaria/react'
import { COLOR, TEXT } from 'ui/vars'
import { PageTemplate } from 'ui/templates'

export const Template = styled(PageTemplate)`
  background-color: var(${COLOR.BG});
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  padding: 20px 15px;
`

export const Form = styled.form`
  flex-direction: column;
  display: flex;
  width: 100%;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  margin-bottom: 15px;

  &:first-child {
    margin-top: 40px;
  }
`

export const Title = styled.p`
  ${TEXT.SMALL_MEDIUM};

  margin: 0 0 15px;
`
