import React from 'react'

import { ClientError } from 'screens/Errors'

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<unknown, ErrorBoundaryState> {
  constructor(props: unknown) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <ClientError />
    }

    return this.props.children
  }
}

export default ErrorBoundary
