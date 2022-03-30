import { Helmet } from 'react-helmet'

import { Button, Input } from 'ui/atoms'
import { alert } from 'ui/alert'

import { Wrapper } from './styled'

export const Feed = () => {
  const sayHi = () => alert.success({ title: 'Wow!', msg: 'You clicked!' })

  return (
    <>
      <Helmet title='Feed' />

      <Wrapper>
        <Button onClick={sayHi}>Click!</Button>
        <Button variant='secondary' onClick={sayHi}>Click!</Button>
        <Button disabled onClick={sayHi}>Click!</Button>

        <Input placeholder='Почта или телефон' />
        <Input value='Почта или телефон' />
        <Input placeholder='Почта или телефон' disabled />
        <Input label='Имя' />
        <Input error value='hellogolyanov@go.g' helperText='Неправильный логин' />
      </Wrapper>
    </>
  )
}
