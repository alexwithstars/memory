import { useState, useEffect, useRef } from 'react'

export function useChrono () {
  const [runing, setRuning] = useState(false)
  const [time, setTime] = useState(0)
  const initialTime = useRef(0)
  const requestFrame = useRef(null)
  const chrono = () => {
    requestFrame.current = window.requestAnimationFrame(chrono)
    setTime((performance.now() - initialTime.current) / 1000)
  }
  useEffect(() => {
    if (runing) {
      initialTime.current = performance.now()
      requestFrame.current = window.requestAnimationFrame(chrono)
    }
    return () => window.cancelAnimationFrame(requestFrame.current)
  }, [runing])
  return [time, setRuning]
}
