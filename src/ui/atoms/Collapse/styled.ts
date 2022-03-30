import { styled } from '@linaria/react';

import { ChevronRight } from 'ui/icons/16';

import { COLOR, TRANSITION, TEXT } from 'ui/vars';

export const Icon = styled(ChevronRight)`
  margin-right: 6px;
  flex-shrink: 0;

  fill: var(${COLOR.PRIMARY_MEDIUM});
  transition: var(${TRANSITION.NORMAL});

  &[data-opened] {
    transform: rotate(90deg);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 16px;

  ${TEXT.SMALL_MEDIUM};
  color: var(${COLOR.PRIMARY_MEDIUM});
  background: var(${COLOR.SECONDARY});
  cursor: pointer;
  user-select: none;
`;
