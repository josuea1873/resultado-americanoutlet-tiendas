interface Props {
  icon: string
  title: string
  body: string
  variant?: 'alert' | 'positive' | 'neutral'
}

const VARIANTS = {
  alert: { bg: 'bg-red-50', border: 'border-red-200', icon: 'text-red-500', title: 'text-red-900', body: 'text-red-700' },
  positive: { bg: 'bg-green-50', border: 'border-green-200', icon: 'text-green-600', title: 'text-green-900', body: 'text-green-700' },
  neutral: { bg: 'bg-[#fff7f2]', border: 'border-orange-100', icon: 'text-[#ff6b2b]', title: 'text-gray-900', body: 'text-gray-600' },
}

export default function InsightCard({ icon, title, body, variant = 'neutral' }: Props) {
  const s = VARIANTS[variant]
  return (
    <div className={`rounded-xl border p-4 ${s.bg} ${s.border}`}>
      <div className="flex gap-3">
        <span className={`text-xl shrink-0 leading-none mt-0.5 ${s.icon}`}>{icon}</span>
        <div>
          <p className={`text-sm font-semibold mb-0.5 ${s.title}`}>{title}</p>
          <p className={`text-xs leading-relaxed ${s.body}`}>{body}</p>
        </div>
      </div>
    </div>
  )
}
