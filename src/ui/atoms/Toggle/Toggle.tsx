import * as React from 'react'
import { nanoid } from 'nanoid'

import {
  Wrapper,
  InputControl,
  Control,
  Square,
  Label,
  Checked,
  IconWrapper,
  CheckDot,
  Circle,
  HelperText,
  SwitchDot,
  Switch
} from './styled'

const TYPES = {
  checkbox: 'checkbox',
  radio: 'radio',
  switch: 'switch'
}

export interface ToggleProps {
  onChange?: (checked: boolean, event: React.ChangeEvent) => void
  onClick?: (event: React.MouseEvent) => void
  onFocus?: (event: React.FocusEvent) => void
  onBlur?: (event: React.FocusEvent) => void
  onMouseDown?: (event: React.MouseEvent) => void
  id?: string
  label?: React.ReactNode
  disabled?: boolean
  checked?: boolean
  className?: string
  tabIndex?: number
  leftIcon?: React.JSXElementConstructor<React.SVGProps<SVGElement>>
  rightIcon?: React.JSXElementConstructor<React.SVGProps<SVGElement>>
  isLeftLabel?: React.ReactNode
  value?: HTMLInputElement['value']
  noIndicator?: boolean
  helperText?: React.ReactNode
  type?: keyof typeof TYPES | string
}

const Toggle: React.FC<ToggleProps> = ({
  onChange,
  onClick,
  onFocus,
  onBlur,
  onMouseDown,
  id,
  label,
  disabled,
  checked,
  className,
  tabIndex,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  isLeftLabel,
  value,
  noIndicator,
  helperText,
  type = TYPES.checkbox
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const uniqId = React.useRef(id ?? `toggle-${nanoid()}`)

  const onInputChange = React.useCallback(
    e => {
      if (onChange) {
        onChange(e.currentTarget.checked, e)
      }
    },
    [onChange]
  )

  const onLabelClick = React.useCallback(
    e => {
      if (onClick) {
        onClick(e)
      }

      const input = inputRef.current

      if (input) {
        input.blur()
      }
    },
    [onClick]
  )

  const onKeyDown = React.useCallback(
    e => {
      if (e.keyCode === 13 && onChange) {
        onChange(!e.currentTarget.checked, e)
      }
    },
    [onChange]
  )

  const indicator = React.useMemo(() => {
    if (noIndicator) {
      return null
    }

    switch (type) {
      case 'checkbox':
        return (
          <Square data-checked={checked ? true : undefined}>
            <Checked data-checked={checked ? true : undefined} />
          </Square>
        )
      case 'radio':
        return (
          <Circle data-checked={checked ? true : undefined}>
            <CheckDot data-checked={checked ? true : undefined} />
          </Circle>
        )
      case 'switch':
        return (
          <Switch data-checked={checked ? true : undefined}>
            <SwitchDot data-checked={checked ? true : undefined} />
          </Switch>
        )
      default:
        return null
    }
  }, [checked, type, noIndicator])

  return (
    <Wrapper className={className}>
      <InputControl
        type={type === 'radio' ? type : 'checkbox'}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        id={uniqId.current}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        checked={checked}
        ref={inputRef}
        tabIndex={tabIndex}
        value={value}
      />

      <Control
        onClick={onLabelClick}
        onMouseDown={onMouseDown}
        htmlFor={uniqId.current}
        data-checked={checked ? true : undefined}
        data-disabled={disabled ? true : undefined}
      >
        {!isLeftLabel && indicator}

        {LeftIcon && (
          <IconWrapper>
            <LeftIcon />
          </IconWrapper>
        )}

        {!!label && <Label data-is-left={isLeftLabel ? true : undefined}>{label}</Label>}

        {RightIcon && (
          <IconWrapper>
            <RightIcon />
          </IconWrapper>
        )}

        {isLeftLabel && indicator}
      </Control>
      {helperText && <HelperText>{helperText}</HelperText>}
    </Wrapper>
  )
}

export default React.memo(Toggle)
