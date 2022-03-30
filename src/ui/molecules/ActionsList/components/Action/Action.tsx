import * as React from 'react'

import { Tooltip } from 'ui/atoms'
import type { TooltipProps } from 'ui/atoms/Tooltip/Tooltip'

import { Wrapper, Container, IconWrapper, Title, SIZES } from './styled'

export interface ActionProps {
  tooltipPlacement?: TooltipProps['placement']
  className?: string
  children?: React.ReactNode
  name?: React.ReactNode
  content?: React.ReactElement
  component?: React.JSXElementConstructor<unknown>
  onClick?: () => void
  icon?: React.JSXElementConstructor<React.SVGProps<SVGElement>>
  danger?: boolean
  primary?: boolean
  noPadding?: boolean
  withBg?: boolean
  showTooltip?: boolean
  withSeparateLine?: boolean
  size?: keyof typeof SIZES
}

const Action: React.FC<ActionProps> = ({
  name,
  icon: Icon,
  danger,
  withBg,
  primary,
  component,
  className,
  children,
  content,
  noPadding,
  size = SIZES.sm,
  tooltipPlacement,
  showTooltip,
  withSeparateLine,
  ...restAction
}) =>
  content || (
    <Wrapper
      className={className}
      data-danger={danger ? true : undefined}
      data-size={size}
      data-with-separate={withSeparateLine ? true : undefined}
    >
      <Tooltip title={showTooltip && name} placement={tooltipPlacement}>
        <Container as={component} data-no-padding={noPadding ? true : undefined} {...restAction}>
          {Icon && (
            <IconWrapper
              data-with-bg={withBg ? true : undefined}
              data-primary={primary ? true : undefined}
            >
              <Icon />
            </IconWrapper>
          )}
          <Title>{name}</Title>
          {children}
        </Container>
      </Tooltip>
    </Wrapper>
  )

export default Action
