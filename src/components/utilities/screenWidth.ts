import { useState, useEffect } from 'react'

const getWidth = () => window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth

const useCurrentWidth = () => {
  const [width, setWidth] = useState(getWidth())

  useEffect(() => {
    let timeoutId: NodeJS.Timeout = null
    const resizeListener = () => {
      // Debounce for performance
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setWidth(getWidth()), 10)
    }
    window.addEventListener('resize', resizeListener)

    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [])

  return width
}

export default useCurrentWidth