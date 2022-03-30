import * as React from 'react'

import { DotsHorizontal, ChevronDown, ChevronUp } from 'ui/icons/16'

import { Action } from './components'
import { Wrapper } from './styled'

const SEPARATE_VARIANTS = {
  dots: 'dots',
  chevron: 'chevron'
}

interface ActionType extends React.ComponentProps<typeof Action> {
  key: string
}

export interface ActionsListProps {
  items: Array<ActionType>
  noPadding?: boolean
  disabled?: boolean
  showAll?: boolean
  showTooltip?: boolean
  moreLabel?: string
  lessLabel?: string
  className?: string
  tooltipPlacement?: ActionType['tooltipPlacement']
  max?: number
  size?: ActionType['size']
  separateVariant?: keyof typeof SEPARATE_VARIANTS
}

const ActionsList: React.FC<ActionsListProps> = ({
  items = [],
  moreLabel = 'More',
  lessLabel = 'Less',
  max,
  showAll: initialShowAll,
  disabled,
  noPadding,
  size,
  showTooltip,
  separateVariant = SEPARATE_VARIANTS.chevron,
  tooltipPlacement,
  ...rest
}) => {
  const [showAll, setShowAll] = React.useState(initialShowAll || false)

  const separateIcon = React.useMemo(() => {
    switch (separateVariant) {
      case SEPARATE_VARIANTS.dots:
        return DotsHorizontal
      case SEPARATE_VARIANTS.chevron:
      default:
        return showAll ? ChevronUp : ChevronDown
    }
  }, [separateVariant, showAll])

  const mainActions = React.useMemo(
    () => (Number.isInteger(max) ? items.slice(0, max) : items),
    [items, max]
  )

  const hiddenActions = React.useMemo(
    () => (Number.isInteger(max) ? items.slice(max) : []),
    [items, max]
  )

  const handleChevronClick = () => setShowAll(!showAll)

  return items.length ? (
    <Wrapper {...rest}>
      {mainActions.map(({ key, ...action }) => (
        <Action
          key={key}
          tooltipPlacement={tooltipPlacement}
          noPadding={noPadding}
          size={size}
          showTooltip={showTooltip}
          {...action}
        />
      ))}

      {!!hiddenActions.length &&
        showAll &&
        hiddenActions.map(({ key, ...action }) => (
          <Action
            key={key}
            tooltipPlacement={tooltipPlacement}
            noPadding={noPadding}
            size={size}
            showTooltip={showTooltip}
            {...action}
          />
        ))}

      {hiddenActions.length ? (
        <Action
          key='show-all-btn'
          tooltipPlacement={tooltipPlacement}
          noPadding={noPadding}
          size={size}
          showTooltip={showTooltip}
          onClick={!disabled ? handleChevronClick : undefined}
          name={showAll ? lessLabel : moreLabel}
          icon={separateIcon}
        />
      ) : null}
    </Wrapper>
  ) : null
}

export default React.memo(ActionsList)
