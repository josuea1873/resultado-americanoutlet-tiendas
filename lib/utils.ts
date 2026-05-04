import type { SurveyResponse, FilterId, AggregatedOption, Answers } from './types'

export function filterResponses(responses: SurveyResponse[], filter: FilterId): SurveyResponse[] {
  switch (filter) {
    case 'all': return responses
    case 'ciudad-quesada': return responses.filter(r => r.pdv === 'AO Ciudad Quesada')
    case 'florencia': return responses.filter(r => r.id === 'florencia')
    case 'fortuna': return responses.filter(r => r.id === 'fortuna')
  }
}

export function aggregateMulti(responses: SurveyResponse[], key: keyof Answers): AggregatedOption[] {
  const map = new Map<string, { count: number; respondents: string[] }>()
  const total = responses.length

  for (const r of responses) {
    const val = r.answers[key]
    if (!Array.isArray(val)) continue
    for (const opt of val) {
      const existing = map.get(opt) ?? { count: 0, respondents: [] }
      map.set(opt, { count: existing.count + 1, respondents: [...existing.respondents, r.respondent] })
    }
  }

  return Array.from(map.entries())
    .map(([option, { count, respondents }]) => ({
      option,
      count,
      pct: total > 0 ? Math.round((count / total) * 100) : 0,
      respondents,
    }))
    .sort((a, b) => b.count - a.count)
}

export function aggregateSingle(responses: SurveyResponse[], key: keyof Answers): AggregatedOption[] {
  return aggregateMulti(responses, key)
}

export function getScaleValues(responses: SurveyResponse[], key: keyof Answers): { respondent: string; pdv: string; value: number | null }[] {
  return responses.map(r => ({
    respondent: r.respondent,
    pdv: r.pdv,
    value: typeof r.answers[key] === 'number' ? (r.answers[key] as number) : null,
  }))
}

export function avgScale(responses: SurveyResponse[], key: keyof Answers): number | null {
  const vals = responses
    .map(r => r.answers[key])
    .filter((v): v is number => typeof v === 'number')
  if (vals.length === 0) return null
  return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length)
}

export function getCompletionRate(responses: SurveyResponse[]): number {
  if (responses.length === 0) return 0
  const total = responses.reduce((a, r) => a + r.total, 0)
  const answered = responses.reduce((a, r) => a + r.answered, 0)
  return Math.round((answered / total) * 100)
}
