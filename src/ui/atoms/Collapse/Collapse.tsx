import * as React from 'react'

import { Wrapper, Header, Icon } from './styled'

export interface CollapseProps {
  className?: string
  defaultOpen?: boolean
  title?: React.ReactNode
}

const Collapse: React.FC<CollapseProps> = ({
  title,
  defaultOpen,
  children,
  className,
  ...rest
}) => {
  const [opened, setOpened] = React.useState(defaultOpen)

  const handleClick = React.useCallback(() => setOpened(prevValue => !prevValue), [])

  return (
    <Wrapper className={className} {...rest}>
      <Header onClick={handleClick}>
        <Icon data-opened={opened ? true : undefined} />

        {title}
      </Header>

      {opened && children}
    </Wrapper>
  )
}

export default Collapse
