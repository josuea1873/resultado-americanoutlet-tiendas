'use client'

import { useEffect, useRef, useState } from 'react'
import type { AggregatedOption } from '@/lib/types'

interface Props {
  data: AggregatedOption[]
  total: number
  color?: string
}

export default function BarChart({ data, total, color = '#ff6b2b' }: Props) {
  const [animated, setAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setAnimated(false)
    const timeout = setTimeout(() => setAnimated(true), 80)
    return () => clearTimeout(timeout)
  }, [data])

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true) },
      { threshold: 0.1 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  if (data.length === 0) {
    return <p className="text-sm text-gray-400 italic">Sin datos para el filtro seleccionado.</p>
  }

  return (
    <div ref={ref} className="space-y-4">
      {data.map((item) => {
        const pct = total > 0 ? Math.round((item.count / total) * 100) : 0
        return (
          <div key={item.option}>
            <div className="flex items-baseline justify-between gap-3 mb-1.5">
              <span className="text-sm text-gray-800 font-medium leading-snug flex-1">{item.option}</span>
              <div className="flex items-center gap-2 shrink-0">
                <span className="font-mono text-xs text-gray-400">{item.count}/{total}</span>
                <span
                  className="font-mono text-sm font-bold w-10 text-right"
                  style={{ color }}
                >
                  {pct}%
                </span>
              </div>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: animated ? `${pct}%` : '0%',
                  backgroundColor: color,
                }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
