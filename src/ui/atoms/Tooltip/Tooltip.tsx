import * as React from 'react'
import Popover from '@yumkit/popover'

import { Content, Transition } from './components'

type PopoverProps = React.ComponentProps<typeof Popover>

const offsets: PopoverProps['offsets'] = [0, 7.5]
const modifiers = [{ name: 'arrow', options: { padding: 7 } }]
const triggerMap = {
  focus: 'focus',
  click: 'click-autoclose',
  hover: 'hover-interactive'
}

export interface TooltipProps {
  title?: React.ReactNode
  opened?: PopoverProps['opened']
  usePortal?: PopoverProps['usePortal']
  placement?: PopoverProps['placement']
  trigger?: 'click' | 'manual' | 'focus' | 'hover'
  tether?: boolean
  boundary?: PopoverProps['overflowBoundary']
  children: PopoverProps['children']
  className?: string
  hideOnClick?: boolean
  hideOnScroll?: boolean
  maxWidth?: number
  renderContent?: PopoverProps['renderContent']
}

const Tooltip: React.FC<TooltipProps> = ({
  title,
  usePortal = true,
  opened = false,
  hideOnScroll = false,
  placement = 'top',
  children,
  trigger = 'hover',
  tether,
  boundary,
  maxWidth,
  className,
  renderContent,
  ...rest
}) => {
  if (!renderContent && !title) return children

  return (
    <Popover
      usePortal={usePortal}
      placement={placement}
      // @ts-ignore
      trigger={triggerMap[trigger]}
      opened={opened}
      hideOnScroll={hideOnScroll}
      modifiers={modifiers}
      tether={tether}
      offsets={offsets}
      overflowBoundary={boundary}
      renderDropdown={props => <Transition {...props} />}
      renderContent={props => (
        <Content {...props} maxWidth={maxWidth} className={className} {...rest}>
          {renderContent ? renderContent(props) : title}
        </Content>
      )}
    >
      {children}
    </Popover>
  )
}

export default Tooltip
