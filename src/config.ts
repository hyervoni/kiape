/**
 * Single source of truth for business data and editable copy.
 * Edit this file to update contact channels, materials, FAQs, etc.
 */

export const site = {
  name: 'KIAPE',
  legalName: 'Kiape',
  url: 'https://www.kiape.co',
  title: 'KIAPE · Instalación de suelos premium en Mallorca',
  description:
    'Instalación de tarima, parquet en espiga, porcelánico de gran formato, vinilo y laminado en Mallorca. Un único equipo: medición, preparación del soporte y acabado. Presupuesto cerrado.',
  locale: 'es_ES',
  region: 'Mallorca, Illes Balears',
  // TODO(kiape): confirm WhatsApp number and public Facebook URL.
  phone: '+34613151919',
  phoneDisplay: '+34 613 151 919',
  whatsapp: '34613151919',
  email: 'info@kiape.co',
  instagram: 'https://www.instagram.com/kiape.suelos',
  instagramHandle: '@kiape.suelos',
  facebook: '',
  // TODO(kiape): legal data required by LSSI-CE before going live.
  legal: {
    holder: '[Razón social o nombre del titular]',
    taxId: '[NIF / CIF]',
    address: '[Domicilio fiscal], Mallorca, España',
    registry: '', // e.g. 'Registro Mercantil de Palma, Tomo X, Folio Y, Hoja Z' (companies only)
  },
  /** Optional Web3Forms access key (public). Without it, the form falls back to WhatsApp. */
  formKey: import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '',
  /** Optional Google Tag Manager container ID (GTM-XXXXXXX). Requires a cookie banner before going live in the EU. */
  gtmId: import.meta.env.PUBLIC_GTM_ID ?? '',
} as const;

export const waLink = (text = 'Hola KIAPE, me gustaría solicitar una visita para un proyecto de suelos.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export type MaterialKey = 'tarima' | 'porcelanico' | 'vinilo' | 'laminado';

export const materials: {
  key: MaterialKey;
  name: string;
  lead: string;
  specs: [string, string][];
  image: string;
  alt: string;
}[] = [
  {
    key: 'tarima',
    name: 'Tarima y parquet',
    lead: 'Madera natural en lama ancha, espiga o punta de Hungría. Calidez que mejora con los años.',
    specs: [
      ['Formatos', 'Lama, espiga, Hungría'],
      ['Ancho', '90 – 300 mm'],
      ['Ideal para', 'Salones, dormitorios'],
    ],
    image: 'tarima-espiga',
    alt: 'Suelo de roble en espiga en un recibidor con techo de madera',
  },
  {
    key: 'porcelanico',
    name: 'Porcelánico',
    lead: 'Gran formato con juntas mínimas, continuidad entre interior y terraza. Resistente y atemporal.',
    specs: [
      ['Formatos', 'Hasta 120 × 280 cm'],
      ['Junta', '1,5 – 2 mm'],
      ['Ideal para', 'Baños, cocinas, exterior'],
    ],
    image: 'porcelanico-bano',
    alt: 'Baño con porcelánico de gran formato en tono oscuro y mármol',
  },
  {
    key: 'vinilo',
    name: 'Vinilo',
    lead: 'Aspecto de madera o piedra, cien por cien resistente al agua y silencioso al pisar.',
    specs: [
      ['Sistema', 'Clic o pegado'],
      ['Espesor', '4 – 8 mm'],
      ['Ideal para', 'Alquiler vacacional, reformas'],
    ],
    image: 'vinilo-estancia',
    alt: 'Estancia luminosa con suelo vinílico de tono roble claro',
  },
  {
    key: 'laminado',
    name: 'Laminado',
    lead: 'Alta resistencia al desgaste con acabados realistas. La opción más ágil para renovar.',
    specs: [
      ['Clase de uso', 'AC4 – AC5'],
      ['Espesor', '8 – 12 mm'],
      ['Ideal para', 'Viviendas con mucho uso'],
    ],
    image: 'laminado-salon',
    alt: 'Salón con suelo laminado en espiga y luz natural',
  },
];

export const steps = [
  {
    // TODO(kiape): confirm that samples are brought to the visit.
    title: 'Visita con muestras',
    text: 'Medimos, revisamos humedad y nivel del soporte y te llevamos muestras para decidir en casa. Sin coste.',
  },
  {
    title: 'Propuesta cerrada',
    text: 'Material, preparación, instalación y plazos en un presupuesto por escrito, sin partidas sorpresa.',
  },
  {
    title: 'Preparación del soporte',
    text: 'Nivelamos, aislamos y protegemos la vivienda. Es la parte que no se ve y la que más dura.',
  },
  {
    title: 'Instalación y entrega',
    text: 'El mismo equipo de principio a fin. Remates, rodapiés y obra entregada limpia.',
  },
];

/**
 * Real client testimonials only (e.g. copied from Google reviews, with permission).
 * The section is hidden while this list is empty.
 */
export const testimonials: { quote: string; name: string; context: string }[] = [
  // { quote: '…', name: 'Nombre A.', context: 'Tarima en espiga · Santa Ponsa' },
];

export const faqs = [
  {
    q: '¿En qué zonas de Mallorca trabajáis?',
    a: 'Trabajamos en toda la isla: Palma, Calvià, Andratx, Sóller, Pollença, Alcúdia, Santanyí y el resto de municipios. Consúltanos para obras fuera de Mallorca.',
  },
  {
    q: '¿Suministráis el material o solo instaláis?',
    a: 'Ambas opciones. Podemos asesorarte y suministrar el material, o instalar el que ya hayas elegido con tu interiorista o arquitecto.',
  },
  {
    q: '¿Cuánto tarda la instalación?',
    a: 'Depende de la superficie y del estado del soporte. Como referencia, una vivienda de 100 m² suele llevar entre 3 y 7 días. Te damos el plazo exacto por escrito en el presupuesto.',
  },
  {
    q: '¿Se puede instalar sobre el suelo existente?',
    a: 'En muchos casos sí, sobre todo con vinilo, laminado y algunos porcelánicos finos. Lo comprobamos en la visita técnica midiendo nivel, humedad y alturas de puertas.',
  },
  {
    q: '¿Trabajáis con interioristas, arquitectos y property managers?',
    a: 'Sí. Ejecutamos proyectos de estudios de interiorismo y gestionamos obras para propietarios que no residen en la isla, con reportes fotográficos del avance.',
  },
];
