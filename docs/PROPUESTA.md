# KIAPE — Análisis y propuesta visual

## 1. Diagnóstico de kiape.co

| Aspecto | Estado actual | Impacto |
|---|---|---|
| Servicio | Instalación de suelos: vinilo, porcelánico, tarima, laminado. Base en Mallorca. | Claro, pero solo como 4 etiquetas sin explicación. |
| Historia | Proyectos en Latinoamérica, crecimiento en Australia, ahora Mallorca. | Activo diferencial **no explotado**. |
| Propuesta de valor | "Profesionalismo, atención al detalle y buen gusto", "como si fuera nuestra propia casa". | Buen tono humano; enterrado en /nosotros. |
| Conversión | Sin CTA en home, sin WhatsApp, sin Instagram, formulario genérico. | Fuga casi total del tráfico de Instagram. |
| Confianza | Sin proceso, sin garantías, sin FAQ, foto de stock (Pexels) en contacto, crédito de plantilla Wix "© 2023 Ground Floor". | Resta credibilidad premium. |
| SEO | Wix, sin contenido indexable relevante ("instalación de suelos Mallorca", "tarima", "porcelánico gran formato"…). | Invisible orgánicamente. |

## 2. Público objetivo

1. **Propietarios de villas y viviendas premium en Mallorca** (residentes y compradores internacionales: alemanes, británicos, nórdicos). Valoran: puntualidad, obra limpia, interlocutor único, presupuesto cerrado.
2. **Interioristas, arquitectos y gestores de reformas / property managers** que necesitan un instalador fiable para ejecutar su proyecto.
3. **Usuarios de Instagram en móvil**: llegan por una foto, deciden en segundos, prefieren WhatsApp a un formulario largo.

## 3. Referencias internacionales (inspiración, no copia)

| Referencia | Qué hacen bien | Qué tomamos |
|---|---|---|
| **Dinesen** (DK) | Fotografía editorial a sangre, silencio, mucho blanco, el material como protagonista. | Ritmo pausado, imágenes grandes, texto mínimo. |
| **Listone Giordano** (IT) | Discurso de oficio y perfección, la madera como arte. | Lenguaje de "oficio", ficha técnica cuidada. |
| **Havwoods** (UK) | Muestras gratuitas, consultoría de diseño personal, captación clara. | CTA de bajo compromiso: "visita técnica sin coste". |
| **Mafi / Atelier des Granges** | Texturas en primer plano, tonos naturales, tipografía serif elegante. | Paleta mineral y serif de display. |
| **Mutina / Royal Mosa** (porcelánico) | Gran formato, composición arquitectónica, fichas tipo datasheet. | Bloques de especificaciones por material. |

Patrones comunes del segmento premium: poca copy y muy precisa, fotos de interiores reales con luz natural, nada de "ofertas", conversión mediante **consulta personal** y no carrito.

## 4. Posicionamiento propuesto

> **KIAPE — Suelos instalados con oficio, en Mallorca.**
> Un único equipo que mide, prepara e instala; presupuesto cerrado por escrito y obra entregada limpia.

Mensaje central: *"El suelo, a la altura de la casa."*
Diferenciales: experiencia en tres continentes · interlocutor único · preparación del soporte como parte del trabajo · trato de "nuestra propia casa".

## 5. Dirección visual

- **Tono:** editorial mediterráneo, sobrio y cálido. Inspirado en la *piedra de marès* mallorquina, la cal y el roble.
- **Paleta:**
  - `--bone #F2EDE4` (cal / fondo)
  - `--mares #E3D8C6` (piedra de marès, superficies)
  - `--ink #1B1915` (texto)
  - `--oak #8B6A47` (acento: roble aceitado)
  - `--olive #4A5040` (acento secundario: olivo)
- **Tipografía:** *Instrument Serif* (titulares, en itálica para el énfasis) + *Hanken Grotesk* (texto y UI). Autoalojadas, sin llamadas a Google.
- **Detalle memorable:** el lenguaje del **instalador**. Regla milimetrada como separador, numeración de sección como cotas (`01 — 04`) y fichas técnicas por material (formato, ancho en mm, dónde rinde mejor). Comunica precisión sin decir "somos precisos".
- **Fotografía:** interiores con luz natural, suelo visible en el primer tercio de la imagen. Las fotos actuales son **placeholders de Unsplash**: deben sustituirse por obras reales de KIAPE (ver README).
- **Movimiento:** revelado suave al hacer scroll (opacidad + 12px), zoom lento del hero y nada más. Se respeta `prefers-reduced-motion`.
- **Evitamos:** gradientes, blobs, iconos genéricos, tarjetas dentro de tarjetas, cifras inventadas y testimonios falsos.

## 6. Estructura de la landing

1. **Hero** a sangre: titular, subtítulo con zona y materiales, CTA "Solicitar visita" + WhatsApp.
2. **Credenciales**: trayectoria Latinoamérica → Australia → Mallorca y tres compromisos.
3. **Manifiesto**: la frase "como si fuera nuestra propia casa".
4. **Materiales**: 4 fichas técnicas (carrusel con scroll-snap en móvil).
5. **Método**: 4 pasos, de la visita a la entrega.
6. **Proyectos**: galería editorial asimétrica.
7. **FAQ**: preguntas reales de compra (también como `FAQPage` en JSON-LD).
8. **Contacto**: formulario corto (5 campos) + WhatsApp + teléfono + email.
9. **Barra fija de CTA en móvil** (WhatsApp / Pedir visita).

## 7. Conversión, SEM e Instagram

- CTA principal repetido en hero, tras materiales y en barra fija móvil.
- WhatsApp con mensaje precargado según el material elegido.
- Captura de `utm_*`, `gclid` y `fbclid` en campos ocultos → atribución SEM/Meta.
- Página `/gracias` para medir conversiones en Google Ads / Meta.
- Eventos en `dataLayer` (`lead_form_submit`, `whatsapp_click`, `phone_click`), listos para GTM.
- Imagen OG 1200×630, `og:locale es_ES`, enlace "link in bio" directo a `/#contacto`.

## 8. SEO técnico

Metadatos únicos, canonical, Open Graph y Twitter Card, JSON-LD `HomeAndConstructionBusiness` + `FAQPage`, sitemap, robots.txt, HTML semántico con un solo `h1`, imágenes AVIF/WebP responsive con `alt` descriptivo y LCP con prioridad alta.
Keywords objetivo: *instalación de suelos Mallorca, instalador de tarima Mallorca, suelo porcelánico gran formato Mallorca, suelo vinílico Palma, parquet espiga Mallorca*.

## 9. Pendiente de validar con KIAPE

- Número de WhatsApp (se usa el teléfono de la web: +34 613 151 919).
- Usuario de Instagram y URL pública de Facebook.
- Si suministran material o solo instalan (la copy dice "suministro o instalación").
- Zona de servicio exacta y años de experiencia.
- Fotos reales de obras y testimonios verificables.
- Proveedor del formulario (Web3Forms/Formspree) y IDs de GTM/Meta Pixel + banner de cookies (RGPD).
