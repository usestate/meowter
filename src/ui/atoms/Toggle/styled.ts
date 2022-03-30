import { styled } from '@linaria/react';

import { Check as CheckedIcon } from 'ui/icons/16';
import { COLOR, TEXT, TRANSITION, SHADOW } from 'ui/vars';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  color: var(${COLOR.TEXT});
  ${TEXT.MEDIUM};
`;

export const Checked = styled(CheckedIcon)`
  position: absolute;
  top: -2px;
  left: -2px;

  fill: var(${COLOR.ACCENT});
  transition: var(${TRANSITION.NORMAL});
  opacity: 0;

  &[data-checked] {
    opacity: 1;
  }
`;

const commonIndicatorStyles = `
  position: relative;

  flex-shrink: 0;

  transition: var(${TRANSITION.NORMAL});
`;

export const Square = styled.div`
  ${commonIndicatorStyles};
  width: 16px;
  height: 16px;
  margin: 4px;

  background: transparent;
  border: 2px solid rgba(var(${COLOR.ACCENT_RGB}), 0.8);
  border-radius: 3px;

  &[data-checked] {
    background: rgba(var(${COLOR.ACCENT_RGB}), 0.15);
    border-color: transparent;
  }
`;

export const CheckDot = styled.div`
  width: 8px;
  height: 8px;

  border-radius: 50%;
  background: transparent;

  &[data-checked] {
    background: var(${COLOR.BG});
  }
`;

export const Circle = styled.div`
  ${commonIndicatorStyles};
  width: 16px;
  height: 16px;
  margin: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border: 2px solid rgba(var(${COLOR.ACCENT_RGB}), 0.8);
  border-radius: 50%;

  &[data-checked] {
    background: var(${COLOR.ACCENT});
    border-color: transparent;
  }
`;

export const SwitchDot = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;

  width: 12px;
  height: 12px;

  border-radius: 50%;
  background: var(${COLOR.BG});
  transition: var(${TRANSITION.NORMAL});

  &[data-checked] {
    left: 18px;
  }
`;

export const Switch = styled.div`
  ${commonIndicatorStyles};

  position: relative;

  width: 32px;
  height: 16px;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 24px;
  color: var(${COLOR.BG});
  background: var(${COLOR.SECONDARY});

  &[data-checked] {
    background: var(${COLOR.ACCENT});
  }
`;

export const Label = styled.div`
  flex-shrink: 1;
  margin: 0 0 0 8px;

  transition: var(${TRANSITION.NORMAL});
  color: inherit;
  hyphens: auto;
  overflow-wrap: break-word;
  word-wrap: break-word;

  &[data-is-left] {
    margin: 0 8px 0 0;
  }
`;

export const Control = styled.label`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  user-select: none;

  &:hover,
  &:focus,
  &:active {
    ${Square} {
      border-color: var(${COLOR.ACCENT});
    }

    ${Circle} {
      border-color: var(${COLOR.ACCENT});
    }

    ${Switch} {
      box-shadow: var(${SHADOW.LIGHT});
    }

    ${Label} {
      color: var(${COLOR.ACCENT});
    }
  }

  &[data-disabled] {
    cursor: default;

    ${Square} {
      border-color: rgba(var(${COLOR.ACCENT_RGB}), 0.15);
    }

    ${Circle} {
      border-color: rgba(var(${COLOR.ACCENT_RGB}), 0.15);
    }

    ${CheckDot} {
      background: transparent;
    }

    ${Switch} {
      box-shadow: none;
    }

    ${Label} {
      color: var(${COLOR.PRIMARY_LIGHT});
    }
  }

  &[data-disabled]&[data-checked] {
    ${Square} {
      background: rgba(var(${COLOR.ACCENT_RGB}), 0.05);
      border-color: transparent;
    }

    ${Checked} {
      fill: rgba(var(${COLOR.ACCENT_RGB}), 0.15);
    }

    ${Circle} {
      background: rgba(var(${COLOR.ACCENT_RGB}), 0.15);
      border-color: transparent;
    }

    ${CheckDot} {
      background: var(${COLOR.BG});
    }

    ${Switch} {
      background: rgba(var(${COLOR.ACCENT_RGB}), 0.15);
    }
  }
`;

export const InputControl = styled.input`
  position: absolute;
  left: -9999px;

  &:focus:checked + ${Control} {
    ${Label} {
      color: var(${COLOR.ACCENT});
    }
  }

  &:focus:not(:checked) + ${Control} {
    ${Square} {
      border-color: var(${COLOR.ACCENT});
    }

    ${Circle} {
      border-color: var(${COLOR.ACCENT});
    }

    ${Label} {
      color: var(${COLOR.ACCENT});
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-shrink: 0;

  svg {
    flex-shrink: 0;

    fill: var(${COLOR.PRIMARY_MEDIUM});
  }
`;

export const HelperText = styled.div`
  padding-left: 36px;
  ${TEXT.SMALL};
  color: var(${COLOR.PRIMARY_MEDIUM});
`;
