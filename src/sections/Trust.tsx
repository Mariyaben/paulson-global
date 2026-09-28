import SectionHeading from '../components/SectionHeading'
import { TRUST, FAQS } from '../data/content'
export default function Trust() {
  return (<section><div className="w"><SectionHeading eyebrow="Experience snapshot" max="12em">A specialist consultancy built for modern enterprise finance.</SectionHeading>
    <div className="tr">{TRUST.map(t => <div key={t.label}><b>{t.label}</b><span>{t.value}</span></div>)}</div>
    <p className="eyebrow mt6 eb">Frequently asked questions</p>{FAQS.map(([q, a]) => <details className="fq" key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>)
}
