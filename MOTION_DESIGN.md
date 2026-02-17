# Motion Design Guidelines - Eleva Clínicas

## 🎬 Princípios de Animação

### Personalidade da Marca
- **Elegante**: Movimentos suaves e sofisticados
- **Confiável**: Transições previsíveis e consistentes  
- **Profissional**: Animações sutis que não distraem
- **Moderno**: Uso de easing avançado e micro-interações

## ⏱️ Sistema de Timing

### Durações Base
```css
/* Micro-interações */
--motion-instant: 150ms;       /* Feedback imediato */
--motion-quick: 200ms;         /* Hover states */
--motion-fast: 300ms;          /* Transições simples */
--motion-medium: 500ms;        /* Transições complexas */
--motion-slow: 700ms;          /* Accordion, revelar conteúdo */
--motion-slower: 1000ms;       /* Transformações de imagem */

/* Animações especiais */
--motion-stagger-delay: 100ms; /* Entre elementos em sequência */
--motion-enter-delay: 200ms;   /* Delay de entrada após trigger */
```

### Curvas de Easing

#### Para Entrada de Elementos
```css
--ease-enter: cubic-bezier(0.25, 1, 0.5, 1);
/* Sentimento: Confiante, suave chegada */
```

#### Para Saída de Elementos 
```css
--ease-exit: cubic-bezier(0.4, 0, 0.2, 1);
/* Sentimento: Rápido mas controlado */
```

#### Para Transforms (Scale, Rotate)
```css
--ease-transform: cubic-bezier(0.34, 1.56, 0.64, 1);
/* Sentimento: Elástico sutil, profissional */
```

#### Para Cores e Opacidade
```css
--ease-fade: ease-out;
/* Sentimento: Natural, orgânico */
```

## 🎯 Padrões de Movimento

### 1. Entrada de Seções (Scroll Trigger)
```javascript
// Configuração GSAP identificada no código
gsap.fromTo(elementos, 
  { 
    opacity: 0, 
    y: 30 
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: secao,
      start: "top 80%",
      once: true
    }
  }
);
```

**Características:**
- Movimento vertical sutil (30px)
- Stagger de 100ms entre elementos
- Trigger em 80% da viewport
- Executa apenas uma vez (once: true)

### 2. Cards Interativos (Accordion)
```css
/* Estado Inativo → Ativo */
.card {
  flex: 1;
  transition: all 700ms cubic-bezier(0.25, 1, 0.5, 1);
}

.card.active {
  flex: 3.5;
  box-shadow: 0 8px 32px rgba(66, 124, 250, 0.1);
}

/* Imagem de fundo */
.card img {
  transform: scale(1.25);
  transition: transform 1000ms ease-out;
}

.card.active img {
  transform: scale(1.05);
}
```

**Características:**
- Expansão com easing customizado
- Imagem reduz escala quando ativo (efeito parallax reverso)
- Duração diferente para container vs imagem
- Sombra aparece suavemente

### 3. Hover States
```css
/* Micro-interações em botões */
.button {
  transform: scale(1);
  transition: all 300ms ease-out;
}

.button:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 32px rgba(66, 124, 250, 0.15);
}

/* Rotação de ícones */
.icon {
  transform: rotate(0deg);
  transition: all 500ms ease-out;
}

.icon:hover {
  transform: rotate(45deg);
}
```

### 4. Header Scroll Behavior
```css
.header {
  transform: translateY(0);
  backdrop-filter: blur(0px);
  transition: all 500ms ease-in-out;
}

.header.scrolled {
  backdrop-filter: blur(12px);
  background: rgba(66, 124, 250, 0.95);
  box-shadow: 0 4px 24px rgba(66, 124, 250, 0.2);
}
```

## 🎨 Animações por Componente

### Hero Section
```javascript
// Sequência de entrada
Timeline:
1. Background fade in (0ms)
2. Logo fade in (300ms)  
3. Título principal (500ms) - slideUp + fadeIn
4. Subtítulo (700ms) - slideUp + fadeIn
5. CTA button (900ms) - slideUp + fadeIn + bounce
6. Mockup (1100ms) - slideUp + fadeIn + parallax
```

### Cards de Navegação
```css
/* Transição de destaque */
.nav-card:hover {
  background: linear-gradient(135deg, rgba(66, 124, 250, 0.1) 0%, transparent 100%);
  transform: translateY(-2px);
  transition: all 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### Loading States
```css
/* Shimmer effect para carregamento */
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.loading-shimmer {
  animation: shimmer 1.5s infinite ease-in-out;
  background: linear-gradient(
    90deg, 
    transparent, 
    rgba(255, 255, 255, 0.4), 
    transparent
  );
}
```

### Formulários
```css
/* Estados de input */
.input {
  border: 2px solid transparent;
  transition: all 200ms ease-out;
}

.input:focus {
  border-color: #427CFA;
  box-shadow: 0 0 0 3px rgba(66, 124, 250, 0.1);
  transform: scale(1.01);
}
```

## 🎪 Animações Específicas Identificadas

### 1. Accordion Animation (ParaQuemSection)
```javascript
// Estados dos cards
Inactive: {
  flex: 1,
  opacity: 0.8,
  content: {
    maxHeight: 0,
    opacity: 0
  }
}

Active: {
  flex: 3.5,
  opacity: 1,
  content: {
    maxHeight: 200px,
    opacity: 1,
    delay: 100ms
  }
}

// Mobile behavior
Mobile: {
  height: isActive ? '400px' : '100px',
  transition: 'all 700ms cubic-bezier(0.25, 1, 0.5, 1)'
}
```

### 2. Icon Animations
```css
/* Plus → Arrow rotation */
.icon-container {
  transform: rotate(0deg);
  transition: all 500ms ease-out;
}

.icon-container.active {
  transform: rotate(45deg);
  background: #427CFA;
}

/* Arrow translate effect */
.arrow {
  transform: translateX(0);
  opacity: 1;
  transition: all 500ms ease-out;
}

.arrow.exit {
  transform: translateX(32px);
  opacity: 0;
}

.arrow.enter {
  transform: translateX(-32px);
  opacity: 0;
}
```

## 🔧 Configurações GSAP Específicas

### ScrollTrigger Padrão
```javascript
ScrollTrigger.defaults({
  start: "top 80%",
  end: "bottom 20%",
  toggleActions: "play none none reverse",
  markers: false
});
```

### Timeline Base para Seções
```javascript
const sectionTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: section,
    start: "top 85%",
    once: true
  }
});

sectionTimeline
  .fromTo('.section-label', 
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6 }
  )
  .fromTo('.section-title',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8 },
    "-=0.3"
  )
  .fromTo('.section-content',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
    "-=0.4"
  );
```

## 📱 Responsividade das Animações

### Mobile Adaptations
```css
/* Reduzir movimento em mobile */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Ajustes para telas menores */
@media (max-width: 768px) {
  .animation-translate-y {
    --translate-distance: 20px; /* Reduzido de 30px */
  }
  
  .animation-stagger {
    --stagger-delay: 50ms; /* Reduzido de 100ms */
  }
}
```

## 🎯 Performance Guidelines

### Otimização
1. **Use transform e opacity** para animações suaves
2. **Evite animar layout properties** (width, height, padding)
3. **Prefira will-change** para elementos que vão animar
4. **Use transform3d(0,0,0)** para forçar aceleração GPU

### CSS Transform Priorities
```css
/* Melhor performance */
transform: translate3d(x, y, 0) scale(x) rotate(deg);
opacity: x;

/* Evitar quando possível */
width, height, padding, margin, top, left
```

---

Este guia fornece toda a base necessária para recriar as animações do sistema com consistência e fidelidade ao design original.