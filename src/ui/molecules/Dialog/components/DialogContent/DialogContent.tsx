import * as React from 'react'

import { Wrapper } from './styled'

interface DialogContentProps {
  children: React.ReactNode
  noScroll?: boolean
  noActions?: boolean
  noPadding?: boolean
}

const DialogContent: React.FC<DialogContentProps> = ({
  children,
  noActions,
  noPadding,
  noScroll
}) => (
  <Wrapper
    className='dialog__body'
    data-no-scroll={noScroll ? true : undefined}
    data-no-actions={noActions ? true : undefined}
    data-no-padding={noPadding ? true : undefined}
  >
    {children}
  </Wrapper>
)

export default DialogContent
