import type { CSSProperties } from 'react'
import { JURISDICTIONS as J } from '../data/content'
const X = (lon: number, lat: number): [number, number] => [(lon + 180) / 360 * 1000, (90 - lat) / 180 * 500]
interface Props { active?: number; onSelect?: (i: number) => void; className?: string; style?: CSSProperties; label?: string }
export default function WorldMap({ active = -1, onSelect, className, style, label }: Props) {
  const hub = X(...J[1].ll)
  return (
    <svg className={className} style={style} viewBox="0 0 1000 500" role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      {[-180, -150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150, 180].map(l => { const x = (l + 180) / 360 * 1000; return <line key={'x' + l} x1={x} x2={x} y1={0} y2={500} stroke="#132749" strokeOpacity={l === 0 ? .3 : .12} /> })}
      {[-60, -30, 0, 30, 60, 90].map(l => { const y = (90 - l) / 180 * 500; return <line key={'y' + l} y1={y} y2={y} x1={0} x2={1000} stroke="#132749" strokeOpacity={l === 0 ? .3 : .12} /> })}
      {J.map((j, k) => { if (k === 1) return null; const p = X(...j.ll); return <path key={j.name} d={`M${hub[0]},${hub[1]} Q${(hub[0] + p[0]) / 2},${Math.min(hub[1], p[1]) - 50} ${p[0]},${p[1]}`} fill="none" stroke="#C9A227" strokeOpacity={active === k || active === 1 ? .9 : .35} /> })}
      {J.map((j, k) => { const p = X(...j.ll), on = active === k; return (
        <g key={j.name} tabIndex={onSelect ? 0 : undefined} style={{ cursor: onSelect ? 'pointer' : undefined }} onClick={() => onSelect?.(k)} onKeyDown={e => e.key === 'Enter' && onSelect?.(k)}>
          <circle cx={p[0]} cy={p[1]} r={on ? 7 : 4} fill={on ? '#C9A227' : '#132749'} />
          {on && <circle cx={p[0]} cy={p[1]} r={14} fill="none" stroke="#C9A227" />}
          <text x={p[0] + 12} y={p[1] + 4} fontSize={13} fontWeight={600} fill="#132749">{j.name}</text></g>) })}
    </svg>)
}
