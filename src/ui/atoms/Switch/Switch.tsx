import * as React from 'react'

import Toggle, { ToggleProps } from '../Toggle/Toggle'

export type { ToggleProps } from '../Toggle/Toggle'

const Switch: React.FC<ToggleProps> = props => <Toggle {...props} type='switch' />

export default Switch
