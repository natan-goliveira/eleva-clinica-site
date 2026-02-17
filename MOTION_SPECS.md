# Especificações Técnicas - Motion Design

## 📋 Referências Rápidas

### Cores Hexadecimais Exatas
```
Azul Principal: #427CFA
Azul Hover: #3366CC  
Azul Accent: #4169E1
Texto Escuro: #0F172A
Fundo Cinza: #F8FAFC
Texto Médio: #64748B
Borda: #E2E8F0
```

### Medidas em Pixels (1440px base)
```
Seção Header: 80px altura (60px quando scrolled)
Cards Border Radius: 40px
Botão Height: 48px
Container Max Width: 1400px
Grid Gap: 24px
Section Padding Y: 140px (desktop) / 80px (mobile)
```

## 🎬 Storyboard das Animações Principais

### 1. Hero Section - Sequência de Entrada
```
Timeline Total: 2.2s

Frame 0-300ms:
- Background: opacity 0→1 (300ms)
- Gradient overlay fade in

Frame 300-500ms: 
- Logo: translateY(20px) + opacity 0→1 (200ms)

Frame 500-800ms:
- Título: translateY(30px) + opacity 0→1 (300ms)
- Font: PP Radio Grotesk, 72px, weight 400

Frame 700-1000ms:
- Subtítulo: translateY(30px) + opacity 0→1 (300ms) 
- Font: DM Sans, 18px, weight 400

Frame 900-1200ms:
- CTA Button: translateY(30px) + opacity 0→1 + bounce (300ms)
- Bounce: scale 1→1.05→1 (100ms)

Frame 1100-1800ms:
- Mockup: translateY(50px) + opacity 0→1 (700ms)
- Parallax effect: translateY continues at 0.3x scroll speed
```

### 2. Accordion Cards - Interação
```
Estado Inicial (Desktop):
- Card 1: flex-basis 25% (ativo)
- Cards 2-4: flex-basis 25% cada
- Todas com opacity 1

Hover Trigger:
- Duração: 700ms
- Easing: cubic-bezier(0.25, 1, 0.5, 1)

Frame 0-200ms:
- Card target: flex-basis 25%→58.33%
- Cards adjacentes: flex-basis 25%→13.89%

Frame 200-500ms:
- Background overlay: opacity 0.6→0.8
- Imagem: scale 1.25→1.05 (zoom out effect)

Frame 300-700ms:
- Conteúdo: maxHeight 0→200px
- Texto: opacity 0→1 (delay 100ms)
- Categoria tag: slideDown + fadeIn

Mobile Behavior:
- Height: 100px→400px (mesma duração)
- Stack vertical, sem flex changes
```

### 3. Header Scroll - Transformação
```
Trigger: window.scrollY > 50px
Duração: 500ms
Easing: ease-in-out

Mudanças Simultâneas:
- Height: 80px→60px
- Background: transparent→rgba(66,124,250,0.95)  
- Backdrop-filter: blur(0px)→blur(12px)
- Box-shadow: none→0 4px 24px rgba(66,124,250,0.2)
- Logo scale: 1→0.85
```

## 🔍 Micro-interações Detalhadas

### Botão CTA - Estados
```css
/* Estado Normal */
background: #0E172A
transform: scale(1)
box-shadow: 0 4px 24px rgba(15,23,42,0.12)

/* Hover (300ms) */
background: #FFFFFF  
color: #0E172A
transform: scale(1.02)
box-shadow: 0 8px 32px rgba(66,124,250,0.15)

/* Active (150ms) */
transform: scale(0.98)

/* Icon Animation */
Arrow inside: rotate 0deg→45deg (500ms ease-out)
Background circle: white→#0E172A
```

### Input Fields - Focus States
```css
/* Normal */
border: 2px solid transparent
transform: scale(1)

/* Focus */
border: 2px solid #427CFA
box-shadow: 0 0 0 3px rgba(66,124,250,0.1)
transform: scale(1.01)
transition: all 200ms ease-out
```

## 📊 Timing Reference Chart

| Interação | Duração | Easing | Uso |
|-----------|---------|--------|-----|
| Hover Button | 200ms | ease-out | Feedback imediato |
| Card Expand | 700ms | cubic-bezier(0.25,1,0.5,1) | Expansão suave |
| Scroll Header | 500ms | ease-in-out | Transição natural |
| Page Enter | 800ms | power3.out | Entrada elegante |
| Icon Rotate | 500ms | ease-out | Micro-interação |
| Image Scale | 1000ms | ease-out | Parallax suave |
| Stagger Items | +100ms | - | Ritmo visual |

## 🎨 Gradientes e Overlays

### Gradientes Definidos
```css
/* Hero Background */
background: linear-gradient(180deg, #427CFA 0%, #5B8FE8 50%, #3366CC 100%)

/* Card Overlays Inativos */
background: rgba(15, 23, 42, 0.6)
hover: rgba(15, 23, 42, 0.5)

/* Card Overlays Ativos */  
background: linear-gradient(180deg, 
  rgba(15, 23, 42, 0) 0%,
  rgba(15, 23, 42, 0.8) 60%,  
  rgba(15, 23, 42, 0.9) 100%
)

/* Section Separators */
background: linear-gradient(135deg, 
  #427CFA 0%, 
  #7AB3E8 50%, 
  #F0F7FF 100%
)
```

## 🎯 Responsive Breakout

### Animations Scaling
```css
/* Desktop (1440px+) */
translateY: 30px
stagger: 100ms
duration: 800ms

/* Tablet (768-1439px) */  
translateY: 25px
stagger: 80ms
duration: 600ms

/* Mobile (320-767px) */
translateY: 20px  
stagger: 50ms
duration: 400ms
```

### Touch Adaptations
```css
/* Hover states become :active on touch */
@media (hover: none) {
  .hover-effect:hover {
    /* Remove hover styles */
  }
  
  .hover-effect:active {
    /* Apply hover styles here */
    transition-duration: 150ms; /* Faster for touch */
  }
}
```

## ⚠️ Considerations & Best Practices

### Performance Notes
- Cards com imagens: usar `will-change: transform` during animation
- Evitar `blur()` em elementos que animam frequentemente  
- GSAP ScrollTrigger: usar `once: true` para animações de entrada
- Mobile: reduzir `transform` distances em 33%

### Accessibility
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Browser Compat
- `backdrop-filter`: Prefixar com `-webkit-`
- `cubic-bezier`: Suportado por todos os browsers modernos
- GSAP: Funciona IE9+, mas usar modern builds para melhor performance

---

**Assets necessários para motion designer:**
- Logo SVG (modo claro/escuro)  
- Ícones: Plus, Arrow Right, Chevron Down
- Mockup PNG da interface (alta resolução)
- Fonte PP Radio Grotesk (ttf/otf files)
- Imagens das seções (Unsplash URLs fornecidas no código)