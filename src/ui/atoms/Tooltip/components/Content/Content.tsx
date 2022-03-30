import * as React from 'react'

import { Wrapper, Container } from './styled'

interface ContentProps {
  maxWidth?: number
  outOfBoundaries?: boolean
  props?: Record<string, unknown>
  children?: React.ReactNode
  className?: string
}

const Content: React.FC<ContentProps> = ({
  children,
  props,
  outOfBoundaries,
  maxWidth,
  className,
  ...rest
}) => (
  <Wrapper
    {...props}
    className={className}
    maxWidth={maxWidth}
    data-max-width={maxWidth ?? undefined}
    data-out-of-boundaries={outOfBoundaries ? true : undefined}
    {...rest}
  >
    <Container>{children}</Container>
  </Wrapper>
)

export default Content
