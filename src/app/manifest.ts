import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '73 Code — Sistemas de Gestão para Clínicas',
    short_name: '73 Code',
    description: 'Sistemas de gestão personalizados para clínicas terapêuticas, odontológicas e estéticas.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#427CFA',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
    ],
  }
}
