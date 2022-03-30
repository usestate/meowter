import { styled } from '@linaria/react';

import { COLOR, TRANSITION, TEXT } from 'ui/vars';

export const VARIANTS = {
  primary: 'primary',
  secondary: 'secondary',
  danger: 'danger',
  inline: 'inline',
};

export const SIZES = {
  sm: 'sm',
  md: 'md',
};

const hoverStyles = `
  background: var(${COLOR.ACCENT_DARK});
  color: var(${COLOR.BG});
  border-color: transparent;
`;

const activeStyles = `
  background: var(${COLOR.ACCENT_DARK});
  color: rgba(var(${COLOR.BG}), 0.5);
  border-color: transparent;
`;

const disabledStyles = `
  background: var(${COLOR.SECONDARY});
  color: var(${COLOR.BG});
  border-color: transparent;
  cursor: not-allowed;
`;

const primary = `
  background: var(${COLOR.ACCENT});
  color: var(${COLOR.BG});
  border: none;

  &:hover,
  &:focus {
    ${hoverStyles};
  }

  &:active {
    ${activeStyles};
  }

  &:disabled {
    ${disabledStyles};
  }
`;

const secondary = `
  background: transparent;
  border: 1px solid var(${COLOR.ACCENT});
  color: var(${COLOR.ACCENT});

  &:hover,
  &:focus {
    ${hoverStyles};
  }

  &:active {
    ${activeStyles};
  }

  &:disabled {
    ${disabledStyles};
  }
`;

const danger = `
  background: var(${COLOR.ERROR});
  color: var(${COLOR.BG});
  ${TEXT.MEDIUM};

  &:hover,
  &:focus {
    ${hoverStyles};
    background: var(${COLOR.ERROR_DARK});
  }

  &:active {
    ${activeStyles};
    background: var(${COLOR.ERROR_DARK});
  }

  &:disabled {
    ${disabledStyles};
  }
`;

const inline = `
  padding: 0;
  height: auto;

  color: var(${COLOR.ACCENT});
  ${TEXT.SMALL_MEDIUM};

  &:hover,
  &:focus {
    color: var(${COLOR.ACCENT_DARK});
  }

  &:active {
    color: rgba(var(${COLOR.ACCENT_DARK}), 0.5);
  }

  &:disabled {
    color: var(${COLOR.SECONDARY});
    cursor: not-allowed;
  }
`;

export const IconWrapper = styled.div`
  position: relative;

  flex-shrink: 0;
  display: flex;
  align-items: center;
  margin: 0 0 0 8px;

  &[data-left] {
    margin: 0 8px 0 0;
  }

  &[data-only-icon] {
    margin: 0;
  }

  svg {
    fill: currentColor;
  }
`;

export const Wrapper = styled.button`
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0 16px;

  border: none;
  background: transparent;
  border-radius: 4px;
  box-sizing: border-box;
  line-height: normal;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  transition: var(${TRANSITION.NORMAL});

  &[data-size='${SIZES.sm}'] {
    height: 32px;
    ${TEXT.SMALL_MEDIUM};
  }

  &[data-size='${SIZES.md}'] {
    height: 40px;
    ${TEXT.MEDIUM};
  }

  &[data-variant='${VARIANTS.primary}'] {
    ${primary};
  }

  &[data-variant='${VARIANTS.inline}'] {
    ${inline};
  }

  &[data-variant='${VARIANTS.danger}'] {
    ${danger};
  }

  &[data-variant='${VARIANTS.secondary}'] {
    ${secondary};
  }
`;

export const Loader = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(${COLOR.ACCENT});
  display: none;
  align-items: center;
  justify-content: center;

  &[data-show] {
    display: flex;
  }
`;
