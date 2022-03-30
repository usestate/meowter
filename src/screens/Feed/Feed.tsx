import { Helmet } from 'react-helmet'

import { Button } from 'ui/atoms'
import { alert } from 'ui/alert'

export const Feed = () => {
  const sayHi = () => alert.success({ title: 'Wow!', msg: 'You clicked!' })

  return (
    <>
      <Helmet title='Feed' />

      <Button onClick={sayHi}>Click!</Button>
    </>
  )
}
