import SectionHeading from '../components/SectionHeading'
import { INSIGHTS } from '../data/content'
export default function Insights() {
  return (<section id="insights"><div className="w"><SectionHeading eyebrow="Resources & insights">Tax compliance and accounting updates.</SectionHeading>
    {INSIGHTS.map(a => <a className="ins" href="#insights" key={a.title}><div><p className="eyebrow" style={{ color: 'var(--gold)' }}>{a.cat}</p><p className="eyebrow">{a.read}</p></div><h3>{a.title}</h3><span className="ar" style={{ fontSize: 28, color: 'var(--navy)' }} aria-hidden>→</span></a>)}</div></section>)
}
