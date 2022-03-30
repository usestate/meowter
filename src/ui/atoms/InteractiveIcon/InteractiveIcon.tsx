import * as React from 'react'

import Tooltip from '../Tooltip/Tooltip'

import { IconContainer, WrapperForTooltip } from './styled'

type TooltipProps = React.ComponentProps<typeof Tooltip>

export interface InteractiveIconProps {
  label?: React.ReactNode
  tooltipPlacement?: TooltipProps['placement']
  size?: number
  tabIndex?: number
  icon?: React.JSXElementConstructor<React.SVGProps<SVGElement>>
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  onMouseDown?: React.MouseEventHandler<HTMLButtonElement>
  children?: React.ReactNode
  className?: string
}

const InteractiveIcon = React.forwardRef<HTMLButtonElement, InteractiveIconProps>(
  (
    {
      onClick,
      onMouseDown,
      children,
      icon: Icon,
      label,
      tooltipPlacement,
      size,
      className,
      ...rest
    },
    ref
  ) => {
    const handleClick = React.useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
          e.preventDefault()

          onClick(e)
        }
      },
      [onClick]
    )

    const handleMouseDown = React.useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onMouseDown) {
          onMouseDown(e)
        }

        setTimeout(() => {
          // @ts-ignore
          const { current } = ref || {}

          if (current && current.blur && typeof current.blur === 'function') {
            current.blur()
          }
        }, 0)
      },
      [ref, onMouseDown]
    )

    return (
      <IconContainer
        type='button'
        {...rest}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        ref={ref}
        className={className}
        data-size={size ? true : undefined}
      >
        <Tooltip title={label} placement={tooltipPlacement}>
          <WrapperForTooltip>{Icon ? <Icon /> : children}</WrapperForTooltip>
        </Tooltip>
      </IconContainer>
    )
  }
)

export default InteractiveIcon
