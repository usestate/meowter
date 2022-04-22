import { FC } from 'react'
import { Helmet } from 'react-helmet'

import { Meow } from 'features/Meow'

import { PageTemplate } from 'ui/templates'

import * as S from './styled'

const post = {
  id: 8128381,
  date: '12.01.2022',
  name: 'Пидор Пидорович'
}

export const CreatePostScreen: FC = () => {
  return (
    <PageTemplate title='Мяукнуть' isMeow>
      <Helmet title='Сказать мяу' />

      <S.Container>
        <Meow />

        <S.Advice>
          Выдели слово, используя тильду:
          <br />
          ~работа, чтобы составить ленту
        </S.Advice>
      </S.Container>
    </PageTemplate>
  )
}
