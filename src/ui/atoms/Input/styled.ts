import { styled } from '@linaria/react';
import TextareaAutosize from 'react-textarea-autosize';

import { COLOR, TEXT } from 'ui/vars';

import _Hint from '../Hint/Hint';

export const SIZES = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

export const InputWrapper = styled.div`
  position: relative;

  width: 100%;
  display: flex;
  flex-direction: column;

  &[data-textarea] {
    min-width: 208px;
  }

  &[data-show-hint] {
    padding-bottom: 20px;
  }
`;

export const GroupControl = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 16px;

  border: 1px solid var(${COLOR.SECONDARY});
  border-radius: 4px;
  background: var(${COLOR.BG});
  transition: 0.2s ease-in-out;
  transition-property: border, background;

  &:hover,
  &:focus {
    border-color: var(${COLOR.ACCENT});
    background: var(${COLOR.BG});
    cursor: text;
  }

  &[data-size='${SIZES.sm}'] {
    min-height: auto;
    height: 32px;

    input,
    textarea {
      padding: 8px 0;
    }

    &[data-textarea] {
      min-height: 32px;
      height: auto;
    }
  }

  &[data-size='${SIZES.md}'] {
    min-height: auto;
    height: 40px;

    input,
    textarea {
      padding: 8px 0;
    }

    &[data-textarea] {
      min-height: 40px;
      height: auto;
    }
  }

  &[data-size='${SIZES.lg}'] {
    min-height: auto;
    height: 48px;

    input,
    textarea {
      padding: 12px 0;
    }

    &[data-textarea] {
      min-height: 48px;
      height: auto;
    }
  }

  &[data-focused] {
    border-color: var(${COLOR.ACCENT});
    background: var(${COLOR.BG});
    cursor: text;
  }

  &[data-error] {
    border-color: var(${COLOR.ERROR});
  }

  &[data-disabled] {
    border-color: var(${COLOR.SECONDARY_LIGHT});
    background: var(${COLOR.SECONDARY_LIGHT});
  }
`;

export const Hint = styled(_Hint)`
  position: absolute;
  left: 0;
  bottom: -20px;
  height: 15px;
  margin-top: 8px;

  width: 100%;
`;

const controlStyle = `
  padding: 0;
  width: 100%;
  height: 100%;

  box-shadow: none;
  border: none;
  box-sizing: border-box;

  ${TEXT.MAIN_FONT_FAMILY};
  ${TEXT.NORMAL};
  color: var(${COLOR.TEXT});
  background: transparent;

  outline: none;

  &:disabled {
    color: var(${COLOR.PRIMARY_LIGHT});
  }

  &::placeholder {
    color: var(${COLOR.PRIMARY_LIGHT});
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px var(${COLOR.BG}) inset !important;
    -webkit-text-fill-color: var(${COLOR.TEXT}) !important;
  }

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const InputControl = styled.input`
  ${controlStyle};
`;

export const TextareaControl = styled(TextareaAutosize)`
  ${controlStyle};

  max-height: 100%;

  display: block;

  white-space: normal;
  overflow: auto;
  resize: none;
`;

export const RightActions = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  height: 100%;
  flex-shrink: 0;
`;

export const Label = styled.p`
  display: block;
  width: 100%;
  margin-bottom: 8px;

  pointer-events: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  ${TEXT.SMALL_MEDIUM};

  color: var(${COLOR.PRIMARY_MEDIUM});
`;
