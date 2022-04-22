import { FC } from 'react'
import { Helmet } from 'react-helmet'

import { PageTemplate } from 'ui/templates'
import { User } from 'ui/molecules'

import * as S from './styled'

const post = {
  id: 8128381,
  date: '12.01.2022',
  name: 'Пидор Пидорович'
}

export const CommentsScreen: FC = () => {
  return (
    <PageTemplate title='Обсуждение'>
      <Helmet title='Обсуждение' />

      <S.Container>
        <User date={post.date} name={post.name} />
      </S.Container>
    </PageTemplate>
  )
}
