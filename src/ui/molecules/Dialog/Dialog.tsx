import * as React from 'react'

import DialogHeader from './components/DialogHeader/DialogHeader'
import DialogContent from './components/DialogContent/DialogContent'
import DialogActions, { DialogActionsProps } from './components/DialogActions/DialogActions'

import { Wrapper } from './styled'

export interface DialogProps {
  focusOnIndex?: number
  title?: React.ReactNode
  children?: React.ReactNode
  actions?: DialogActionsProps['actions']
  hideCloseBtn?: boolean
  onClose: () => void
  noScroll?: boolean
  noPadding?: boolean
  hideHeader?: boolean
  className?: string
}

const Dialog: React.FC<DialogProps> = ({
  focusOnIndex = 0,
  title = '',
  children,
  actions = [],
  hideCloseBtn = false,
  onClose,
  noScroll,
  noPadding,
  hideHeader,
  className,
  ...rest
}) => {
  const dialogRef = React.useRef<HTMLDivElement>(null)

  // Catch focus inside the dialog
  React.useEffect(() => {
    // @ts-ignore
    const getFocusableElements = () => {
      if (dialogRef.current) {
        return dialogRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      }
      return []
    }

    const focusable = getFocusableElements() as Array<HTMLElement>

    if (focusable.length > 0) {
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      // Focus on second element
      if (focusable[focusOnIndex]) {
        focusable[focusOnIndex].focus()
      }

      if (first && last) {
        // Switch to the last element on Shift + Tab
        first.addEventListener('keydown', (e: KeyboardEvent) => {
          if (e.shiftKey && e.key === 'Tab') {
            e.preventDefault()

            last.focus()
          }
        })

        // Switch to the first element on Tab
        last.addEventListener('keydown', (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            e.preventDefault()

            first.focus()
          }
        })
      }
    }
  }, [focusOnIndex])

  return (
    <Wrapper {...rest} ref={dialogRef} className={className}>
      {title || !hideCloseBtn ? (
        <DialogHeader hideHeader={hideHeader} hideCloseBtn={hideCloseBtn} onClose={onClose}>
          {title}
        </DialogHeader>
      ) : null}

      <DialogContent noScroll={noScroll} noPadding={noPadding} noActions={!actions.length}>
        {typeof children === 'function' ? children({ onCloseModal: onClose }) : children}
      </DialogContent>

      {actions.length ? <DialogActions actions={actions} /> : null}
    </Wrapper>
  )
}

export default Dialog
