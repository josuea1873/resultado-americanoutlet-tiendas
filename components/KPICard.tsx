interface Props {
  label: string
  value: string | number
  sub?: string
  color?: string
}

export default function KPICard({ label, value, sub, color = '#ff6b2b' }: Props) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
      <p className="text-[11px] font-mono uppercase tracking-widest text-gray-400 mb-2">{label}</p>
      <p className="font-mono font-bold leading-none mb-1" style={{ fontSize: '2rem', color }}>
        {value}
      </p>
      {sub && <p className="text-xs text-gray-400 leading-tight">{sub}</p>}
    </div>
  )
}
