import * as React from 'react'
import { MultipleFieldErrors } from 'react-hook-form'

import { CatEyeLock as EyeHide, CatEyeUnlock as EyeShow } from 'ui/icons/24'

import useCombinedRefs from 'ui/utils/hooks/useCombinedRefs'

import InteractiveIcon from '../InteractiveIcon/InteractiveIcon'

import {
  InputWrapper,
  GroupControl,
  InputControl,
  Hint,
  Label,
  TextareaControl,
  RightActions,
  SIZES
} from './styled'

const TYPES = {
  text: 'text',
  password: 'password',
  textarea: 'textarea'
}

export interface InputProps {
  value?: string | number
  name?: string
  label?: string
  className?: string
  helperText?: string
  placeholder?: string
  required?: boolean
  showHint?: boolean
  disabled?: boolean
  autoFocus?: boolean
  noRightStopPropagation?: boolean
  error?: { type: string; message?: string; types: MultipleFieldErrors }
  type?: keyof typeof TYPES | string
  onChange?: (e: React.ChangeEvent) => void
  onFocus?: (e: React.FocusEvent) => void
  onBlur?: (e: React.FocusEvent) => void
  renderLeftActions?: () => React.ReactNode
  renderAction?: () => React.ReactNode
  inputActionStyle?: React.CSSProperties
  size?: keyof typeof SIZES
}

const Input: React.FC<InputProps> = React.forwardRef<HTMLElement, InputProps>(
  (
    {
      name,
      error,
      label,
      helperText,
      className,
      type = 'text',
      onChange,
      renderAction,
      required,
      showHint = true,
      disabled,
      renderLeftActions,
      inputActionStyle,
      size = SIZES.md,
      onFocus,
      onBlur,
      noRightStopPropagation,
      autoFocus,
      ...rest
    },
    ref
  ) => {
    const defaultRef = React.useRef()
    const [showPassword, setShowPassword] = React.useState(false)
    const [focused, setFocused] = React.useState(false)

    const combinedRef = useCombinedRefs(ref, defaultRef)

    const handleFocus = React.useCallback(
      e => {
        setFocused(true)

        if (onFocus) {
          onFocus(e)
        }
      },
      [onFocus]
    )

    const handleBlur = React.useCallback(
      e => {
        setFocused(false)

        if (onBlur) {
          onBlur(e)
        }
      },
      [onBlur]
    )

    const textarea = type === TYPES.textarea

    // TODO: set correct type
    const Control: any = React.useMemo(
      () => (textarea ? TextareaControl : InputControl),
      [textarea]
    )

    const labelText = required ? `${label} *` : label

    let inputType = type

    if (type === 'password' && showPassword) {
      inputType = 'text'
    }

    const onWrapperClick = React.useCallback(() => {
      if (combinedRef?.current) {
        combinedRef.current.focus()
      }
    }, [combinedRef])

    return (
      <InputWrapper
        className={className}
        data-textarea={textarea ? true : undefined}
        data-show-hint={showHint ? true : undefined}
      >
        {label && <Label>{labelText}</Label>}

        <GroupControl
          onClick={onWrapperClick}
          data-focused={focused ? true : undefined}
          data-error={error ? true : undefined}
          data-size={size}
          data-disabled={disabled ? true : undefined}
          data-textarea={textarea ? true : undefined}
        >
          {renderLeftActions && renderLeftActions()}

          <Control
            id={name}
            onBlur={handleBlur}
            onFocus={handleFocus}
            {...rest}
            disabled={disabled}
            name={name}
            onChange={onChange}
            data-error={error ? true : undefined}
            type={inputType}
            ref={combinedRef}
            autoComplete='off'
            autoFocus={autoFocus}
          />

          <RightActions
            style={inputActionStyle}
            onClick={e => {
              if (!noRightStopPropagation) {
                e.stopPropagation()
              }
            }}
          >
            {type === TYPES.password && (
              <InteractiveIcon
                tabIndex={-1}
                onClick={() => setShowPassword(!showPassword)}
                icon={showPassword ? EyeShow : EyeHide}
              />
            )}

            {renderAction && renderAction()}
          </RightActions>

          {showHint && (
            <Hint
              status={error ? 'error' : 'normal'}
              text={error?.message ?? helperText}
              disabled={disabled}
            />
          )}
        </GroupControl>
      </InputWrapper>
    )
  }
)

export default Input
