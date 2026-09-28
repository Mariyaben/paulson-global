import { useEffect } from 'react'
import type { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Layout({ children }: { children: ReactNode }) {
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in2'); io.unobserve(e.target) } }), { threshold: .15 })
    document.querySelectorAll('.rv').forEach(el => io.observe(el)); return () => io.disconnect()
  }, [])
  return (<><Header /><main id="top">{children}</main><Footer /></>)
}
