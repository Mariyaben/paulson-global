import SectionHeading from '../components/SectionHeading'
import { INSIGHTS } from '../data/content'
export default function Insights() {
  return (<section id="insights"><div className="w"><SectionHeading eyebrow="Resources & insights">Tax compliance and accounting updates.</SectionHeading>
    {INSIGHTS.map(a => <a className="ins" href={`#${a.slug}`} key={a.title}><div><p className="eyebrow" style={{ color: 'var(--gold)' }}>{a.cat}</p><p className="eyebrow">{a.read}</p></div><h3>{a.title}</h3><span className="ar" style={{ fontSize: 28, color: 'var(--navy)' }} aria-hidden>→</span></a>)}
    <div className="insights-articles">{INSIGHTS.map(a => <article id={a.slug} className="insight-article" key={a.slug}><p className="eyebrow" style={{ color: 'var(--gold)' }}>{a.cat} · {a.read}</p><h2>{a.title}</h2><h4>{a.subtitle}</h4>{a.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}<p><a className="ul" href="#contact" style={{ fontWeight: 600, color: 'var(--navy)' }}>Talk to an Accountant Today →</a></p></article>)}</div>
  </div></section>)
}
