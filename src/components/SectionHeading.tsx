import type { ReactNode } from 'react'
export default function SectionHeading({ eyebrow, children, max }: { eyebrow: string; children: ReactNode; max?: string }) {
  return (<div className="rv mb6"><p className="eyebrow eb">{eyebrow}</p><h2 style={{ maxWidth: max }}>{children}</h2></div>)
}
