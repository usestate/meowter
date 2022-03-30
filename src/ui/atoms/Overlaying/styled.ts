import { styled } from '@linaria/react';

export const Wrapper = styled.div<{ offset: number }>`
  display: inline-flex;
  flex-direction: row-reverse;
  align-items: center;

  & > *:not(:last-child) {
    margin-left: ${p => p.offset}px;
  }

  &[data-reverse] {
    flex-direction: row;

    & > * {
      margin-left: 0;

      :not(:first-child) {
        margin-left: ${p => p.offset}px;
      }
    }
  }
`;
