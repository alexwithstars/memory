import { useChrono } from '../hooks/useChrono'
import { useRef, useEffect } from 'react'
import './Chrono.css'
import { canvasDPI } from '../misc/misc'
export function Chrono ({ running }) {
  const canvas = useRef(null)
  const [time, setRuning] = useChrono()
  useEffect(() => {
    setRuning(running)
  }, [running])
  useEffect(() => {
    const ctx = canvas.current.getContext('2d')
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height)
    ctx.fillText(`Time: ${time.toFixed(2)}s`, 50, 50)
  }, [time])
  useEffect(() => {
    if (!canvas.current) return
    canvasDPI(window.innerWidth, window.innerHeight, canvas.current)
    const ctx = canvas.current.getContext('2d')
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height)
    ctx.fillStyle = '#fff'
    ctx.font = '30px Roboto'
    ctx.fillText('Time: 0.00s', 50, 50)
  }, [canvas])
  return (
    <canvas ref={canvas} className='canvas'>Canvas not supported</canvas>
  )
}
