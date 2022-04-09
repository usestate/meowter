import { styled } from '@linaria/react'
import { ProfilePreview } from './ProfilePreview'
import { COLOR } from 'ui/vars'

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
