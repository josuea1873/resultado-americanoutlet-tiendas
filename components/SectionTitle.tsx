interface Props {
  number: string
  title: string
  description?: string
}

export default function SectionTitle({ number, title, description }: Props) {
  return (
    <div className="flex items-start gap-4 mb-8">
      <div className="flex flex-col items-center">
        <span className="font-mono text-[10px] font-bold text-[#ff6b2b] tracking-widest uppercase leading-none mb-1">
          Bloque
        </span>
        <span className="font-mono text-2xl font-bold text-[#ff6b2b] leading-none">{number}</span>
      </div>
      <div className="border-l-2 border-[#ff6b2b] pl-4 pt-0.5">
        <h2 className="font-sora text-xl font-bold text-[#0a0a0a] leading-tight">{title}</h2>
        {description && (
          <p className="text-sm text-gray-400 mt-1 leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  )
}
