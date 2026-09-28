export default function About() {
  const rows = [['Mission', 'Support businesses through seamless multi-jurisdictional financial compliance frameworks aligned with global standards.'], ['Vision', 'Tailored corporate bookkeeping, governance and tax solutions that free executive leadership to scale with confidence.'], ['Our story', 'Founded in 2025, Paulson Global combines process discipline, technology-enabled workflows, and partner-led advisory to help businesses operate with authority across multiple tax and governance environments.']]
  return (<section id="about"><div className="w grid2"><div><p className="eyebrow eb">About company</p><h2>A specialist consultancy built for modern enterprise finance.</h2></div>
    <div><p className="lead" style={{ marginBottom: 40 }}>Paulson Global is a full-service accounting and tax consultancy founded in 2025. The practice supports businesses through disciplined, multi-jurisdiction compliance frameworks aligned with global standards.</p>
      {rows.map(([b, p]) => <div className="cat" key={b}><b>{b}</b><p>{p}</p></div>)}</div></div></section>)
}
