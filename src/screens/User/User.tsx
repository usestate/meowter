import { FC } from 'react'
import { Helmet } from 'react-helmet'

import { PageTemplate } from 'ui/templates/PageTemplate'
import { Post } from 'feature/feed'

import * as S from './styled'

const posts = [
  {
    id: 1,
    date: '02.01.2022',
    name: 'Сергей Сурганов',
    message:
      'The major purpose of loop interchange is to take advantage of the CPU cache when accessing array elements. When a processor accesses an array element for the first time, it will retrieve an entire block of data from memory to cache. That block is likely to have many more consecutive elements after the first one, so on the next array element access, it will be brought directly from cache (which is faster than getting it from slow main memory',
    likes: 12,
    comments: 10
  },
  {
    id: 2,
    date: '11.02.2022',
    name: 'Сергей Сурганов',
    message: 'Не могу зайти к вам на сайт. Вас что, блокируют?',
    likes: 12,
    comments: 10
  },
  {
    id: 3,
    date: '12.03.2022',
    name: 'Сергей Сурганов',
    message: 'Хочу пельмени, заказал их в пятерочке, но привезли тухляк :((',
    likes: 12,
    comments: 10
  }
]

export const UserScreen: FC = () => {
  const username = '@surganov'

  return (
    <PageTemplate title={username}>
      <Helmet title={username} />

      <S.Profile />

      <S.Posts>
        {posts.map(({ id, ...post }) => (
          <Post key={id} {...post} />
        ))}
      </S.Posts>
    </PageTemplate>
  )
}
