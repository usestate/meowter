import { styled } from '@linaria/react'

import { COLOR, TEXT } from 'ui/vars'

import InteractiveIcon from '../InteractiveIcon/InteractiveIcon'

export const VARIANTS = {
  success: 'success',
  alert: 'alert',
  error: 'error'
}

export const Wrapper = styled.div`
  display: flex;
  margin: 0;
  padding: 16px;
  border-radius: 4px;
  color: var(${COLOR.BG});

  &[data-variant='${VARIANTS.success}'] {
    background: var(${COLOR.ACCENT});
  }

  &[data-variant='${VARIANTS.alert}'] {
    background: var(${COLOR.ERROR_LIGHT});
  }

  &[data-variant='${VARIANTS.error}'] {
    background: var(${COLOR.ERROR});
  }
`

export const CloseIcon = styled(InteractiveIcon)`
  margin-left: auto;
  cursor: pointer;
  align-self: flex-start;
  background: none !important;
  border: none !important;

  svg {
    fill: var(${COLOR.BG});

    &:hover {
      fill: var(${COLOR.BG});
    }
  }
`

export const Text = styled.div`
  margin-right: 8px;
`

export const Title = styled.div`
  ${TEXT.MEDIUM};

  word-break: break-word;
`

export const Msg = styled.div`
  margin-top: 8px;

  ${TEXT.SMALL};
`
