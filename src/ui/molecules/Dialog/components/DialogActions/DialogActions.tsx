import * as React from 'react'

import { Button } from 'ui/atoms'

import { Wrapper } from './styled'

interface ActionProps extends React.ComponentProps<typeof Button> {
  key: number | string
  component?: React.ReactNode
  title?: string | React.ReactNode
}

export interface DialogActionsProps {
  actions?: Array<ActionProps>
}

const DialogActions: React.FC<DialogActionsProps> = ({ actions = [], ...rest }) => (
  <Wrapper {...rest}>
    {actions.map(
      ({ key, title, component, ...rest }) =>
        component || (
          <Button key={key} {...rest}>
            {title}
          </Button>
        )
    )}
  </Wrapper>
)

export default DialogActions
