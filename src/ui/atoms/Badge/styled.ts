import { styled } from '@linaria/react'

import { COLOR, TEXT } from 'ui/vars'

export const VARIANTS = {
  accent: 'accent',
  alert: 'alert',
  error: 'error',
  secondary: 'secondary',
  success: 'success'
}

export const Wrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  padding: 4px 8px;
  width: auto;
  min-width: 24px;
  height: 24px;

  ${TEXT.SMALL_MEDIUM};
  border-radius: 14px;
  color: var(${COLOR.BG});

  &[data-variant='${VARIANTS.accent}'] {
    background: var(${COLOR.ACCENT});
  }

  &[data-variant='${VARIANTS.alert}'] {
    background: var(${COLOR.ALERT_PRIMARY});
  }

  &[data-variant='${VARIANTS.error}'] {
    background: var(${COLOR.ERROR});
  }

  &[data-variant='${VARIANTS.secondary}'] {
    background: var(${COLOR.SECONDARY});
  }

  &[data-variant='${VARIANTS.success}'] {
    background: var(${COLOR.SUCCESS_PRIMARY});
  }
`
