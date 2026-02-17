# Design System - Eleva Clínicas

## 🎨 Paleta de Cores

### Cores Primárias
```css
--primary-blue: #427CFA;
--primary-blue-light: #7AB3E8;
--primary-blue-dark: #3578C4;
--primary-blue-accent: #4169E1;
```

### Cores de Fundo
```css
--background-light: #F8FAFC;
--background-alt: #F0F7FF;
--background-white: #FFFFFF;
--background-dark: #0F172A;
--background-neutral: #0E172A;
```

### Cores de Texto
```css
--text-dark: #0F172A;
--text-body: #374151;
--text-muted: #64748B;
--text-light-muted: #6B7280;
--text-white: #FFFFFF;
--text-white-muted: rgba(255, 255, 255, 0.8);
--text-white-subtle: rgba(255, 255, 255, 0.5);
```

### Cores de Interface
```css
--border: #E2E8F0;
--border-gray: #E5E7EB;
--shadow-light: rgba(0, 0, 0, 0.04);
--shadow-medium: rgba(0, 0, 0, 0.08);
--shadow-heavy: rgba(0, 0, 0, 0.12);
--overlay-dark: rgba(15, 23, 42, 0.6);
--overlay-darker: rgba(15, 23, 42, 0.8);
```

## 🔤 Tipografia

### Fontes
```css
--font-heading: 'PP Radio Grotesk', system-ui, sans-serif;
--font-body: 'DM Sans', system-ui, sans-serif;
--font-mono: 'Geist Mono', monospace;
```

### Pesos de Fonte
```css
--font-weight-light: 200;      /* PP Radio Grotesk Ultra Light */
--font-weight-normal: 400;     /* Regular */
--font-weight-medium: 500;     /* DM Sans Medium */
--font-weight-semibold: 600;   /* DM Sans Semibold */
--font-weight-bold: 700;       /* DM Sans Bold */
```

### Tamanhos de Fonte
```css
--font-size-xs: 0.6875rem;     /* 11px */
--font-size-sm: 0.8125rem;     /* 13px */
--font-size-base: 1rem;        /* 16px */
--font-size-lg: 1.125rem;      /* 18px */
--font-size-xl: 1.25rem;       /* 20px */
--font-size-2xl: 1.5rem;       /* 24px */
--font-size-3xl: 1.875rem;     /* 30px */
--font-size-4xl: 2.25rem;      /* 36px */

/* Responsive Headings */
--font-size-h1: clamp(2.75rem, 5.5vw, 4.5rem);
--font-size-h2: clamp(2rem, 4vw, 3rem);
--font-size-h3: clamp(1.5rem, 3vw, 2rem);
```

### Tracking (Letter Spacing)
```css
--tracking-tighter: -0.025em;
--tracking-tight: -0.05em;
--tracking-normal: 0;
--tracking-wide: 0.08em;
--tracking-wider: 0.2em;
--tracking-widest: 0.4em;
```

## 📏 Espaçamentos

### Sistema de Escala Responsiva
```css
/* Desktop Base */
--size-unit: 16px;
--size-container-ideal: 1440px;
--size-container-min: 992px;
--size-container-max: 1920px;

/* Seções */
--spacing-section-sm: 80px;
--spacing-section-md: 120px;
--spacing-section-lg: 140px;

/* Padding padrão das seções */
--section-padding-y: clamp(5rem, 8vw, 8.75rem);
--section-padding-x: clamp(1.5rem, 4vw, 2rem);
```

### Breakpoints
```css
--breakpoint-mobile: 479px;
--breakpoint-mobile-landscape: 767px;
--breakpoint-tablet: 991px;
--breakpoint-desktop: 992px;
--breakpoint-desktop-large: 1920px;
```

## 🎯 Arredondamento (Border Radius)

### Sistema de Border Radius
```css
--radius-sm: 0.75rem;          /* 12px */
--radius-md: 1rem;             /* 16px */
--radius-lg: 1.25rem;          /* 20px */
--radius-xl: 1.5rem;           /* 24px */
--radius-2xl: 2.5rem;          /* 40px - Padrão para cards grandes */
--radius-full: 50px;           /* Pills e botões circulares */

/* Radius específicos do projeto */
--radius-card: 2.5rem;         /* Cards principais */
--radius-button: 0.75rem;      /* Botões padrão */
--radius-input: calc(0.75rem - 0.2rem); /* Inputs */
```

## 🎭 Sombras (Shadows)

### Sistema de Elevação
```css
--shadow-card: 0 4px 24px rgba(0, 0, 0, 0.04);
--shadow-card-hover: 0 8px 32px rgba(0, 0, 0, 0.08);
--shadow-header: 0 2px 24px rgba(0, 0, 0, 0.08);
--shadow-mockup: 0 20px 60px rgba(0, 0, 0, 0.12);
--shadow-primary: 0 8px 32px rgba(66, 124, 250, 0.12);
--shadow-button: 0 4px 24px rgba(15, 23, 42, 0.12);

/* Sombras específicas */
--shadow-floating: 0 8px 32px rgba(0, 0, 0, 0.12);
--shadow-minimal: 0 1px 3px rgba(0, 0, 0, 0.1);
```

## ⚡ Animações e Transições

### Durações
```css
--duration-fast: 200ms;
--duration-default: 300ms;
--duration-slow: 500ms;
--duration-slower: 700ms;
--duration-slowest: 1000ms;
```

### Easing Functions
```css
--ease-linear: linear;
--ease-out: ease-out;
--ease-in-out: ease-in-out;
--ease-custom: cubic-bezier(0.25, 1, 0.5, 1);
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
```

### Transições Padrão
```css
--transition-fast: 200ms ease;
--transition-default: 300ms ease;
--transition-slow: 500ms ease;
--transition-colors: color 300ms ease, background-color 300ms ease;
--transition-transform: transform 500ms cubic-bezier(0.25, 1, 0.5, 1);
--transition-all: all 300ms ease;
```

### Delays
```css
--delay-100: 100ms;
--delay-200: 200ms;
--delay-300: 300ms;
--delay-500: 500ms;
```

## 🎨 Gradientes

### Gradientes do Sistema
```css
--gradient-primary: linear-gradient(135deg, #427CFA 0%, #7AB3E8 50%, #F0F7FF 100%);
--gradient-hero: linear-gradient(180deg, #427CFA 0%, #5B8FE8 50%, #3366CC 100%);
--gradient-overlay: linear-gradient(180deg, rgba(15,23,42,0.4) 0%, rgba(15,23,42,0.8) 100%);
--gradient-card: linear-gradient(180deg, transparent 0%, rgba(15,23,42,0.8) 100%);
```

## 🎛️ Estados Interativos

### Estados de Hover
```css
--hover-primary: #3366CC;
--hover-secondary: rgba(255, 255, 255, 0.1);
--hover-border: #427CFA;
--hover-shadow: 0 8px 32px rgba(66, 124, 250, 0.15);
```

### Estados de Foco
```css
--focus-ring: 0 0 0 3px rgba(66, 124, 250, 0.2);
--focus-border: #427CFA;
```

### Estados de Loading
```css
--loading-bg: rgba(66, 124, 250, 0.1);
--loading-shimmer: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
```

## 📱 Layout e Grid

### Container Sizes
```css
--container-xs: 480px;
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1400px;
--container-max: 1920px;
```

### Grid System
```css
--grid-cols-1: repeat(1, minmax(0, 1fr));
--grid-cols-2: repeat(2, minmax(0, 1fr));
--grid-cols-3: repeat(3, minmax(0, 1fr));
--grid-cols-4: repeat(4, minmax(0, 1fr));
--grid-gap: 1.5rem;
--grid-gap-lg: 2rem;
```

## 🎪 Componentes Específicos

### Accordion Cards (ParaQuemSection)
```css
--card-inactive-flex: 1;
--card-active-flex: 3.5;
--card-mobile-height-active: 400px;
--card-mobile-height-inactive: 100px;
--card-radius: 2.5rem;
--card-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
--card-shadow-active: 0 8px 32px rgba(66, 124, 250, 0.1);
```

### Botões
```css
--button-height: 48px;
--button-padding-x: 24px;
--button-radius: 0.75rem;
--button-font-size: 14px;
--button-font-weight: 500;
--button-transition: all 500ms ease-out;
```

### Headers
```css
--header-height-normal: 80px;
--header-height-scrolled: 60px;
--header-padding-x: 24px;
--header-blur: blur(12px);
```

## 🎨 Padrões de Uso

### Hierarquia Tipográfica
1. **H1 (Hero)**: PP Radio Grotesk, clamp(2.75rem, 5.5vw, 4.5rem), font-weight: 400
2. **H2 (Seções)**: PP Radio Grotesk, clamp(2rem, 4vw, 3rem), font-weight: 400
3. **H3 (Cards)**: PP Radio Grotesk, 1.5-2rem, font-weight: 400
4. **Labels**: DM Sans, 13px, font-weight: 600, uppercase, tracking-wider
5. **Body**: DM Sans, 18px, font-weight: 400, line-height: 1.6

### Espaçamento Vertical
- **Entre seções**: 140px (desktop) / 80px (mobile)
- **Dentro da seção**: 64px entre elementos principais
- **Entre parágrafos**: 24px
- **Entre elementos relacionados**: 16px

### Uso de Cores
- **Primário (#427CFA)**: CTAs principais, links, elementos de destaque
- **Texto escuro (#0F172A)**: Títulos principais, texto de alta hierarquia
- **Texto medium (#64748B)**: Corpo de texto, descrições
- **Fundos**: #F8FAFC para seções alternadas, #FFFFFF para cards

### Animações Recomendadas
- **Entrada de elementos**: fadeIn com translateY(30px), duration: 800ms
- **Hover em cards**: scale(1.02), duration: 300ms
- **Transição de estados**: duration: 700ms, easing: cubic-bezier(0.25,1,0.5,1)
- **Loading states**: shimmer effect com gradiente

### Z-Index Scale
```css
--z-dropdown: 1000;
--z-sticky: 1020;
--z-fixed: 1030;
--z-modal-backdrop: 1040;
--z-modal: 1050;
--z-popover: 1060;
--z-tooltip: 1070;
--z-toast: 1080;
--z-loading: 9999;
```

---

**Observações:**
- O sistema usa uma escala responsiva baseada no viewport para manter proporções em diferentes dispositivos
- As animações seguem princípios de Material Design com easing suave
- O contraste de cores atende aos padrões WCAG 2.1 AA
- Todos os elementos interativos têm estados de foco claramente definidos