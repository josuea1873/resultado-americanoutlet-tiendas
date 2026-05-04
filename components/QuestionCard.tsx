interface Props {
  number: string
  question: string
  children: React.ReactNode
  className?: string
}

export default function QuestionCard({ number, question, children, className = '' }: Props) {
  return (
    <div className={`bg-white border border-gray-100 rounded-2xl p-6 shadow-sm ${className}`}>
      <div className="flex gap-3 mb-5">
        <span className="font-mono text-xs font-bold text-[#ff6b2b] shrink-0 mt-0.5 leading-none">{number}</span>
        <h3 className="text-sm font-semibold text-[#0a0a0a] leading-snug">{question}</h3>
      </div>
      {children}
    </div>
  )
}
