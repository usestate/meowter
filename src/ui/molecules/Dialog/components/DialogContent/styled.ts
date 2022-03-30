import { styled } from '@linaria/react';

import { MEDIA, TEXT } from 'ui/vars';

export const Wrapper = styled.div`
  padding: 16px 20px;
  overflow: auto;
  max-height: 65vh;

  ${TEXT.NORMAL};

  @media (min-width: ${MEDIA.DESKTOP_1}) {
    padding: 16px 24px;
  }

  &[data-no-scroll] {
    display: flex;
    flex-direction: column;
  }

  &[data-no-actions] {
    padding-bottom: 16px;
  }

  &[data-no-padding] {
    padding: 0;

    @media (min-width: ${MEDIA.DESKTOP_1}) {
      padding: 0;
    }
  }
`;
