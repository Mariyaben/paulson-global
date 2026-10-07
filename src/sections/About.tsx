export default function About() {
  const rows = [['Mission', 'Support businesses and CPA firms through accurate, technology-enabled accounting and tax workflows.'], ['Credentials', 'Chartered Accountant and Member of ICAI · QuickBooks ProAdvisor · Xero Certified · MYOB experience'], ['Our story', 'Founded in September 2023, Paulson Global is a proprietary firm serving more than 30 businesses across India, Australia and the United States, with engagements in Oman and Germany.']]
  return (<section id="about"><div className="w grid2"><div><p className="eyebrow eb">About company</p><h2>A specialist consultancy built for modern enterprise finance.</h2></div>
    <div><p className="lead" style={{ marginBottom: 40 }}>Paulson Global is a proprietary firm founded in September 2023, providing accounting, audit and tax support with more than six years of professional experience.</p>
      {rows.map(([b, p]) => <div className="cat" key={b}><b>{b}</b><p>{p}</p></div>)}</div></div>
    <div className="w founder-intro"><p>Meet the Chartered Accountant behind Paulson Global.</p><a className="btn" href="/founders">Meet our founder</a></div>
  </section>)
}
