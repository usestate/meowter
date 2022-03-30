import * as React from 'react'

import { InteractiveIcon } from 'ui/atoms'
import { Close } from 'ui/icons/24'

import { Wrapper, Title } from './styled'

interface DialogHeaderProps {
  children: React.ReactNode
  hideCloseBtn?: boolean
  hideHeader?: boolean
  onClose: () => void
}

const DialogHeader: React.FC<DialogHeaderProps> = ({
  children,
  hideCloseBtn,
  onClose,
  hideHeader
}) => (
  <Wrapper data-hide-header={hideHeader ? true : undefined}>
    {!hideHeader && <Title>{children}</Title>}

    {!hideCloseBtn ? <InteractiveIcon onClick={onClose} disabled={!onClose} icon={Close} /> : null}
  </Wrapper>
)

export default DialogHeader
