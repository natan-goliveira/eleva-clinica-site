# 📁 Estrutura de Pastas - Site73

## Arquitetura do Projeto

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Página inicial
│   ├── globals.css              # Estilos globais
│   ├── sitemap.ts              # Sitemap automático
│   ├── robots.ts               # Robots.txt
│   └── manifest.ts             # PWA manifest
│
├── components/                  # Componentes React
│   ├── backgrounds/            # Efeitos de background
│   │   └── LightPillar.tsx    # Efeito pilar de luz
│   ├── sections/               # Seções de página
│   │   └── HeroSection.tsx    # Seção hero
│   ├── layout/                 # Componentes de layout
│   │   ├── Header.tsx         # (futuro)
│   │   └── Footer.tsx         # (futuro)
│   └── ui/                    # Componentes shadcn/ui
│
├── lib/                        # Utilitários e helpers
│   ├── utils.ts               # Funções utilitárias (cn)
│   └── seo.ts                 # Helpers de SEO
│
├── hooks/                      # Custom React Hooks
│   └── (futuros hooks)
│
├── types/                      # TypeScript types
│   └── (futuros tipos)
│
└── constants/                  # Constantes da aplicação
    └── (futuras constantes)
```

## Convenções

### Nomenclatura
- **Componentes**: PascalCase (e.g., `HeroSection.tsx`)
- **Utilitários**: camelCase (e.g., `utils.ts`)
- **Constantes**: UPPER_SNAKE_CASE (e.g., `API_URL`)

### Organização
- **backgrounds/**: Efeitos visuais e animações de fundo
- **sections/**: Seções completas de página (Hero, Features, About, etc)
- **layout/**: Componentes estruturais (Header, Footer, Sidebar)
- **ui/**: Componentes reutilizáveis do design system (shadcn/ui)

### Imports
Use sempre o alias `@/` para imports:
```tsx
import { HeroSection } from '@/components/sections/HeroSection'
import { cn } from '@/lib/utils'
```
