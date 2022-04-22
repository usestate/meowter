import { debounce } from 'debounce'

import { Input } from 'ui/atoms'

import { setMeow } from '../model'

import * as S from './styled'

export const Meow = () => {
  const handleSetMeow = debounce(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => setMeow({ text: e.target.value }),
    100
  )

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
