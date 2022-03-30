import * as React from 'react'

import Toggle, { ToggleProps } from '../Toggle/Toggle'

export type { ToggleProps } from '../Toggle/Toggle'

const Radio: React.FC<ToggleProps> = props => <Toggle {...props} type='radio' />

export default Radio
