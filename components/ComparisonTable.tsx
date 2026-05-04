import { PDV_COLORS } from '@/lib/data'
import type { SurveyResponse } from '@/lib/types'
import type { Answers } from '@/lib/types'

interface Props {
  responses: SurveyResponse[]
  questionKey: keyof Answers
  allOptions: string[]
}

export default function ComparisonTable({ responses, questionKey, allOptions }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="text-left py-2 pr-4 text-xs font-medium text-gray-400 font-mono uppercase tracking-wide w-1/2">
              Opción
            </th>
            {responses.map(r => (
              <th key={r.id} className="py-2 px-3 text-center min-w-[100px]">
                <span
                  className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full"
                  style={{ color: PDV_COLORS[r.pdv] ?? '#ff6b2b', backgroundColor: `${PDV_COLORS[r.pdv] ?? '#ff6b2b'}15` }}
                >
                  {r.respondent.split(' ')[0]}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allOptions.map((option, i) => (
            <tr key={option} className={i % 2 === 0 ? 'bg-gray-50/50' : ''}>
              <td className="py-2.5 pr-4 text-xs text-gray-700 leading-snug">{option}</td>
              {responses.map(r => {
                const val = r.answers[questionKey]
                const selected = Array.isArray(val) ? val.includes(option) : val === option
                return (
                  <td key={r.id} className="py-2.5 px-3 text-center">
                    {selected ? (
                      <span style={{ color: PDV_COLORS[r.pdv] ?? '#ff6b2b' }} className="text-base">✓</span>
                    ) : (
                      <span className="text-gray-200 text-sm">—</span>
                    )}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
