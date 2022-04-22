import { Helmet } from 'react-helmet'

import { PageTemplate } from 'ui/templates'

import { Wrapper } from './styled'
import { Post } from '../../features/Post'

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
  // const [isShown, setShown] = useState(false)
  //
  // const sayHi = () => alert.success({ title: 'Wow!', msg: 'You clicked!' })

  return (
    <>
      <PageTemplate title='Лента'>
        <Helmet title='Feed' />

        <Wrapper>
          {posts.map(({ id, ...post }) => (
            <Post key={id} {...post} />
          ))}
        </Wrapper>
      </PageTemplate>

      {/*<Modal*/}
      {/*  hideCloseBtn*/}
      {/*  opened={isShown}*/}
      {/*  onClose={() => setShown(false)}*/}
      {/*  actions={[{ key: 1, title: 'Ага, я понял', onClick: () => setShown(false) }]}*/}
      {/*>*/}
      {/*  <Content>*/}
      {/*    <Title>Как пользоваться приложением</Title>*/}
      {/*    <Description>*/}
      {/*      Выдели одно слово, и на его основе определится тема и составится лента*/}
      {/*    </Description>*/}
      {/*  </Content>*/}
      {/*</Modal>*/}
    </>
  )
}
