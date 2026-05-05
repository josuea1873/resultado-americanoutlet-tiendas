'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { responses, FILTER_LABELS, PDV_COLORS } from '@/lib/data'
import { filterResponses, aggregateMulti, getScaleValues, getCompletionRate } from '@/lib/utils'
import type { FilterId } from '@/lib/types'

import BarChart from '@/components/BarChart'
import QuestionCard from '@/components/QuestionCard'
import ScaleDisplay from '@/components/ScaleDisplay'
import QuoteCard from '@/components/QuoteCard'
import InsightCard from '@/components/InsightCard'
import SectionTitle from '@/components/SectionTitle'
import ComparisonTable from '@/components/ComparisonTable'
import KPICard from '@/components/KPICard'
import PDVBadge from '@/components/PDVBadge'

const FILTERS: FilterId[] = ['all', 'ciudad-quesada', 'florencia', 'fortuna']

const NAV_SECTIONS = [
  { id: 'overview', label: 'Resumen' },
  { id: 'cliente', label: 'Cliente' },
  { id: 'producto', label: 'Producto' },
  { id: 'operacion', label: 'Operación' },
  { id: 'digital', label: 'Digital' },
  { id: 'admin', label: 'Admin' },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Dashboard() {
  const [filter, setFilter] = useState<FilterId>('all')
  const filtered = useMemo(() => filterResponses(responses, filter), [filter])
  const total = filtered.length
  const completionRate = getCompletionRate(filtered)

  /* ── Aggregated data per section ─────────────────────── */

  // CLIENTE
  const aQ01 = aggregateMulti(filtered, 'q01')
  const aQ02 = aggregateMulti(filtered, 'q02')
  const aQ03 = aggregateMulti(filtered, 'q03')
  const aQ04 = aggregateMulti(filtered, 'q04')

  // PRODUCTO
  const aQ05 = aggregateMulti(filtered, 'q05')
  const aQ06 = aggregateMulti(filtered, 'q06')

  // OPERACIÓN
  const aQ09 = aggregateMulti(filtered, 'q09')
  const aQ10 = aggregateMulti(filtered, 'q10')
  const aQ11 = aggregateMulti(filtered, 'q11')

  // DIGITAL
  const aQ12 = aggregateMulti(filtered, 'q12')
  const aQ13 = aggregateMulti(filtered, 'q13')
  const aQ14 = aggregateMulti(filtered, 'q14')

  // ADMIN
  const aQ16 = aggregateMulti(filtered, 'q16')
  const aQ18 = aggregateMulti(filtered, 'q18')
  const aQ21 = aggregateMulti(filtered, 'q21')
  const scaleQ15 = getScaleValues(filtered, 'q15')
  const scaleQ17 = getScaleValues(filtered, 'q17')
  const scaleQ20 = getScaleValues(filtered, 'q20')

  // All options for comparison tables
  const allQ11Options = ['Tenemos respuesta automática básica', 'Le respondemos al día siguiente cuando abrimos', 'Nadie lo gestiona fuera de horario']
  const allQ19Options = ['Sí, manejo Instagram y Facebook directamente', 'Tengo acceso pero lo maneja otra persona', 'No tengo acceso, lo hace otra persona', 'No sé quién tiene el acceso actualmente']

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* ── HEADER ─────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a] shadow-lg">
        <div className="max-w-6xl mx-auto px-6">
          {/* Top bar */}
          <div className="flex items-center justify-between py-3 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div>
                <span className="font-mono text-[10px] tracking-widest text-[#ff6b2b] uppercase block leading-none mb-0.5">
                  Bralto · bralto.io
                </span>
                <span className="font-sora font-bold text-white text-base leading-none">
                  Discovery Operativo
                  <span className="text-[#ff6b2b]"> · </span>
                  American Outlet
                </span>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-1">
              {NAV_SECTIONS.map(s => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className="text-[11px] font-mono text-gray-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  {s.label}
                </button>
              ))}
              <Link
                href="/estrategia"
                className="text-[11px] font-mono font-semibold text-[#ff6b2b] hover:text-white px-3 py-1.5 rounded-lg hover:bg-[#ff6b2b] transition-colors ml-2 border border-[#ff6b2b]/40 hover:border-[#ff6b2b]"
              >
                Estrategia
              </Link>
            </div>
          </div>

          {/* PDV Filter */}
          <div className="flex items-center gap-2 py-2.5 overflow-x-auto">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider shrink-0 mr-1">
              Filtrar:
            </span>
            {FILTERS.map(f => {
              const isActive = filter === f
              const color = f === 'all' ? '#ff6b2b'
                : f === 'ciudad-quesada' ? '#ff6b2b'
                : f === 'florencia' ? '#0ea5e9'
                : '#8b5cf6'
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className="shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                  style={
                    isActive
                      ? { backgroundColor: color, color: '#fff' }
                      : { backgroundColor: 'rgba(255,255,255,0.06)', color: '#9ca3af' }
                  }
                >
                  {FILTER_LABELS[f]}
                  {f !== 'all' && (
                    <span className="ml-1.5 font-mono text-[10px] opacity-70">
                      ({f === 'ciudad-quesada' ? 2 : 1})
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </header>

      {/* ── MAIN CONTENT ───────────────────────────────── */}
      <main className="max-w-6xl mx-auto px-6 pb-20">

        {/* ── OVERVIEW ─────────────────────────────────── */}
        <section id="overview" className="pt-8 block-section">
          <div className="mb-6">
            <h1 className="font-sora text-2xl font-bold text-[#0a0a0a] mb-1">
              Reporte de Diagnóstico · American Outlet
            </h1>
            <p className="text-sm text-gray-500">
              Elaborado por Bralto · Mayo 2026 · {total} {total === 1 ? 'punto de venta' : 'puntos de venta'} en vista
              {filter !== 'all' && <span> — filtrado por <strong>{FILTER_LABELS[filter]}</strong></span>}
            </p>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <KPICard
              label="PDVs analizados"
              value={total}
              sub={`de ${responses.length} puntos de venta del grupo`}
            />
            <KPICard
              label="Completitud"
              value={`${completionRate}%`}
              sub="tasa de respuesta del equipo"
              color="#16a34a"
            />
            <KPICard
              label="PDVs cubiertos"
              value={3}
              sub="Ciudad Quesada · Florencia · Fortuna"
            />
            <KPICard
              label="Período"
              value="Mayo"
              sub="2026 · análisis actualizado"
              color="#6b7280"
            />
          </div>

          {/* Respondentes */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm mb-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-4">
              Equipo participante
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {filtered.map(r => (
                <div key={r.id} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                  <div
                    className="h-8 w-8 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{ backgroundColor: PDV_COLORS[r.pdv] ?? '#ff6b2b' }}
                  >
                    {r.respondent.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-800 truncate">{r.respondent}</p>
                    <PDVBadge pdv={r.pdv} small />
                    <p className="text-[10px] font-mono text-gray-400 mt-0.5">{r.answered}/{r.total} resp.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <InsightCard
              icon="📦"
              title="Rotación de inventario: primera prioridad"
              body="3 de 4 tiendas lo identifican como el área de mayor impacto. La estrategia de campaña arranca desde aquí."
              variant="alert"
            />
            <InsightCard
              icon="📱"
              title="Atención por WhatsApp: oportunidad inmediata"
              body="2 tiendas atienden al día siguiente. Con automatización activa, cada consulta nocturna se convierte en lead."
              variant="alert"
            />
            <InsightCard
              icon="🔒"
              title="Acceso a redes: punto a centralizar"
              body="Florencia y Fortuna operan sin acceso directo a sus perfiles. Consolidar esto acelera la ejecución de contenido."
              variant="alert"
            />
            <InsightCard
              icon="🎬"
              title="'Qué llegó hoy': el formato que convierte"
              body="3 de 4 tiendas lo confirman como el contenido que más visitas físicas genera. Bajo costo, alto impacto."
              variant="positive"
            />
            <InsightCard
              icon="👗"
              title="Ropa mujer: categoría ancla del grupo"
              body="Los 4 puntos de venta la destacan como la de mayor movimiento. Es el eje central de la estrategia de contenido."
              variant="positive"
            />
            <InsightCard
              icon="📊"
              title="Métricas: lo que el equipo necesita"
              body="3 de 4 administradores piden visibilidad sobre qué está funcionando. El dashboard resuelve esto desde el día uno."
              variant="neutral"
            />
          </div>
        </section>

        <div className="my-10 border-t border-gray-200" />

        {/* ── BLOQUE 1: CLIENTE ────────────────────────── */}
        <section id="cliente" className="block-section" key={`cliente-${filter}`}>
          <SectionTitle
            number="01"
            title="Cliente"
            description="Perfil del comprador, objeciones en piso, frases que repite y horarios pico"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <QuestionCard number="Q01" question="¿Quién es el cliente que MÁS entra a tu tienda?">
              <BarChart data={aQ01} total={total} />
            </QuestionCard>
            <QuestionCard number="Q02" question="¿Qué objeciones escuchás más en piso?">
              <BarChart data={aQ02} total={total} />
            </QuestionCard>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <QuestionCard number="Q03" question="¿Qué frase escuchás repetida del cliente que entra?">
              <BarChart data={aQ03} total={total} />
            </QuestionCard>
            <QuestionCard number="Q04" question="¿En qué momento del día/semana entra MÁS gente?">
              <BarChart data={aQ04} total={total} />
            </QuestionCard>
          </div>
        </section>

        <div className="my-10 border-t border-gray-200" />

        {/* ── BLOQUE 2: PRODUCTO ───────────────────────── */}
        <section id="producto" className="block-section" key={`producto-${filter}`}>
          <SectionTitle
            number="02"
            title="Producto"
            description="Categorías top, sorpresas de venta y recomendaciones para redes"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <QuestionCard number="Q05" question="¿Qué categorías se mueven MÁS en tu tienda?">
              <BarChart data={aQ05} total={total} />
            </QuestionCard>
            <QuestionCard number="Q06" question="¿Qué productos se han vuelto sorpresa de venta?">
              <BarChart data={aQ06} total={total} />
            </QuestionCard>
          </div>

          {/* Q07 — texto libre por PDV */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <div className="flex gap-3 mb-5">
              <span className="font-mono text-xs font-bold text-[#ff6b2b] shrink-0 mt-0.5">Q07</span>
              <h3 className="text-sm font-semibold text-[#0a0a0a]">
                Si tuvieras que recomendarle a Bralto 3 productos para mostrar en redes, ¿cuáles serían?
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {filtered.map(r => (
                <div key={r.id} className="rounded-xl bg-gray-50 p-3.5">
                  <PDVBadge pdv={r.pdv} small />
                  <p className="text-xs font-mono text-gray-400 mt-1 mb-2">{r.respondent.split(' ')[0]}</p>
                  <p className="text-sm text-gray-800 font-medium leading-snug">{r.answers.q07}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="my-10 border-t border-gray-200" />

        {/* ── BLOQUE 3: OPERACIÓN ──────────────────────── */}
        <section id="operacion" className="block-section" key={`operacion-${filter}`}>
          <SectionTitle
            number="03"
            title="Operación"
            description="Equipo, procesos manuales, herramientas digitales y protocolo de WhatsApp"
          />

          {/* Q08 — tamaño de equipo */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-4">
            <div className="flex gap-3 mb-4">
              <span className="font-mono text-xs font-bold text-[#ff6b2b] shrink-0">Q08</span>
              <h3 className="text-sm font-semibold text-[#0a0a0a]">¿Cuántas personas trabajan en tu tienda actualmente?</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {filtered.map(r => (
                <div key={r.id} className="text-center rounded-xl bg-gray-50 p-4">
                  <PDVBadge pdv={r.pdv} small />
                  <p className="font-mono font-bold text-[#ff6b2b] text-2xl mt-2 leading-none">
                    {r.answers.q08 === 'Más de 10 personas' ? '10+' : '3–5'}
                  </p>
                  <p className="text-[10px] text-gray-400 mt-1">{r.answers.q08}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <QuestionCard number="Q09" question="¿Qué procesos hacés HOY de forma manual que te quitan tiempo?">
              <BarChart data={aQ09} total={total} />
            </QuestionCard>
            <QuestionCard number="Q10" question="¿Qué herramientas digitales usás actualmente en tu tienda?">
              <BarChart data={aQ10} total={total} />
            </QuestionCard>
          </div>

          {/* Q11 — WhatsApp fuera de horario */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <div className="flex gap-3 mb-5">
              <span className="font-mono text-xs font-bold text-[#ff6b2b] shrink-0">Q11</span>
              <h3 className="text-sm font-semibold text-[#0a0a0a]">¿Qué pasa cuando un cliente escribe por WhatsApp fuera de horario?</h3>
            </div>
            <div className="mb-5">
              <BarChart data={aQ11} total={total} />
            </div>
            {total > 1 && (
              <>
                <p className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3">Comparación por PDV</p>
                <ComparisonTable
                  responses={filtered}
                  questionKey="q11"
                  allOptions={allQ11Options}
                />
              </>
            )}
          </div>
        </section>

        <div className="my-10 border-t border-gray-200" />

        {/* ── BLOQUE 4: DIGITAL ────────────────────────── */}
        <section id="digital" className="block-section" key={`digital-${filter}`}>
          <SectionTitle
            number="04"
            title="Digital"
            description="Canales de descubrimiento, contenido que convierte e incomodidades con las redes"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <QuestionCard number="Q12" question="¿Cómo se entera la gente de las promociones que hacen ahora?">
              <BarChart data={aQ12} total={total} />
            </QuestionCard>
            <QuestionCard number="Q13" question="¿Qué tipo de contenido genera más visitas a la tienda?">
              <BarChart data={aQ13} total={total} color="#16a34a" />
            </QuestionCard>
          </div>
          <QuestionCard number="Q14" question="¿Qué te incomoda de cómo se manejan las redes hoy?">
            <BarChart data={aQ14} total={total} color="#dc2626" />
          </QuestionCard>
        </section>

        <div className="my-10 border-t border-gray-200" />

        {/* ── BLOQUE 5: SOLO ADMINISTRADOR ────────────── */}
        <section id="admin" className="block-section" key={`admin-${filter}`}>
          <SectionTitle
            number="05"
            title="Solo Administrador"
            description="Dolores del rol, compromisos, info exclusiva, acceso a redes y disposición para contenido"
          />

          {/* Q15 / Q17 / Q20 — escalas */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-4">
            <p className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-5">
              Niveles de disposición y claridad
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">

              <div>
                <p className="text-xs font-semibold text-gray-600 mb-3">
                  Q15 · Claridad sobre top 5 productos del mes
                </p>
                <ScaleDisplay values={scaleQ15.map(v => ({ label: v.respondent.split(' ')[0], value: v.value }))} />
              </div>

              <div className="pt-6 md:pt-0 md:pl-8">
                <p className="text-xs font-semibold text-gray-600 mb-3">
                  Q17 · Disposición a colaborar con Bralto
                </p>
                <ScaleDisplay values={scaleQ17.map(v => ({ label: v.respondent.split(' ')[0], value: v.value }))} />
              </div>

              <div className="pt-6 md:pt-0 md:pl-8">
                <p className="text-xs font-semibold text-gray-600 mb-3">
                  Q20 · Disposición para ser grabado/a
                </p>
                <ScaleDisplay values={scaleQ20.map(v => ({ label: v.respondent.split(' ')[0], value: v.value }))} />
              </div>

            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <QuestionCard number="Q16" question="En tu rol como administrador, ¿cuáles son tus 3 dolores principales?">
              <BarChart data={aQ16} total={total} color="#dc2626" />
            </QuestionCard>
            <QuestionCard number="Q18" question="¿Qué información tenés vos que NADIE más en el grupo tiene?">
              <BarChart data={aQ18} total={total} color="#8b5cf6" />
            </QuestionCard>
          </div>

          {/* Q19 — acceso a redes */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-4">
            <div className="flex gap-3 mb-5">
              <span className="font-mono text-xs font-bold text-[#ff6b2b] shrink-0">Q19</span>
              <h3 className="text-sm font-semibold text-[#0a0a0a]">¿Tenés acceso administrativo a las redes de tu tienda?</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
              {filtered.map(r => {
                const hasAccess = r.answers.q19.startsWith('Sí')
                const unknownAccess = r.answers.q19.includes('No sé')
                const color = hasAccess ? '#16a34a' : unknownAccess ? '#f59e0b' : '#dc2626'
                const icon = hasAccess ? '✓' : unknownAccess ? '?' : '✕'
                return (
                  <div key={r.id} className="rounded-xl border p-4" style={{ borderColor: `${color}40`, backgroundColor: `${color}08` }}>
                    <div className="flex items-center justify-between mb-2">
                      <PDVBadge pdv={r.pdv} small />
                      <span className="font-mono font-bold text-lg" style={{ color }}>{icon}</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-snug">{r.answers.q19}</p>
                  </div>
                )
              })}
            </div>
            {total > 1 && (
              <>
                <p className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3">Tabla comparativa</p>
                <ComparisonTable
                  responses={filtered}
                  questionKey="q19"
                  allOptions={allQ19Options}
                />
              </>
            )}
          </div>

          {/* Q21 — pedido al marketing */}
          <QuestionCard number="Q21" question="Si pudieras pedirle UNA sola cosa al equipo de marketing este mes, ¿qué sería?" className="mb-4">
            <BarChart data={aQ21} total={total} color="#ff6b2b" />
          </QuestionCard>

          {/* Q22 — compromisos */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <div className="flex gap-3 mb-5">
              <span className="font-mono text-xs font-bold text-[#ff6b2b] shrink-0">Q22</span>
              <h3 className="text-sm font-semibold text-[#0a0a0a]">Compromiso real: en una frase, ¿cómo te ves apoyando esta estrategia desde tu tienda?</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filtered.map(r => (
                <QuoteCard
                  key={r.id}
                  quote={r.answers.q22}
                  respondent={r.respondent}
                  pdv={r.pdv}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────── */}
        <footer className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="font-mono text-xs text-gray-400">
            Bralto · bralto.io · Reporte de Diagnóstico · American Outlet · Mayo 2026
          </p>
          <p className="font-mono text-xs text-gray-300 mt-1">
            {responses.length} puntos de venta · {responses.reduce((a, r) => a + r.answered, 0)} respuestas recopiladas
          </p>
        </footer>

      </main>
    </div>
  )
}
