import { styled } from '@linaria/react';

import { COLOR, SHADOW } from 'ui/vars';

export const Wrapper = styled.div`
  position: relative;
  max-width: 100%;
  min-width: 238px;
  margin: 0 10px;

  color: var(${COLOR.TEXT});
  background: var(${COLOR.BG});
  box-shadow: var(${SHADOW.MEDIUM});
  border-radius: 4px;
`;
