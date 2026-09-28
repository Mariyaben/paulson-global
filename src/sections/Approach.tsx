import { PRINCIPLES, WORKFLOW } from '../data/content'
export default function Approach() {
  return (<section><div className="w"><div className="grid2"><div><p className="eyebrow eb">Our core values</p><h2 className="approach-title">Structure your finances around outcomes, not stress.</h2></div>
    <p className="lead" style={{ alignSelf: 'end' }}>Paulson Global is a proprietary firm founded in September 2023. We support businesses and CPA firms with accurate accounting, audit and tax workflows across India, Australia and the United States.</p></div>
    <div className="prin">{PRINCIPLES.map(([t, d], i) => <div key={t}><span className="eyebrow" style={{ color: 'var(--gold)' }}>0{i + 1}</span><h3>{t}</h3><p>{d}</p></div>)}</div>
    <p className="eyebrow mt6 eb">How we work together</p>
    <div className="prin" style={{ marginTop: 0 }}>{WORKFLOW.map(([t, d], i) => <div key={t}><span className="eyebrow" style={{ color: 'var(--gold)' }}>0{i + 1}</span><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>)
}
