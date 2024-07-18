import { useRef, useEffect } from 'react'
import './Chrono.css'
import { canvasDPI } from '../misc/misc'
export function Chrono ({ time }) {
  const canvas = useRef(null)
  useEffect(() => {
    const ctx = canvas.current.getContext('2d')
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height)
    ctx.fillText(`Time: ${time.toFixed(2)}s`, canvas.current.clientWidth / 2, canvas.current.clientHeight)
  }, [time])
  useEffect(() => {
    if (!canvas.current) return
    canvasDPI(window.innerWidth, 50, canvas.current)
    const ctx = canvas.current.getContext('2d')
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height)
    ctx.fillStyle = '#fff'
    ctx.font = '30px Roboto'
    ctx.textAlign = 'center'
    ctx.fillText('Time: 0.00s', canvas.current.clientWidth / 2, canvas.current.clientHeight)
  }, [canvas])
  return (
    <canvas ref={canvas} className='canvas'>Canvas not supported</canvas>
  )
}
