import * as React from 'react'

import { VARIANTS, Wrapper } from './styled'

export interface BadgeProps {
  value?: number
  maxValue?: number
  className?: string
  variant?: keyof typeof VARIANTS
}

const Badge: React.FC<BadgeProps> = ({
  value = 0,
  maxValue = 99,
  variant = 'accent',
  className,
  ...rest
}) => (
  <Wrapper data-variant={variant} className={className} {...rest}>
    {value > maxValue ? `${maxValue}+` : value || 0}
  </Wrapper>
)

export default React.memo(Badge)
