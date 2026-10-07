import logo from '../assets/logo.jpg'
import { CONTACT } from '../data/content'
const LINKS: [string, string][] = [['Services', '#services'], ['Global Reach', '#global'], ['About', '#about'], ['Founder', '/founders'], ['Insights', '#insights'], ['Contact', '#contact']]
export default function Footer() {
  return (<footer><div className="w"><div>
    <div><img src={logo} alt="Paulson Global" /><p style={{ color: '#fff', fontSize: 20 }}>Balanced, everywhere.</p></div>
    <div><h4>Explore</h4>{LINKS.map(([n, h]) => <a key={n} href={h.startsWith('#') ? `/${h}` : h}>{n}</a>)}</div>
    <div><h4>Legal</h4><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div>
    <div><h4>Contact</h4><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><span>{CONTACT.address}</span><a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a></div></div>
    <p style={{ fontSize: 13 }}>© {new Date().getFullYear()} Paulson Global. All rights reserved.</p></div></footer>)
}
