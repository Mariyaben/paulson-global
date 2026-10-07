import { useEffect } from 'react'

export default function Founders() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Boney Paulson | Founder | Paulson Global'
    return () => { document.title = previousTitle }
  }, [])

  return (
    <section className="founders-page" aria-labelledby="founders-title">
      <div className="w">
        <a className="ul founders-back" href="/">← Back to Paulson Global</a>
        <h1 id="founders-title">Meet our founder.</h1>
        <div className="founder">
          <div><img src="/Boney.jpeg" alt="Boney Paulson, founder of Paulson Global" /></div>
          <div>
            <p className="eyebrow eb">Founder &amp; principal accountant</p>
            <h2>Boney Paulson</h2>
            <p className="founder-role">Chartered Accountant · Member of ICAI</p>
            <p className="lead">Boney Paulson helps businesses and CPA firms manage accounting, audit and tax workflows across international markets. He is also a QuickBooks ProAdvisor and Xero Certified professional with MYOB experience.</p>
            <div className="founder-credentials" aria-label="Credentials and accounting platforms">
              <span>ICAI Member</span><span>QuickBooks ProAdvisor</span><span>Xero Certified</span><span>MYOB experience</span>
            </div>
            <div className="founder-links">
              <a className="btn" href="https://www.linkedin.com/in/ca-boney-paulson-aca-8b4b511b4/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn gold" href="https://www.upwork.com/freelancers/~010bee4589b8aced7b" target="_blank" rel="noreferrer">Upwork</a>
            </div>
          </div>
        </div>
        <div className="founder-contact">
          <h2>Start a conversation.</h2>
          <p>Get accounting, audit and tax support for your business.</p>
          <a className="btn" href="/#contact">Book a Free Consultation</a>
        </div>
      </div>
    </section>
  )
}
