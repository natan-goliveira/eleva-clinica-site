import { Metadata } from 'next'

interface PageSEOProps {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  noindex?: boolean
}

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  ogImage = '/og-image.jpg',
  noindex = false,
}: PageSEOProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'website',
      locale: 'pt_BR',
      siteName: 'Site73',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
    alternates: {
      canonical: baseUrl,
    },
  }
}
