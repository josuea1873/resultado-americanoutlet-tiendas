export type ResponseId = 'cq-jordan' | 'cq-mauro' | 'florencia' | 'fortuna'
export type FilterId = 'all' | 'ciudad-quesada' | 'florencia' | 'fortuna'

export interface Answers {
  q01: string[]          // perfil del cliente
  q02: string[]          // objeciones en piso
  q03: string[]          // frases del cliente
  q04: string[]          // horarios pico
  q05: string[]          // categorías que más se mueven
  q06: string[]          // sorpresas de venta
  q07: string            // productos recomendados para redes (texto libre)
  q08: string            // personas en tienda
  q09: string[]          // procesos manuales
  q10: string[]          // herramientas digitales
  q11: string[]          // protocolo WhatsApp fuera de horario
  q12: string[]          // cómo se enteran de promociones
  q13: string[]          // contenido que genera visitas
  q14: string[]          // incomodidades con redes
  q15: number | null     // claridad sobre top 5 productos (%)
  q16: string[]          // dolores del rol
  q17: number | null     // disposición a colaborar con Bralto (%)
  q18: string[]          // información exclusiva del admin
  q19: string            // acceso a redes sociales
  q20: number | null     // disposición para grabación (%)
  q21: string[]          // pedido al marketing
  q22: string            // compromiso en una frase
}

export interface SurveyResponse {
  id: ResponseId
  pdv: string
  respondent: string
  contact: string
  date: string
  answered: number
  total: number
  answers: Answers
}

export interface AggregatedOption {
  option: string
  count: number
  pct: number
  respondents: string[]
}
