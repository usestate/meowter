import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useStore } from 'effector-react'

import { PageTemplate } from 'ui/templates'

import { Post } from 'features/Post'
import { WelcomeModal } from 'features/OnBoarding'
import { $user } from 'features/Auth/model'

import { Wrapper, Icon } from './styled'
import { CircleInfo as Info } from 'ui/icons/24'

const posts = [
  {
    id: 1,
    date: '02.01.2022',
    name: 'Валя Андреич',
    message:
      'The major purpose of ~loop interchange~ is to take advantage of the CPU cache when accessing array elements. When a processor accesses an array element for the first time, it will retrieve an entire block of data from memory to cache. That block is likely to have many more consecutive elements after the first one, so on the next array element access, it will be brought directly from cache (which is faster than getting it from slow main memory',
    likes: 12,
    comments: 10
  },
  {
    id: 2,
    date: '11.02.2022',
    name: 'Валя Андреич',
    message: 'Не могу зайти к вам на ~сайт. Вас что, блокируют?',
    likes: 12,
    comments: 10
  },
  {
    id: 3,
    date: '12.03.2022',
    name: 'Валя Андреич',
    message: 'Хочу ~пельмени, заказал их в пятерочке, но привезли тухляк :((',
    likes: 12,
    comments: 10
  }
]

export const FeedScreen = () => {
  const user = useStore($user)

  const [shown, setShown] = useState(false)

  const openModal = () => setShown(true)

  return (
    <PageTemplate
      title='Лента'
      isAllowed={!!user.login}
      rightAction={<Icon icon={Info} onClick={openModal} />}
    >
      <Helmet title='Лента' />

      <Wrapper>
        {posts.map(({ id, ...post }) => (
          <Post key={id} {...post} />
        ))}
      </Wrapper>

      <WelcomeModal shown={shown} setShown={setShown} />
    </PageTemplate>
  )
}
