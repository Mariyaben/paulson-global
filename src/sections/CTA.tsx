import { CONTACT } from '../data/content'
export default function CTA() {
  return (<section className="cta" id="contact"><div className="w"><h2>Talk to an Accountant Today</h2>
    <p style={{ marginTop: 50 }}>Discuss your accounting, tax and compliance requirements with our experts. Get a fixed fee quote. Replies within 12 business hours.</p><p style={{ marginTop: 50 }}><a className="btn gold" href={`mailto:${CONTACT.email}`}>Get a Fixed Fee Quote</a></p></div></section>)
}
