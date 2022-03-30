import * as React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { Wrapper, Text, VARIANTS } from './styled'

const timeout = 200

export interface HintProps {
  text?: string
  className?: string
  disabled?: boolean
  status?: keyof typeof VARIANTS
}

const Hint: React.FC<HintProps> = ({
  text,
  className,
  status = VARIANTS.normal,
  disabled,
  ...rest
}) => (
  <Wrapper
    data-has-text={text ? true : undefined}
    className={className}
    timeout={timeout}
    {...rest}
  >
    <TransitionGroup>
      {text && (
        <CSSTransition key={text} timeout={timeout} classNames='text'>
          <Text title={text} data-status={status} data-disabled={disabled}>
            {text}
          </Text>
        </CSSTransition>
      )}
    </TransitionGroup>
  </Wrapper>
)

export default Hint
