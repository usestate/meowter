import * as React from 'react'

import { Container, Circular, Circle, Text } from './styled'

export interface LoadingProps {
  inverseColor?: boolean
  loading?: boolean
  isBlocker?: boolean
  className?: string
  text?: string
  size: number
}

const Loading: React.FC<LoadingProps> = ({
  className,
  loading,
  isBlocker,
  text,
  size,
  inverseColor,
  ...rest
}) =>
  loading ? (
    <Container
      className={className}
      data-blocker={isBlocker ? true : undefined}
      size={size}
      {...rest}
    >
      <Circular size={size} viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'>
        <Circle
          cx='60'
          cy='60'
          r='50'
          strokeWidth='8'
          data-inverse-color={inverseColor ? true : undefined}
        />
      </Circular>

      {text ? <Text>{text}</Text> : null}
    </Container>
  ) : null

Loading.defaultProps = {
  loading: true,
  isBlocker: false,
  className: '',
  size: 36
}

export default React.memo(Loading)
