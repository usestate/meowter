import * as React from 'react'

import { Wrapper } from './styled'

export interface OverlayingProps {
  reverse?: boolean
  offset: number
  className?: string
}

const Overlaying: React.FC<OverlayingProps> = ({
  offset = -16,
  reverse,
  children,
  className,
  ...rest
}) => (
  <Wrapper
    offset={offset}
    data-reverse={reverse ? true : undefined}
    className={className}
    {...rest}
  >
    {children}
  </Wrapper>
)

export default Overlaying
