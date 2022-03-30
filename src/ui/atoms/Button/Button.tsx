import * as React from 'react'

import Loading from '../Loading/Loading'

import { Wrapper, Loader, IconWrapper, VARIANTS, SIZES } from './styled'

export interface ButtonProps {
  variant?: keyof typeof VARIANTS
  size?: keyof typeof SIZES
  iconLeft?: React.JSXElementConstructor<unknown>
  iconRight?: React.JSXElementConstructor<unknown>
  type?: 'submit' | 'reset' | 'button'
  disabled?: boolean
  loading?: boolean
  onClick?: React.MouseEventHandler<HTMLElement>
  children?: React.ReactNode
  className?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      variant = 'primary',
      size = 'md',
      children,
      iconLeft: IconLeft,
      iconRight: IconRight,
      loading,
      disabled,
      className,
      ...rest
    },
    ref
  ) => (
    <Wrapper
      type={type}
      ref={ref}
      disabled={disabled || loading}
      data-variant={variant}
      data-size={size}
      className={className}
      {...rest}
    >
      {!!IconLeft && (
        <IconWrapper data-left data-only-icon={!children ? true : undefined}>
          <IconLeft />
        </IconWrapper>
      )}
      <span>{children}</span>
      {!!IconRight && (
        <IconWrapper data-only-icon={!children ? true : undefined}>
          <IconRight />
        </IconWrapper>
      )}

      <Loader data-show={loading ? true : undefined}>
        <Loading size={18} inverseColor />
      </Loader>
    </Wrapper>
  )
)

export default Button
