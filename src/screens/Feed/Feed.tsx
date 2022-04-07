import { useState } from 'react'
import { Helmet } from 'react-helmet'

import { alert } from 'ui/alert'
import { Button, Input } from 'ui/atoms'
import { Modal } from 'ui/molecules'
import { Layout } from 'ui/templates/Layout'

import { Wrapper, Content, Title, Description } from './styled'

export const FeedScreen = () => {
  const [isShown, setShown] = useState(false)

  const sayHi = () => alert.success({ title: 'Wow!', msg: 'You clicked!' })

  return (
    <>
      <Layout>
        <Helmet title='Feed' />

        <Layout.Header title='Лента' />

        <Layout.Content>
          <Wrapper>
            <Button variant='secondary' onClick={() => setShown(!isShown)}>
              Modal!
            </Button>
            <Button disabled onClick={sayHi}>
              No Click...
            </Button>

            <Input error value='hellogolyanov@go.g' helperText='Неправильный логин' />
          </Wrapper>
        </Layout.Content>

        <Layout.Nav />
      </Layout>

      <Modal
        hideCloseBtn
        opened={isShown}
        onClose={() => setShown(false)}
        actions={[{ key: 1, title: 'Ага, я понял', onClick: () => setShown(false) }]}
      >
        <Content>
          <Title>Как пользоваться приложением</Title>
          <Description>
            Выдели одно слово, и на его основе определится тема и составится лента
          </Description>
        </Content>
      </Modal>
    </>
  )
}
