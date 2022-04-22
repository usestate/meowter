import { FC } from 'react'

import { Modal } from 'ui/molecules'
import { alert } from 'ui/alert'

import * as S from './styled'

interface Props {
  shown: boolean
  setShown: (isShown: boolean) => void
}

export const OnBoarding: FC<Props> = ({ shown, setShown }) => {
  const sayHi = () => {
    alert.success({ title: 'Ого!', msg: 'Вы все поняли!' })
    setShown(false)
  }

  return (
    <Modal
      hideCloseBtn
      opened={shown}
      onClose={() => setShown(false)}
      actions={[{ key: 1, title: 'Ага, я понял', onClick: sayHi }]}
    >
      <S.Content>
        <S.Info>Как пользоваться приложением</S.Info>
        <S.Description>
          Выдели одно слово, и на его основе определится тема и составится лента
        </S.Description>
      </S.Content>
    </Modal>
  )
}
