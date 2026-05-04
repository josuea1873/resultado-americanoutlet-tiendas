import { PDV_COLORS, PDV_BG } from '@/lib/data'

interface Props {
  pdv: string
  small?: boolean
}

export default function PDVBadge({ pdv, small = false }: Props) {
  const color = PDV_COLORS[pdv] ?? '#ff6b2b'
  const bg = PDV_BG[pdv] ?? 'rgba(255,107,43,0.1)'
  const short = pdv.replace('AO ', '')

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full ${small ? 'text-[10px] px-2 py-0.5' : 'text-xs px-2.5 py-1'}`}
      style={{ color, backgroundColor: bg }}
    >
      <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
      {short}
    </span>
  )
}
