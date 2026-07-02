export type ServiceSlug =
  | 'cargo-supervision'
  | 'vessel-surveying'
  | 'certification'
  | 'port-inspections'
  | 'consultancy-training'
  | 'environmental-safety'

export interface ServiceMeta {
  slug: ServiceSlug
}

// order defines display order; titles/descriptions live in i18n locales
export const services: ServiceMeta[] = [
  { slug: 'cargo-supervision' },
  { slug: 'vessel-surveying' },
  { slug: 'certification' },
  { slug: 'port-inspections' },
  { slug: 'consultancy-training' },
  { slug: 'environmental-safety' },
]

export interface DocumentMeta {
  file: string
  key: 'declaration' | 'customerRelations' | 'complaintForm'
}

export const documents: DocumentMeta[] = [
  { key: 'declaration', file: '/docs/declaration-of-independence-and-impartiality.pdf' },
  { key: 'customerRelations', file: '/docs/customer-relations-procedure.pdf' },
  { key: 'complaintForm', file: '/docs/complaint-objection-form.pdf' },
]
