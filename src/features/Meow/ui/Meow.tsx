import { ChangeEvent } from 'react'
import { useGate } from 'effector-react'
import { debounce } from 'debounce'

import { Input } from 'ui/atoms'

import { setMeow, gate } from '../model'

import * as S from './styled'

export const Meow = () => {
  const handleSetMeow = debounce(
    (e: ChangeEvent<HTMLTextAreaElement>) => setMeow({ text: e.target.value }),
    100
  )

  useGate(gate)

  return (
    <S.Wrapper>
      <Input
        emptyTextarea
        type='textarea'
        placeholder='Расскажи, что сегодня случилось?'
        onChange={handleSetMeow}
      />
    </S.Wrapper>
  )
}
