import { styled } from '@linaria/react';

import { COLOR, MEDIA, TEXT } from 'ui/vars';

export const Wrapper = styled.div`
  position: relative;
  padding: 16px 20px 0;
  min-height: 48px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  box-sizing: border-box;

  @media (min-width: ${MEDIA.DESKTOP_1}) {
    padding: 16px 24px 0;
  }

  &[data-hide-header] {
    padding: 0 !important;
    min-height: 0;
  }
`;

export const Title = styled.div`
  ${TEXT.H1};
  color: var(${COLOR.TEXT});
`;
