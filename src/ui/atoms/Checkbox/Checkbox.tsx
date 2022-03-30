import * as React from 'react'

import Toggle, { ToggleProps } from '../Toggle/Toggle'

export type { ToggleProps } from '../Toggle/Toggle'

const Checkbox: React.FC<ToggleProps> = props => <Toggle {...props} type='checkbox' />

export default Checkbox
