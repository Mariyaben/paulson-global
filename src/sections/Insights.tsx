import { useEffect, useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import { INSIGHTS } from '../data/content'

export default function Insights() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null)
  const selectedArticle = INSIGHTS.find(article => article.slug === selectedSlug)

  useEffect(() => {
    const syncArticle = () => setSelectedSlug(INSIGHTS.some(article => article.slug === window.location.hash.slice(1)) ? window.location.hash.slice(1) : null)
    syncArticle()
    addEventListener('hashchange', syncArticle)
    return () => removeEventListener('hashchange', syncArticle)
  }, [])

  useEffect(() => {
    if (!selectedArticle) return
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && closeArticle()
    document.body.style.overflow = 'hidden'
    addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = ''
      removeEventListener('keydown', closeOnEscape)
    }
  }, [selectedArticle])

  const closeArticle = () => {
    setSelectedSlug(null)
    window.location.hash = 'insights'
  }

  return (<section id="insights"><div className="w"><SectionHeading eyebrow="Resources & insights">Tax compliance and accounting updates.</SectionHeading>
    {INSIGHTS.map(a => <a className="ins" href={`#${a.slug}`} key={a.title}><div><p className="eyebrow" style={{ color: 'var(--gold)' }}>{a.cat}</p><p className="eyebrow">{a.read}</p></div><h3>{a.title}</h3><span className="ar" style={{ fontSize: 28, color: 'var(--navy)' }} aria-hidden>→</span></a>)}
  </div>
  {selectedArticle && <div className="insight-modal-backdrop" role="presentation" onMouseDown={event => event.target === event.currentTarget && closeArticle()}><article className="insight-modal" role="dialog" aria-modal="true" aria-labelledby={`${selectedArticle.slug}-title`}><button className="insight-close" type="button" onClick={closeArticle} aria-label="Close article">×</button><div className="insight-modal-content"><p className="eyebrow" style={{ color: 'var(--gold)' }}>{selectedArticle.cat} · {selectedArticle.read}</p><h2 id={`${selectedArticle.slug}-title`}>{selectedArticle.title}</h2><div className="insight-tags"><span>{selectedArticle.cat}</span><span>{selectedArticle.read}</span><span>Paulson Global</span></div><h4>{selectedArticle.subtitle}</h4>{selectedArticle.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}<p><a className="btn gold" href="#contact" onClick={closeArticle}>Talk to an Accountant Today</a></p></div></article></div>}
  </section>)
}
