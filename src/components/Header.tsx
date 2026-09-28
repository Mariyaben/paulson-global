import { useEffect, useState } from 'react'
import logo from '../assets/logo.jpg'
export default function Header() {
  const [s, setS] = useState(false)
  useEffect(() => { const f = () => setS(scrollY > 40); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  return (<header className={s ? 's' : ''}><div className="w"><a href="#top" aria-label="Paulson Global home"><img src={logo} alt="Paulson Global" /></a>
    <nav aria-label="Primary"><a className="ul" href="#services">Services</a><a className="ul" href="#global">Global Reach</a><a className="ul" href="#about">About</a><a className="ul" href="#insights">Insights</a><a className="ul" href="#contact">Contact</a><a className="btn" href="#contact">Book a Free Consultation</a></nav></div></header>)
}
