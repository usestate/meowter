import { styled } from '@linaria/react';

import { COLOR, TEXT } from 'ui/vars';

export const VARIANTS = {
  normal: 'normal',
  alert: 'alert',
  error: 'error',
};

export const Wrapper = styled.div<{ timeout: number }>`
  pointer-events: none;

  &[data-has-text] {
    pointer-events: auto;
  }

  .text-enter {
    opacity: 0;
    transform: translate(0, -10px);
  }

  .text-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: ${p => p.timeout}ms ease-in;
    transition-property: opacity, transform;
  }

  .text-exit {
    opacity: 1;
    transform: translate(0, 0);
  }

  .text-exit-active {
    opacity: 0;
    transform: translate(0, -10px);
    transition: ${p => p.timeout}ms ease-in;
    transition-property: opacity, transform;
  }
`;

export const Text = styled.div`
  ${TEXT.SMALL};

  &[data-status='${VARIANTS.normal}'] {
    color: var(${COLOR.PRIMARY_MEDIUM});
  }

  &[data-status='${VARIANTS.alert}'] {
    color: var(${COLOR.ALERT_PRIMARY});
  }

  &[data-status='${VARIANTS.error}'] {
    color: var(${COLOR.ERROR});
  }

  &[data-disabled] {
    color: var(${COLOR.SECONDARY});
  }

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
