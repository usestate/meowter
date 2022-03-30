import * as React from 'react'
import { CSSTransition } from 'react-transition-group'

import { Portal } from 'ui/atoms'

import Dialog, { DialogProps } from '../Dialog/Dialog'
import { Overlay, Wrapper, transitionClass } from './styled'

export const modalOpenClassName = 'modal_opened'

export interface ModalProps extends DialogProps {
  opened?: boolean
  nested?: boolean
  maxWidth?: number
  closeOnOverlayClick?: number
  className?: string
  noDialog?: boolean
  children?: React.ReactNode
}

const Modal: React.FC<ModalProps> = props => {
  const {
    opened = false,
    nested = false,
    closeOnOverlayClick = true,
    maxWidth = 350,
    onClose,
    className,
    noDialog,
    children
  } = props

  const overlayRef = React.useRef(null)

  const onCloseModal = React.useCallback(() => {
    if (onClose) {
      setTimeout(onClose, 200)
    }
  }, [onClose])

  const onKeyUp = React.useCallback(
    e => {
      if (e.key === 'Escape') {
        onCloseModal()
      }
    },
    [onCloseModal]
  )

  React.useEffect(() => {
    const addBodyClass = () => {
      const { body } = document

      if (body) {
        if (!nested) {
          body.classList.add(modalOpenClassName)
        }
      }
    }

    if (opened) {
      addBodyClass()
      window.addEventListener('keyup', onKeyUp)
    } else {
      window.removeEventListener('keyup', onKeyUp)
    }
  }, [opened, nested, onKeyUp])

  React.useEffect(
    () => () => {
      const removeBodyClass = () => {
        const { body } = document

        if (body && !nested) {
          body.classList.remove(modalOpenClassName)
        }
      }

      window.removeEventListener('keyup', onKeyUp)

      removeBodyClass()
    },
    [onKeyUp, nested]
  )

  const onOverlayClick = React.useCallback(
    (e: React.MouseEvent) => {
      if (closeOnOverlayClick && e.target === overlayRef.current) {
        e.preventDefault()

        onCloseModal()
      }
    },
    [closeOnOverlayClick, onCloseModal]
  )

  return (
    <Portal>
      <CSSTransition in={opened} timeout={200} classNames={transitionClass} unmountOnExit>
        <Overlay ref={overlayRef} onClick={onOverlayClick} className={className}>
          <Wrapper maxWidth={maxWidth}>{noDialog ? children : <Dialog {...props} />}</Wrapper>
        </Overlay>
      </CSSTransition>
    </Portal>
  )
}

export default Modal
