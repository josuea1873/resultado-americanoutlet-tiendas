# CLAUDE.md — American Outlet (AO)

> Knowledge base de contexto para Claude Code.
> Proyecto: American Outlet · Cliente: Christian Vindas · Agencia: Bralto (Josu Frames)
> Última actualización: Mayo 2026
> Fuente: chats de trabajo Bralto / Josu Frames + HTMLs en producción en bralto.io + Propuesta Comercial 2026

---

## 0. Cómo usar este archivo

- Este es el archivo raíz de contexto del proyecto American Outlet
- Todo lo que se trabaje aquí (campañas, copy, HTMLs, automatizaciones) parte de la info de este documento
- Si Claude Code modifica algo estructural del proyecto, debe actualizar la sección relevante de este .md
- Las secciones están numeradas para referencia rápida (ej: "ver §4.1")

---

## 1. Identidad de la marca

### Datos base

- **Marca:** American Outlet
- **Abreviación operativa:** AO
- **Tipo de negocio:** Retail multimarca (ropa, calzado, accesorios)
- **Modelo:** Importación de mercadería de marca (liquidación / exceso de inventario) vendida a precio outlet en PDV físicos
- **Cliente / propietario:** Christian Vindas
- **Agencia a cargo:** Bralto (bralto.io)
- **Estratega responsable:** Josué Araya · "Josu Frames"

### Posicionamiento buscado

- "Ropa de marca a precio outlet"
- "Marcas que normalmente no encontrás aquí" → exclusividad regional
- Hook de novedad: "Llegada nueva — primera vez en San Carlos"
- Hook de escasez: "Cantidad limitada — corre antes que se acabe"
- Hook de experiencia: "Tercer piso completamente renovado"

---

## 2. Estructura operativa

### Puntos de venta (PDV)

- **AO1 — American Outlet Ciudad Quesada**
  - Ubicación: Ciudad Quesada, San Carlos
  - 3 pisos
  - Sede principal del grupo
  - Aloja la **línea Liquidation** en el 3er piso
- **AO Florencia — American Outlet Florencia**
  - Ubicación: Florencia, San Carlos
  - Zona local San Carlos
- **AO Fortuna — American Outlet La Fortuna**
  - Ubicación: La Fortuna, San Carlos
  - Zona turística Arenal

### Centro de Distribución (CD)

- Núcleo logístico del grupo
- Distribuye mercadería a los 3 PDVs
- Tiene encargado específico
- Es el punto de entrada de todas las importaciones
- Copy estratégico oficial: *"El CD es el corazón. Las campañas se diseñan desde acá."*

### Organigrama (roles relevantes)

- **Gerencia / decisor final:** Christian Vindas
- **Administradores PDV:** uno por tienda (AO1, AO Florencia, AO Fortuna)
- **Encargado CD:** gestiona bodega central y distribución
- **Equipo Bralto:** estrategia, contenido y tecnología

---

## 3. Proyecto Bralto — alcance de la intervención

### Tipo de proyecto

- Transformación estratégica de:
  - Marketing digital
  - Operación comercial
  - Tecnología

### Pilares de la intervención

- **Reestructuración del marketing digital** — estrategia de contenido, calendarios, redes sociales
- **Campañas comerciales disruptivas** — foco en ventas, no en likes; escasez, novedad, exclusividad
- **Experiencias en punto de venta** — contenido filmado desde el piso, no desde estudio
- **Automatización de comunicación** — WhatsApp, respuestas fuera de horario, seguimiento de clientes
- **Limpieza, orden y reactivación de marca** — reposicionamiento visual y narrativo
- **Relanzamiento de línea Liquidation** — foco en el 3er piso de AO1

### Sub-proyecto activo: Liquidation Relaunch — AO Revolution

- 2 contenedores de mercadería nueva por llegar
- 3er piso de AO1 siendo preparado para reapertura
- **Campaña:** AO Revolution — "El único outlet americano" (tagline)
- **Fecha de lanzamiento:** 15 de mayo 2026 (quincena — estratégico)
- **Fases:** Expectativa (5–14 mayo) → Lanzamiento (15–17) → Conversión (18–31)
- Estrategia de contenido: cinematográfico, disruptivo, conexión humana total
- Posible evento físico de inauguración (estado: pendiente de definir según logística)

---

## 4. Sistema Discovery — herramientas HTML en producción

- Plataforma de diagnóstico estratégico
- Construida en HTML/JS single-file (sin frameworks)
- Hosteada en Vercel bajo el dominio `bralto.io`
- 3 formularios independientes según rol
- Cada uno genera un PDF de las respuestas adjunto al envío

### Endpoint de envío compartido

- **URL:** `POST /api/discovery/submit`
- **Payload:** `{ type, pdfBase64, pdfFilename, metadata, answeredCount, totalCount }`
- **Función:** Serverless en Vercel
- **Issue conocido:** redirect 307 de `bralto.io` → `www.bralto.io` puede corromper el POST
- **Fix documentado:** usar URL absoluta `https://www.bralto.io/api/discovery/submit` en el fetch

---

### 4.1 Discovery Estratégico — Liquidation Relaunch (AO)

- **URL:** `https://bralto.io/discovery/ao/`
- **Audiencia:** Christian Vindas / Gerencia
- **Título:** Discovery Estratégico · Liquidation Relaunch · American Outlet
- **Total de preguntas:** 34
- **Tipos de pregunta:** single, multi, text, pct (escala porcentual)
- **Acento de color:** Rojo `#e63946`

**Bloques temáticos:**

- `liquidation` (5 preguntas) — Mercadería de contenedores, mensaje del relanzamiento, evento físico, productos estrella, artículos estancados
- `rotacion` (3 preguntas) — Categorías con 4+ meses sin rotar, estrategia de movimiento entre tiendas
- `cliente` (4 preguntas) — Perfil del comprador, objeciones en piso, frases repetidas, ticket promedio
- `contenido` (3 preguntas) — Posts que generaron visitas físicas medibles, tipo de contenido que fracasó
- `equipo` (3 preguntas) — Equipo de contenido, disponibilidad para grabación
- `fidelizacion` (2 preguntas) — Estrategia de clientes frecuentes
- `mes` (2 preguntas) — Metas y prioridades del mes en curso

**Preguntas estratégicas clave:**

- `q01` — ¿Qué tipo de mercadería viene en los 2 contenedores? (multi)
- `q02` — ¿Qué se quiere comunicar con la reapertura del 3er piso? (multi)
- `q03` — ¿Habrá evento físico de inauguración del 3er piso? (single)
- `q04` — ¿Cuáles son los 3–5 productos estrella de los contenedores? (texto libre)
- `q05` — ¿Cuáles son los artículos de mayor valor con más tiempo sin venderse? (texto libre)
- `q07` — Categorías con 4+ meses sin rotar candidatas a moverse entre tiendas (multi)
- `q08` — ¿Estás de acuerdo con mover mercadería estancada entre los 3 PDVs? (single)
- `q09` — ¿Quién compra hoy? Edad, género, de dónde viene (multi)
- `q10` — ¿Qué objeciones escucha el equipo en piso? (multi)
- `q11` — ¿Qué historia oye repetida del cliente que entra? (multi)
- `q12` — Ticket promedio actual y meta del mes (single)
- `q13` — Post o historia que generó más visitas físicas medibles (multi)
- `q15` — Tipo de contenido que fracasó o no funcionó (multi)

---

### 4.2 Discovery Operativo — Administradores PDV

- **URL:** `https://bralto.io/discovery/admin/`
- **Audiencia:** Encargados de AO1, AO Florencia, AO Fortuna
- **Título:** Discovery Operativo · Administradores PDV · American Outlet
- **Total de preguntas:** 22
- **Tipos:** single, multi, text, pct
- **Acento de color:** Naranja `#ff6b2b`
- **Copy clave:** "Una estrategia integral de marketing digital para las 3 sucursales del grupo."

**Bloques temáticos:**

- `cliente` (4 preguntas) — Perfil de quien entra, objeciones, frases, horarios pico
- `producto` (3 preguntas) — Categorías que más se mueven, sorpresas de venta, recomendación de 3 productos para redes
- `operacion` (4 preguntas) — Personas en tienda, procesos manuales que quitan tiempo, herramientas digitales actuales, protocolo WhatsApp fuera de horario
- `digital` (3 preguntas) — Cómo se enteran de promociones, contenido que genera visitas, incomodidades con las redes
- `admin` (8 preguntas) — Top 5 productos, dolores del rol, disposición a colaborar, info exclusiva del encargado, acceso a redes, disposición para ser grabado, solicitud al marketing, compromiso

**Preguntas destacadas:**

- `q07` — "Si tuvieras que recomendarle a Bralto 3 productos para mostrar en redes, ¿cuáles serían?" (texto libre)
- `q11` — ¿Qué pasa cuando un cliente escribe por WhatsApp fuera de horario? (multi)
- `q18` — "¿Qué información tenés vos que NADIE más en el grupo tiene?" (multi) → capital de conocimiento tácito
- `q19` — ¿Tenés acceso administrativo a las redes de tu tienda? (single)
- `q20` — Disposición para que la tienda sea grabada (escala %)
- `q22` — Compromiso en una frase (texto libre)

---

### 4.3 Discovery Estratégico — Centro de Distribución

- **URL:** `https://bralto.io/discovery/cd/`
- **Audiencia:** Encargado de Bodega / Centro de Distribución
- **Título:** Discovery Estratégico · Centro de Distribución · American Outlet
- **Total de preguntas:** 25
- **Tipos:** single, multi, text, pct, matrix, distribution
- **Acento de color:** Teal (`var(--teal)`)

**Bloques temáticos:**

- `inventario` (7 preguntas) — Valor total del inventario, flujo mensual a PDVs, categorías del CD, matriz de rotación por categoría, productos que se agotan rápido, frecuencia de llegada, origen de importaciones
- `clasificacion` (6 preguntas) — Rotación rápida (<30 días), masivos de baja salida, premium de alto valor, lista de 5 productos premium con valor estimado, productos problemáticos
- `distribucion` (5 preguntas) — Distribución de valor hacia cada PDV, categorías hacia Florencia, hacia Fortuna, hacia Ciudad Quesada, criterio de decisión actual
- `operacion` (4 preguntas) — Personas en CD, herramientas de control de inventario, problemas operativos, disposición para actualizar mes a mes
- `capacitacion` (3 preguntas) — Disposición para capacitación en plataforma Bralto, funciones más útiles, cuándo puede iniciar

**Clasificación de inventario del CD (4 tipos):**

- 🟢 **Rotación rápida** — vuelan en menos de 30 días
- ⚡ **Masivos de baja salida** — grandes cantidades pero no rotan
- 👑 **Premium** — alto valor, poca salida, gran impacto en facturación
- 🔴 **Problemáticos** — masivos sin rotación de 4+ meses · dinero atorado

---

### 4.4 Diseño técnico compartido (todos los HTMLs Discovery)

**Stack:**

- HTML / JS single-file (sin frameworks)
- Google Fonts: `Sora` (display) + `JetBrains Mono` (mono / labels)
- Hosteado en Vercel bajo `bralto.io`
- Generación de PDF del lado del cliente antes del submit

**Paleta de colores (CSS variables):**

```css
--bg: #ffffff;
--surface: #f5f5f5;
--black: #0a0a0a;
--dark: #1a1a1a;
--orange: #ff6b2b;            /* admin PDV */
--orange-soft: rgba(255,107,43,0.08);
--red: #e63946;               /* ao / liquidation */
--red-soft: rgba(230,57,70,0.08);
--green: #16a34a;
--border: rgba(0,0,0,0.06);
--border-strong: rgba(0,0,0,0.1);
```

**Issues técnicos documentados:**

- Error 500 `{"error":"Error al enviar el correo"}` = falla en servicio de email serverless
- Causas probables:
  - Variable de entorno de email no configurada en Vercel
  - Dominio remitente no verificado
  - PDF demasiado grande (>4.5MB en Vercel Hobby)
  - Timeout de 10s
- Redirect 307 `bralto.io → www.bralto.io` puede corromper el body del POST
- Fix: usar URL absoluta en el fetch o configurar redirect inverso en `vercel.json`

---

## 5. Estrategia de contenido

### Estructura del equipo de contenido

- **Creador en PDV** — filma, publica y gestiona redes desde el piso de la tienda
- **Bralto** — produce calendarios provisionales, estrategia y dirección creativa
- **Josu Frames** — videografía estratégica y dirección de producción cuando aplica

### Calendario editorial — 4 semanas temáticas

- **Semana 1 — Reactivación** → despertar la audiencia, recordar que AO existe
- **Semana 2 — Liquidación** → urgencia, escasez, precio outlet, mover inventario estancado
- **Semana 3 — Experiencia** → mostrar la tienda, el equipo, el proceso de compra
- **Semana 4 — Cacería de Ofertas** → ganganeo, hunting de precio, engagement alto

### Reglas de contenido (sistema Bralto para AO)

- **Sin precios visibles** en materiales estratégicos, calendarios y PDFs de presentación
- Foco en contenido que genera **visitas físicas**, no métricas de vanidad
- Prioridad a **hooks de escasez y novedad** para mover inventario estancado

### Contenido que SÍ funciona

- Reels mostrando productos específicos con precio visible
- Historias con encuestas / dinámicas tipo "¿A o B?"
- Fotos de clientes felices en la tienda (prueba social)
- Videos de "qué llegó hoy" / unboxing
- Lives o transmisiones en vivo
- Detrás de cámaras del equipo

### Contenido que NO funciona

- Posts con mucho texto
- Videos sin precio visible (no comunican valor)
- Fotos genéricas de catálogo
- Frases motivacionales sin contexto
- Promociones sin sentido de urgencia

---

## 6. Datos del mercado y cliente

### Perfil del comprador AO

- Mujeres 25–45 años de San Carlos local (cliente frecuente, conoce la tienda)
- Hombres 25–45 años de San Carlos local
- Adolescentes y jóvenes 15–24 años (buscan marca y tendencia)
- Familias con hijos pequeños (ropa infantil y hogar)
- Adultos mayores 50+ años
- Clientes de zonas rurales: Pital, Aguas Zarcas, Venecia, La Tigra
- Turistas nacionales de paso (camino al Arenal o de regreso)
- Turistas extranjeros (compras esporádicas)
- Revendedores que compran al por mayor

### Objeciones en piso (mapeadas por el equipo)

- "¿Es nuevo o usado?" → confusión sobre el origen del producto
- "¿De qué país viene?" → procedencia / autenticidad
- "¿Tiene garantía o cambio?"
- "Está caro" → objeción de precio frontal
- "Lo encuentro más barato en otro lado" → comparación con competencia
- "No tienen mi talla" → disponibilidad de inventario
- "¿Es de marca real o falsificación?" → duda de autenticidad
- "Vuelvo otro día" → procrastinación de compra
- "No registramos objeciones de forma sistemática" → gap operativo

### Frases que repite el cliente

- "Vine porque lo vi en Instagram" → prueba social del contenido
- "Esto no lo encontraba en ningún lado" → exclusividad regional
- "Mi vecina/amiga me recomendó" → boca a boca
- "Vengo cada vez que llega producto nuevo" → anticipación de novedades
- "No sabía que estaban acá" → descubrimiento
- "Pasé por aquí y me llamó la atención" → tráfico físico espontáneo
- "Estaba buscando algo específico" → intención de compra clara

### Ticket promedio (escalas mapeadas)

- Menos de ₡8.000 actual → meta subir a ₡12.000
- ₡8.000–₡15.000 actual → meta subir a ₡20.000
- ₡15.000–₡25.000 actual → meta subir a ₡35.000
- Más de ₡25.000 actual → meta subir 30%+
- Sin métrica activa → activar el tracking

---

## 7. Producto e importaciones

### Categorías de producto

- Ropa hombre (camisas, pantalones, chaquetas)
- Ropa mujer
- Ropa niño / niña
- Calzado deportivo de marca (Nike, Adidas, Puma, etc.)
- Calzado casual / formal de marca
- Accesorios (gorras, mochilas, carteras)
- Electrodomésticos / línea blanca
- Herramientas

### Origen de importaciones

- EE.UU. (liquidación de retailers)
- Panamá
- China / Asia
- México
- Europa

### Frecuencia de llegada de mercadería

- Mensual
- Cada 2–3 meses
- Trimestral
- Irregular / según disponibilidad del proveedor

---

## 8. Distribución interna de inventario

### Lógica de distribución por PDV

- **AO Florencia** — zona local San Carlos → perfil local / familiar
- **AO Fortuna** — zona turística Arenal → perfil turístico / lifestyle / moda
- **AO Ciudad Quesada (AO1)** — centro urbano · sede principal → mayor volumen total · línea Liquidation

### Criterios de distribución actuales

- Decisión centralizada de gerencia
- Encargados de cada tienda solicitan lo que necesitan
- Rotación automática por categoría
- Sin criterio definido (pendiente de estructurar con Bralto)

---

## 9. Automatización y tecnología

### Canal de comunicación principal

- **WhatsApp** — canal activo de atención al cliente
- Protocolo fuera de horario: sin definir / pendiente de automatización
- Automatización prevista: bot de respuesta + captación de leads

### Plataforma Bralto (all-in-one para AO)

- Control de inventario mensual actualizable desde el CD
- Dashboard de métricas de ventas y tráfico
- Automatizaciones de comunicación (WhatsApp, seguimiento)
- Calendario de contenido integrado
- CRM básico de clientes

---

## 10. Assets y deliverables producidos por Bralto

### En producción

- HTML interactivo — Discovery Estratégico AO Liquidation Relaunch (`/discovery/ao/`) ✅
- HTML interactivo — Discovery Operativo Admin PDV (`/discovery/admin/`) ✅
- HTML interactivo — Discovery Estratégico CD (`/discovery/cd/`) ✅

### Entregados

- HTML interactivo — Calendario editorial 4 semanas temáticas ✅
- HTML mobile — versión mobile-optimized del calendario ✅
- PDF editorial — calendario rediseñado estilo editorial ✅
- HTML interactivo — Calendarios Mayo 2026 AO Revolution (`calendario-mayo-2026.html`) ✅
  - Calendario de publicaciones día a día (creador de contenido)
  - Calendario de campañas publicitarias (Meta + Google + WhatsApp)
  - Calendario de visitas internas (4 visitas semanales con agenda)

### Estándar de diseño (todos los assets AO)

- **Tipografía:** Sora (display) + JetBrains Mono (mono / etiquetas / labels)
- **Paleta:** naranja `#ff6b2b` + negro `#0a0a0a` sobre blanco `#ffffff`
- **Estilo:** limpio, editorial, mobile-first
- **Regla de contenido:** sin precios en materiales de presentación / estrategia

---

## 11. Mensajes operativos por rol (WhatsApp)

### Encargado de Bodega (CD)

> Cuestionario de diagnóstico operativo para Centro de Distribución. Preguntas de selección única — sin respuestas correctas ni incorrectas. El objetivo es entender cómo fluye el trabajo desde adentro para identificar puntos de mejora reales.
> 🔗 `https://bralto.io/discovery/cd/`

### Encargado AO1

> Cuestionario de diagnóstico para los encargados de American Outlet. Diseñado para capturar tu lectura del piso de ventas: lo que funciona, lo que no, y lo que se podría mejorar.
> 🔗 `https://bralto.io/discovery/ao/`

### Encargado AO Florencia

> Cuestionario de diagnóstico para tu punto de venta en Florencia. Selección única — la idea es entender cómo está corriendo la operación desde tu posición.
> 🔗 `https://bralto.io/discovery/ao/`

### Encargado AO La Fortuna

> Cuestionario para el equipo de La Fortuna. Preguntas de selección única — queremos conocer cómo se vive la operación desde tu punto de vista.
> 🔗 `https://bralto.io/discovery/ao/`

### Christian Vindas (Discovery Estratégico)

> Discovery Estratégico enfocado en el relanzamiento de la línea Liquidation de American Outlet. Son 34 preguntas de selección única — diseñadas para mapear la visión estratégica del negocio: cómo está posicionada la marca hoy, hacia dónde va y qué oportunidades hay sobre la mesa.
> 🔗 `https://bralto.io/discovery/ao/`

### Saludo general (PDV + CD + Administración + Gerencia)

> Estamos arrancando un proceso de diagnóstico operativo para American Outlet — una herramienta que nos va a permitir entender cómo está funcionando cada área desde adentro: ventas, bodega, distribución y administración. En los próximos minutos les va a llegar un cuestionario corto, de selección única, diseñado específicamente para su rol.

---

## 12. Contexto estratégico ampliado

### Rol del proyecto dentro del portafolio Bralto

- Caso de uso de **reactivación de retail** con múltiples PDVs
- Modelo de **sistema Discovery previo a ejecución** (diagnóstico antes de estrategia)
- Integración de **marketing + operación comercial + tecnología** en un solo flujo
- Prototipo replicable para otros clientes del sector retail

### Por qué AO es un caso representativo

- Tiene múltiples PDVs con lógicas de cliente distintas (local vs turístico)
- Tiene Centro de Distribución propio (inventario centralizado que define las campañas)
- Tiene producto de marca a precio outlet (narrativa de valor clara y diferenciada)
- Tiene línea de liquidación que requiere estrategia de urgencia y escasez
- Necesita automatización de WhatsApp, contenido en PDV y gestión de inventario integrada

### San Carlos como mercado (contexto local)

- Zona norte de Costa Rica (región del Arenal)
- Mezcla de mercado local (Ciudad Quesada, Florencia) y turístico (La Fortuna / volcán)
- Boca a boca activo en comunidades locales
- Turistas nacionales e internacionales de paso hacia el Arenal

---

## 14. Propuesta Comercial — Inversión y Servicios

> Fuente: propuesta-american-outlet.html entregada a Christian Vindas · 2026
> El monto mensual fue ajustado a $2,000/mes cerrados (acuerdo verbal posterior a la propuesta).

### Estructura de precios

**Mes 1 — Onboarding y configuración completa**
- Inversión: **$3,150** (pago único de arranque)
- Comparativa de mercado: $7,900 con proveedores separados → ahorro del 72%

**Mes 2 en adelante — Operación mensual recurrente**
- Inversión: **$2,000/mes** (monto cerrado acordado)

---

### Desglose de servicios Mes 1 ($3,150)

| Servicio | Precio Bralto | Precio mercado |
|---|---|---|
| Google Ads (gestión 3 tiendas) | $400 | $1,500 |
| Gestión de Redes (posts, reels, calendario) | $350 | $800 |
| Campañas Meta (Facebook & Instagram Ads) | $350 | $500 |
| Sitio Web (diseño, desarrollo, deploy) | $850 | $2,500 |
| Producción Audiovisual + activaciones 3 tiendas | $750 | $1,500 |
| Plataforma All-in-One (CRM, GTM, GA4, n8n) | $87 | $500 |
| Agente + Automatizaciones (atención 24/7) | $363 | $600 |
| **Total** | **$3,150** | **~$7,900** |

---

### Servicios incluidos mensualmente (Mes 2+) — $2,000/mes

- Mantenimiento sitio web & bot de WhatsApp
- Campañas Ads (Meta + Google) para las 3 tiendas
- Producción audiovisual mensual
- Activaciones en tienda (según calendario)
- Gestión de redes sociales
- Soporte y optimización continua

---

### Roadmap técnico — Implementación Mes 1

**Semana 1 (Días 1–7) — Fundamentos & Configuración**
- Google Tag Manager: instalación del contenedor, triggers y tags base
- Google Analytics 4: propiedad, data streams, eventos de conversión, vinculación GTM
- Meta Business Suite: cuentas publicitarias, píxel de Meta, catálogo (3 tiendas)
- Identidad & Branding: recopilación de assets, línea visual y tono de comunicación

**Semana 2 (Días 8–14) — Sitio Web & Plataforma**
- Diseño y desarrollo del sitio: responsive, copywriting, SEO base, deploy en producción
- Plataforma Bralto: CRM, pipelines de venta, automatizaciones iniciales
- Integraciones: sitio ↔ GTM ↔ GA4 ↔ Meta Pixel ↔ Plataforma

**Semana 3 (Días 15–21) — Bot & Automatización**
- Bot de WhatsApp: flujos de respuesta automática (ubicaciones, horarios, promos, FAQs)
- Flujos n8n: automatización de leads (WhatsApp → CRM → notificaciones equipo)
- Producción audiovisual: primera sesión de fotos y video en las 3 sucursales

**Semana 4 (Días 22–30) — Lanzamiento & Activación**
- Lanzamiento de campañas Meta & Google por sucursal + campaña de marca
- Redes sociales en vivo: inicio del calendario de contenido (posts, reels, stories)
- Primera activación en tienda: reactivación de marca con promos por bloques horarios
- QA & Testing: verificación de tracking, flujos bot, integraciones y reportes

---

### Proyecciones de crecimiento

**Situación actual (sin marketing digital):**
- Facturación estimada: ~$35K/mes
- Visitas web: 0
- Leads digitales: 0
- Presencia online: ninguna

**Proyección con Bralto (Mes 3–6):**
- Facturación proyectada: ~$42K–$49K/mes
- Visitas web: 2,500–4,000/mes
- Leads digitales: 150–300/mes
- Presencia activa en redes, Google y WhatsApp

**Fases de crecimiento:**
- **M1–M2 (Fundación):** configuración técnica, lanzamiento sitio, activación de campañas → +5–8% tráfico a tienda
- **M3–M4 (Tracción):** campañas optimizadas con datos reales, bot capturando leads 24/7 → +10–15% en ventas
- **M5–M6 (Escalamiento):** marca posicionada, flujo constante de clientes digitales → +20–40% en facturación

---

### Estrategia mensual — 4 semanas temáticas (versión propuesta)

**Semana 1 — Reactivación de Marca**
- Nueva imagen con contenido profesional
- Promos por bloques horarios (urgencia y tráfico)
- KPIs: branding, tráfico, urgencia
- Contenido: 12 flyers + reel de renovación + campaña alcance × sucursal + activación promos por horario

**Semana 2 — Liquidación Inteligente**
- "Horas Locas por Categoría" — combos y descuentos por tiempo limitado
- Mover inventario lento con urgencia real
- KPIs: inventario, conversión, urgencia
- Contenido: 12 flyers + reel detrás de escenas + campaña tráfico a tienda + activación Horas Locas

**Semana 3 — Experiencia Familiar**
- Fin de semana con ruleta de descuentos, premios y dinámicas para la familia
- Conexión emocional y fidelización
- KPIs: emocional, familia, fidelización
- Contenido: 12 flyers + reel familias + ruleta + campaña engagement + activación premios/dinámicas

**Semana 4 — Cacería de Ofertas**
- Ofertas ocultas en tienda: cliente recorre, interactúa, permanece más tiempo
- Expectativa en redes / viralidad
- KPIs: engagement, interacción, viral
- Contenido: 12 flyers + reel "¿Te atrevés?" + campaña expectativa + activación ofertas ocultas

**Totales mensuales por tipo de pieza:**
- 48 flyers · 6 reels · 10 campañas · 4 activaciones en tienda

---

## 15. Quick reference — para Claude Code (actualizado)

### URLs en producción

- Discovery AO (Christian / Liquidation Relaunch) → `https://bralto.io/discovery/ao/`
- Discovery Admin PDV → `https://bralto.io/discovery/admin/`
- Discovery CD (Bodega) → `https://bralto.io/discovery/cd/`
- Endpoint backend → `https://www.bralto.io/api/discovery/submit`

### Variables de marca

- Color principal AO / Liquidation: `#e63946` (rojo)
- Color admin PDV: `#ff6b2b` (naranja)
- Negro de marca: `#0a0a0a`
- Tipografía display: `Sora`
- Tipografía mono: `JetBrains Mono`

### Precios del contrato (referencia rápida)

- Mes 1 (setup + onboarding): **$3,150**
- Mes 2 en adelante (mensualidad): **$2,000/mes cerrados**

### Reglas hard

- Nunca incluir precios en materiales estratégicos / PDFs de presentación
- Siempre URL absoluta `https://www.bralto.io/...` en fetch (no `bralto.io`)
- Stack obligatorio: HTML / JS single-file, sin frameworks
- PDF cliente-side antes del submit (limit 4.5MB en Vercel Hobby)

---

*Documento mantenido para uso interno con Claude Code.*
*Actualizar cuando haya nuevos deliverables, cambios en PDVs, evolución del proyecto Liquidation Relaunch o nuevos assets producidos por Bralto.*
