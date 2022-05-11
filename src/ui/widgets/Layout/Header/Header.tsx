import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { WelcomeModal } from 'features/OnBoarding'

import { ChevronLeft, CircleInfo as Info } from 'ui/icons/24'

import * as S from './styled'

interface Props {
  title: string
  rightAction?: React.ReactNode
}

export const Header: FC<Props> = ({ title, rightAction }) => {
  const navigation = useNavigate()

  const [shown, setShown] = useState(false)

  const handleGoBack = () => navigation(-1)
  const openModal = () => setShown(true)

  return (
    <>
      <S.Container>
        <S.Icon icon={ChevronLeft} onClick={handleGoBack} />
        <S.Title>{title}</S.Title>
        {rightAction ? rightAction : <S.Icon icon={Info} onClick={openModal} />}
      </S.Container>

      <WelcomeModal shown={shown} setShown={setShown} />
    </>
  )
}
