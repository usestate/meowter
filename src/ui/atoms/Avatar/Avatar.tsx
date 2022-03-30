import * as React from 'react'
// @ts-ignore
import hashIndex from 'hash-index'

import { Wrapper, Image, Initials, colors } from './styled'

export interface AvatarProps {
  src?: string
  className?: string
  title?: string
  size?: number
  borderSize?: number
  onClick?: React.MouseEventHandler<HTMLElement>
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  className,
  onClick,
  size = 40,
  title,
  borderSize = 0,
  children,
  ...rest
}) => {
  const [noAvatar, setNoAvatar] = React.useState(false)

  const getInitials = React.useCallback(title => {
    if (!title) return null

    const words = `${title}`.split(' ')
    const initials =
      words.length > 1 ? `${words[0]?.[0] || ''}${words[1]?.[0]}` : words[0]?.[0] || ''

    return initials.toUpperCase()
  }, [])

  const background = React.useMemo(() => {
    if (!title) return 'none'

    const index = hashIndex(title, colors.length)
    return colors[index]
  }, [title])

  return (
    <Wrapper
      size={size}
      borderSize={borderSize}
      onClick={onClick}
      className={className}
      background={background}
      {...rest}
    >
      <Initials>{children || getInitials(title)}</Initials>

      {src && !noAvatar ? (
        <Image onError={() => setNoAvatar(true)} src={src} loading='lazy' />
      ) : null}
    </Wrapper>
  )
}

export default React.memo(Avatar)
