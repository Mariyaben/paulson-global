import SectionHeading from '../components/SectionHeading'
import { INDUSTRIES, PLATFORMS } from '../data/content'
export default function Sectors() {
  return (<section><div className="w"><SectionHeading eyebrow="Industry verticals" max="12em">Premium coverage across the sectors that demand precision.</SectionHeading>
    <div className="ind">{INDUSTRIES.map(([t, s]) => <div key={t}><b style={{ color: 'var(--navy)', fontWeight: 600 }}>{t}</b><small>{s}</small></div>)}</div>
    <p className="lead mt6">We work on the cloud accounting platforms your team already uses: {PLATFORMS}. Setup, migration and multi-currency configuration are part of onboarding.</p></div></section>)
}
