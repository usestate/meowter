import { styled } from '@linaria/react'

import { COLOR } from 'ui/vars'
import { InteractiveIcon } from 'ui/atoms'

import { ProfilePreview } from './ProfilePreview'

export const Profile = styled(ProfilePreview)`
  background-color: var(${COLOR.BG});

  padding: 15px 0;
`

export const Posts = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;

  margin-top: 5px;
`

export const Icon = styled(InteractiveIcon)`
  color: var(${COLOR.ACCENT});
`
