import Layout from './layouts/Layout'
import Hero from './sections/Hero'
import GlobalPresence from './sections/GlobalPresence'
import Services from './sections/Services'
import Approach from './sections/Approach'
import JurisdictionExplorer from './sections/JurisdictionExplorer'
import Sectors from './sections/Sectors'
import Insights from './sections/Insights'
import Trust from './sections/Trust'
import About from './sections/About'
import CTA from './sections/CTA'
import Founders from './pages/Founders'
export default function App() {
  if (window.location.pathname.replace(/\/$/, '') === '/founders') return (<Layout><Founders /></Layout>)
  return (<Layout><Hero /><GlobalPresence /><Services /><Approach /><JurisdictionExplorer /><Sectors /><Insights /><Trust /><About /><CTA /></Layout>)
}
