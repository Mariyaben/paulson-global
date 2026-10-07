import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [motionAllowed, setMotionAllowed] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setMotionAllowed(!preference.matches)
    update()
    preference.addEventListener('change', update)
    return () => preference.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !motionAllowed) return
    let inView = true
    const update = () => {
      if (!inView || document.hidden) video.pause()
      else void video.play().catch(() => setReady(false))
    }
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
      update()
    })
    observer.observe(video)
    document.addEventListener('visibilitychange', update)
    update()
    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', update)
      video.pause()
    }
  }, [motionAllowed])

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-backdrop" aria-hidden="true">
        {motionAllowed && (
          <video
            ref={videoRef}
            className={`hero-video${ready ? ' is-ready' : ''}`}
            muted
            loop
            playsInline
            preload="metadata"
            poster="/media/hero-accounting.jpg"
            onPlaying={() => setReady(true)}
            onError={() => setReady(false)}
          >
            <source src="/media/hero-accounting.mp4" type="video/mp4" />
          </video>
        )}
      </div>
      <div className="w hero-content">
        <p className="eyebrow eb">Paulson Global</p>
        <h1 id="hero-title">Balanced, everywhere.</h1>
        <div className="row">
          <p className="lead">Accurate books and lower taxes. Zero compliance stress.</p>
          <a className="btn gold" href="#contact">Book a Free Consultation</a>
        </div>

      </div>
    </section>
  )
}
