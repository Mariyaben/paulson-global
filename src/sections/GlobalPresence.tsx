import { useState } from 'react'
import WorldMap from '../components/WorldMap'
import SectionHeading from '../components/SectionHeading'
import { JURISDICTIONS as J } from '../data/content'
export default function GlobalPresence() {
  const [a, setA] = useState(2)
  return (<section id="global"><div className="w">
    <SectionHeading eyebrow="International coverage" max="11em">Trusted across five jurisdictions.</SectionHeading>
    <div className="grid2"><div>
      <p className="lead" style={{ marginBottom: 40 }}>Our team understands the tax regulations, payroll systems, and compliance frameworks of each country we serve, not just the numbers, but the rules behind them.</p>
      <div className="jl">{J.map((j, k) => <button key={j.name} className={a === k ? 'on' : ''} onMouseEnter={() => setA(k)} onFocus={() => setA(k)} onClick={() => setA(k)}>{j.name}<small>{j.regulators}</small></button>)}</div></div>
      <div><WorldMap active={a} onSelect={setA} label="Map of jurisdictions served" style={{ width: '100%', border: '1px solid var(--rule)', background: 'var(--bg2)' }} />
        <p key={a} className="fade" style={{ marginTop: 20, color: 'var(--mute)', fontSize: 15 }}>{J[a].name}: {J[a].tax}</p></div></div></div></section>)
}
