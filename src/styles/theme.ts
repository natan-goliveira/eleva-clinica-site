/**
 * 73 Code - Design System Theme
 * Centraliza todas as variáveis de design do projeto
 */

export const theme = {
  colors: {
    // Primários
    primary: {
      DEFAULT: '#427CFA',
      light: '#7AB3E8',
      dark: '#3578C4',
    },
    
    // Gradientes
    gradient: {
      start: '#5B95DB',
      mid: '#8BB8E8',
      end: '#FFFFFF',
    },
    
    // Texto
    text: {
      dark: '#1A1A2E',
      body: '#374151',
      muted: '#6B7280',
      light: '#FFFFFF',
    },
    
    // Superfícies
    surface: {
      DEFAULT: '#F8FAFC',
      alt: '#F0F7FF',
    },
    
    // Bordas
    border: '#E2E8F0',
    
    // CTA / Botões
    cta: {
      bg: '#111111',
      hover: '#000000',
      text: '#FFFFFF',
    },
    
    // Footer
    footer: {
      bg: '#0F172A',
    },
  },
  
  fonts: {
    heading: 'var(--font-radio-grotesk), system-ui, sans-serif',
    body: 'var(--font-dm-sans), system-ui, sans-serif',
  },
  
  fontSizes: {
    h1: 'clamp(2.75rem, 5.5vw, 4.5rem)',
    h2: 'clamp(2rem, 3.5vw, 2.75rem)',
    h3: '1.25rem',
    h4: '1.1rem',
    body: '1rem',
    label: '0.8125rem',
  },
  
  spacing: {
    section: {
      sm: '80px',
      md: '120px',
      lg: '140px',
    },
  },
  
  borderRadius: {
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    full: '50px',
  },
  
  shadows: {
    card: '0 4px 24px rgba(0,0,0,0.04)',
    cardHover: '0 8px 32px rgba(0,0,0,0.08)',
    header: '0 2px 24px rgba(0,0,0,0.08)',
    mockup: '0 20px 60px rgba(0,0,0,0.12)',
  },
  
  transitions: {
    fast: '0.2s ease',
    default: '0.3s ease',
    slow: '0.5s ease',
  },
} as const;

export type Theme = typeof theme;
