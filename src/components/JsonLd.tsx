import { siteContent } from '@/data/content';

interface JsonLdProps {
  data: Record<string, unknown>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Organization Schema
export function OrganizationSchema() {
  const { brand } = siteContent;
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: brand.name,
    url: brand.url,
    logo: `${brand.url}/assets/logo-73code.svg`,
    description: brand.tagline,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: brand.email,
    },
    sameAs: [
      'https://linkedin.com/company/73code',
      'https://instagram.com/73code',
    ],
  }

  return <JsonLd data={schema} />
}

// WebSite Schema
export function WebSiteSchema() {
  const { brand } = siteContent;
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: brand.name,
    url: brand.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${brand.url}/busca?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return <JsonLd data={schema} />
}

// SoftwareApplication Schema
export function SoftwareApplicationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Sistema de Gestão 73 Code',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    description: 'Sistema de gestão sob medida para clínicas com módulos de agenda, prontuário, painel operacional e fluxo de atendimento.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'BRL',
      businessFunction: 'Sell',
    },
  }

  return <JsonLd data={schema} />
}

// FAQ Schema
export function FAQSchema() {
  const { faq } = siteContent;
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return <JsonLd data={schema} />
}

// All Schemas Combined
export function AllSchemas() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <SoftwareApplicationSchema />
      <FAQSchema />
    </>
  )
}
