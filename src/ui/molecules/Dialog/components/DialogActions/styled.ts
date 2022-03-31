import { styled } from '@linaria/react'

import { MEDIA, COLOR } from 'ui/vars'

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;

  border-top: 1px solid var(${COLOR.SECONDARY_LIGHT});
  box-sizing: border-box;

  & > * + * {
    margin-left: 20px;
  }

  button {
    flex: 1 0 auto;
  }

  @media (min-width: ${MEDIA.DESKTOP_1}) {
    padding: 24px;
  }
`
