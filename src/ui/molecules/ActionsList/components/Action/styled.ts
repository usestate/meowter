import { styled } from '@linaria/react';

import { COLOR, TRANSITION, HELPER, TEXT } from 'ui/vars';

export const SIZES = {
  sm: 'sm',
  md: 'md',
};

export const Wrapper = styled.div`
  width: 100%;

  & > * {
    display: flex;
    align-items: center;
    width: 100%;

    border-radius: 4px;
    color: var(${COLOR.TEXT});
    background: none;
    border: none;
    cursor: pointer;
    transition: var(${TRANSITION.NORMAL});
    overflow: hidden;
    ${HELPER.WITHOUT_OUTLINE};

    &:hover,
    &:focus {
      color: var(${COLOR.ACCENT});
      background: rgba(var(${COLOR.ACCENT_RGB}), 0.05);

      svg {
        fill: var(${COLOR.ACCENT});
      }
    }

    &:disabled {
      color: var(${COLOR.SECONDARY});

      &:hover,
      &:focus {
        background: none;
        cursor: not-allowed;
      }
    }
  }

  &[data-danger] {
    & > * {
      &:hover,
      &:focus {
        color: var(${COLOR.ERROR});
        background: rgba(var(${COLOR.ERROR_RGB}), 0.05);

        svg {
          fill: var(${COLOR.ERROR});
        }
      }
    }
  }

  &[data-with-separate-line] {
    & > * {
      border-top: 1px solid var(${COLOR.SECONDARY});
    }
  }

  &[data-size='${SIZES.sm}'] {
    & > * {
      padding: 10px 12px;
    }
  }

  &[data-size='${SIZES.md}'] {
    & > * {
      padding: 10px 24px;
    }
  }
`;

export const Container = styled.button`
  color: inherit;

  &[data-no-padding] {
    padding: 0;
  }
`;

export const Title = styled.p`
  margin: 0;

  ${TEXT.NORMAL};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  flex-shrink: 0;

  &[data-with-bg] {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    background: var(${COLOR.ACCENT_LIGHT});

    &[data-primary] {
      background: var(${COLOR.SECONDARY});
    }
  }

  svg {
    fill: var(${COLOR.TEXT});
    transition: var(${TRANSITION.NORMAL});
  }

  &[data-primary] {
    svg {
      fill: var(${COLOR.ACCENT});
    }
  }
`;
