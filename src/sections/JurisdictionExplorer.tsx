import { useState } from 'react'
import { JURISDICTIONS as J } from '../data/content'
const CATS: [string, 'tax' | 'accounting' | 'compliance' | 'advisory'][] = [['Tax', 'tax'], ['Accounting', 'accounting'], ['Compliance', 'compliance'], ['Advisory', 'advisory']]
export default function JurisdictionExplorer() {
  const [k, setK] = useState(0)
  return (<section id="explorer"><div className="w"><p className="eyebrow eb">Jurisdiction landscape</p><h2 style={{ maxWidth: '12em' }}>Local knowledge. Global coverage.</h2>
    <div className="ex"><div className="jl">{J.map((j, i) => <button key={j.name} className={k === i ? 'on' : ''} onClick={() => setK(i)}>{j.name}<small>{j.regulators}</small></button>)}</div>
      <div key={k} className="fade">{CATS.map(([l, f]) => <div className="cat" key={f}><b>{l}</b><p>{J[k][f]}</p></div>)}
        <p style={{ paddingTop: 22, borderTop: '1px solid var(--rule)' }}><a className="ul" href="#contact" style={{ fontWeight: 600, color: 'var(--navy)' }}>Speak to an advisor about {J[k].name} →</a></p></div></div></div></section>)
}
