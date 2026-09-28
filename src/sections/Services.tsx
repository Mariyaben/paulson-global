import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import { SERVICES } from '../data/content'
export default function Services() {
  const [open, setOpen] = useState(-1)
  const hover = typeof matchMedia !== 'undefined' && matchMedia('(hover:hover)').matches
  return (<section id="services"><div className="w"><SectionHeading eyebrow="Services">Three disciplines. One perspective.</SectionHeading>
    {SERVICES.map((s, i) => (<div key={s.title} className={'svc' + (open === i ? ' on' : '')} onMouseEnter={() => hover && setOpen(i)}>
      <button aria-expanded={open === i} aria-controls={'sv' + i} onClick={() => setOpen(open === i ? -1 : i)}><span className="n">0{i + 1}</span><span className="t">{s.title}</span><span className="pl" aria-hidden>+</span></button>
      <div className="b" id={'sv' + i}><div><div className="in"><p className="lead">{s.lead}</p>
        <div><p className="eyebrow" style={{ marginBottom: 10 }}>Jurisdictions</p><ul>{s.juris.map(x => <li key={x}>{x}</li>)}</ul></div>
        <div><p className="eyebrow" style={{ marginBottom: 10 }}>Capabilities</p><ul>{s.caps.map(x => <li key={x}>{x}</li>)}</ul></div>
        <p><a className="ul" href="#contact" style={{ fontWeight: 600, color: 'var(--navy)' }}>Discuss {s.title.toLowerCase()} →</a></p></div></div></div></div>))}</div></section>)
}
