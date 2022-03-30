import * as React from 'react'
import * as ReactDOM from 'react-dom'

const rootId = 'portal-root' // add div with this id to index.html

interface PortalProps {
  children: React.ReactNode
}

const Portal: React.FC<PortalProps> = ({ children }) => {
  const elementRef = React.useRef(document.createElement('div'))

  React.useEffect(() => {
    const rootElement = document.getElementById('root')
    const overlayRoot = document.getElementById(rootId)
    const child = elementRef.current
    const parentElement = overlayRoot || rootElement || document.body

    if (parentElement) {
      parentElement.appendChild(child)
    }

    return () => {
      if (parentElement) {
        parentElement.removeChild(child)
      }
    }
  }, [])

  return ReactDOM.createPortal(children, elementRef.current)
}

export default Portal
