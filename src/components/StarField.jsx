import { useEffect, useRef } from 'react'

const STAR_COUNT = 200

function makeStar(w, h) {
  return {
    x: Math.random() * w,
    baseY: Math.random() * h,
    y: 0,
    r: Math.random() * 1.5 + 0.2,
    opacity: Math.random(),
    opDir: Math.random() > 0.5 ? 1 : -1,
    opSpeed: Math.random() * 0.007 + 0.002,
    amplitude: Math.random() * 18 + 4,
    phase: Math.random() * Math.PI * 2,
    freq: Math.random() * 0.6 + 0.25,  // rad/s
  }
}

export default function StarField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let W = window.innerWidth
    let H = window.innerHeight
    let t = 0
    let rafId
    let stars = []

    const resize = () => {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width  = W
      canvas.height = H
      stars = Array.from({ length: STAR_COUNT }, () => makeStar(W, H))
    }

    resize()
    window.addEventListener('resize', resize, { passive: true })

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      t += 0.016

      for (const s of stars) {
        // gentle vertical oscillation (up & down)
        s.y = s.baseY + Math.sin(s.freq * t + s.phase) * s.amplitude

        // breathe opacity
        s.opacity += s.opSpeed * s.opDir
        if (s.opacity >= 1) { s.opacity = 1; s.opDir = -1 }
        if (s.opacity <= 0) { s.opacity = 0; s.opDir =  1 }

        const alpha = s.opacity
        const x = s.x
        const y = s.y
        const r = s.r

        // core dot
        ctx.beginPath()
        ctx.arc(x, y, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(165,180,252,${alpha})`
        ctx.fill()

        // soft glow for larger stars (no expensive gradient)
        if (r > 0.9) {
          ctx.beginPath()
          ctx.arc(x, y, r * 3.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(165,180,252,${alpha * 0.12})`
          ctx.fill()
        }
      }

      rafId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
