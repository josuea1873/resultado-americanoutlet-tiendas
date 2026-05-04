import { PDV_COLORS, PDV_BG } from '@/lib/data'

interface Props {
  quote: string
  respondent: string
  pdv: string
}

export default function QuoteCard({ quote, respondent, pdv }: Props) {
  const color = PDV_COLORS[pdv] ?? '#ff6b2b'
  const bg = PDV_BG[pdv] ?? 'rgba(255,107,43,0.08)'

  return (
    <div
      className="rounded-2xl p-5 border-l-4"
      style={{ backgroundColor: bg, borderLeftColor: color }}
    >
      <p className="font-mono text-sm text-gray-800 italic leading-relaxed mb-3">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-2">
        <span
          className="inline-block h-2 w-2 rounded-full shrink-0"
          style={{ backgroundColor: color }}
        />
        <span className="text-xs text-gray-500 font-medium">{respondent}</span>
        <span className="text-xs text-gray-300">·</span>
        <span className="text-xs text-gray-400">{pdv}</span>
      </div>
    </div>
  )
}
