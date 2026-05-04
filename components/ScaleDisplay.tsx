interface ScaleValue {
  label: string
  value: number | null
  color?: string
}

interface Props {
  values: ScaleValue[]
}

export default function ScaleDisplay({ values }: Props) {
  return (
    <div className="flex flex-wrap gap-6">
      {values.map(({ label, value, color = '#ff6b2b' }) => (
        <div key={label} className="flex flex-col items-center min-w-[80px]">
          <span
            className="font-mono font-bold leading-none mb-1"
            style={{
              fontSize: '2.25rem',
              color: value !== null ? (value >= 80 ? '#16a34a' : value >= 50 ? color : '#dc2626') : '#d1d5db',
            }}
          >
            {value !== null ? `${value}%` : '—'}
          </span>
          <span className="text-[11px] text-gray-400 text-center leading-tight max-w-[90px]">{label}</span>
        </div>
      ))}
    </div>
  )
}
