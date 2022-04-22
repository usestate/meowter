import { debounce } from 'debounce'
import { ChangeEvent } from 'react'

import { Input } from 'ui/atoms'

import { setMeow, gate } from '../model'

import * as S from './styled'
import { useGate } from 'effector-react'

export const Meow = () => {
  const handleSetMeow = debounce(
    (e: ChangeEvent<HTMLTextAreaElement>) => setMeow({ text: e.target.value }),
    100
  )

  useGate(gate)

  return (
    <S.Wrapper>
      <Input
        type='textarea'
        placeholder='Расскажи, что сегодня случилось?'
        onChange={handleSetMeow}
      />
    </S.Wrapper>
  )
}
