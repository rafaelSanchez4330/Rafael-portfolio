import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function RouteScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        document.getElementById(hash.slice(1))?.scrollIntoView()
        return
      }

      window.scrollTo(0, 0)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}
