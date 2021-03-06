import { styled } from '@linaria/react'

import { COLOR, TRANSITION, HELPER } from 'ui/vars'

export const IconContainer = styled.button<{ size?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  border: none;
  background: transparent;
  cursor: pointer;
  transition: var(${TRANSITION.NORMAL});
  color: var(${COLOR.SECONDARY});

  ${HELPER.WITHOUT_OUTLINE};

  &:hover,
  &:focus {
    color: var(${COLOR.ACCENT});
  }

  &:active {
    color: var(${COLOR.ACCENT});
  }

  &:disabled {
    color: var(${COLOR.PRIMARY_LIGHT});
    cursor: not-allowed;
  }

  &[data-size] {
    width: ${p => p.size || 0}px;
    height: ${p => p.size || 0}px;
  }

  svg {
    flex-shrink: 0;
    fill: currentColor;
  }
`

export const WrapperForTooltip = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
