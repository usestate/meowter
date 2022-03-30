import { styled } from '@linaria/react';

import { COLOR, SHADOW, TRANSITION, TEXT } from 'ui/vars';

export const Wrapper = styled.div<{ maxWidth?: number }>`
  transition: opacity var(${TRANSITION.NORMAL});
  color: var(${COLOR.TEXT});
  box-shadow: var(${SHADOW.MEDIUM});
  background-color: var(${COLOR.BG});
  border-radius: 4px;
  border: 1px solid var(${COLOR.SECONDARY_LIGHT});
  overflow: hidden;

  &[data-max-width] {
    max-width: ${p => p.maxWidth || 0}px;
  }

  &[data-out-of-boundaries] {
    opacity: 0 !important;
  }
`;

export const Container = styled.div`
  position: relative;
  padding: 4px 8px;

  word-break: break-word;
  border-radius: 10px;

  ${TEXT.SMALL};
  color: var(${COLOR.TEXT});
  background: var(${COLOR.BG});

  z-index: 1;
`;
