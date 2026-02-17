/**
 * 73 Code - Content Data
 * Centraliza todo o conteúdo do site para fácil edição
 * Storytelling: Dor → Frustração com prontos → Descoberta → Transformação
 */

export const siteContent = {
  brand: {
    name: 'Eleva Clínicas',
    tagline: 'Tecnologia personalizada para clínicas de estética e odontologia',
    email: 'contato@73code.com.br',
    url: 'https://73code.com.br',
  },

  nav: {
    links: [
      { label: 'O problema', href: '#problema' },
      { label: 'Como funciona', href: '#abordagem' },
      { label: 'O que entregamos', href: '#entregamos' },
      { label: 'Contato', href: '#contato' },
    ],
    cta: {
      label: 'Agendar conversa',
      href: '#contato',
    },
  },

  hero: {
    headline: 'Sistemas prontos forçam sua clínica a se adaptar.\nNós fazemos o inverso.',
    subtitle: 'Construímos tecnologia personalizada para clínicas de estética e odontologia que já tentaram soluções prontas — e descobriram que não funciona para a realidade delas.',
    cta: {
      label: 'Ver como funciona',
      href: '#abordagem',
    },
    socialProof: {
      count: '15+',
      label: 'clínicas atendidas',
    },
  },

  paraQuem: {
    label: 'Para quem é',
    headline: 'Clínicas que já tentaram sistemas prontos — e não funcionou.',
    description: 'Você contratou um software de gestão. Pagou mensalidade. Treinou a equipe. E mesmo assim, a operação continua travada.',
    cards: [
      {
        icon: 'aesthetic',
        title: 'Clínicas de Estética',
        description: 'Protocolos complexos, sessões encadeadas e controle de materiais que nenhum sistema genérico entende.',
      },
      {
        icon: 'dental',
        title: 'Clínicas Odontológicas',
        description: 'Múltiplos profissionais, salas e horários cruzados. Cada dentista com um jeito de trabalhar.',
      },
      {
        icon: 'growing',
        title: 'Clínicas em crescimento',
        description: 'A operação cresceu, mas o sistema não acompanhou. Você precisa de tecnologia que escala junto.',
      },
    ],
  },

  problema: {
    label: 'Você já passou por isso',
    headline: 'Você contratou um sistema pronto.\nPrometia resolver tudo.',
    cards: [
      {
        icon: 'missing-features',
        title: 'Faltam as funcionalidades que você precisa',
        description: 'Seu fluxo é diferente. O sistema não comporta. Você adapta o processo ao software — nunca ao contrário.',
        stat: { value: 72, suffix: '%', label: 'precisam de features que não existem' },
      },
      {
        icon: 'unused-features',
        title: 'Sobram funcionalidades que você não usa',
        description: 'Tela poluída, processo confuso, equipe perdida. Você paga por 100 funções e usa 12.',
        stat: { value: 88, suffix: '%', label: 'das funções são ignoradas' },
      },
      {
        icon: 'no-changes',
        title: 'Mudanças são impossíveis ou demoram meses',
        description: 'Você abre um ticket. Vira backlog. Ninguém prioriza. Seu problema continua lá.',
        stat: { value: 6, suffix: ' meses', label: 'tempo médio de resposta' },
      },
      {
        icon: 'wasted-money',
        title: 'Você paga todo mês por algo que não resolve',
        description: 'R$ 500, R$ 800, R$ 1.200 por mês. Investimento sem retorno. Dependência sem fim.',
        stat: { value: 67, suffix: '%', label: 'consideram trocar de sistema' },
      },
    ],
  },

  abordagem: {
    label: 'Nosso jeito',
    headline: 'Não vendemos licença.\nConstruímos sua ferramenta.',
    description: 'Estudamos como sua clínica funciona hoje. Identificamos os gargalos reais. E desenvolvemos tecnologia que se encaixa na SUA operação não o contrário. A ferramenta é sua.',
    steps: [
      {
        number: 1,
        title: 'Imersão',
        description: 'Entendemos seu fluxo real. Como a equipe trabalha, onde trava, o que precisa mudar.',
      },
      {
        number: 2,
        title: 'Construção',
        description: 'Desenvolvemos módulos sob medida para sua realidade. Nada genérico, nada que sobre.',
      },
      {
        number: 3,
        title: 'Propriedade',
        description: 'A ferramenta é sua. Você tem o sistema, a liberdade e a autonomia. Sem dependência eterna.',
      },
    ],
  },

  entregamos: {
    label: 'O que construímos',
    headline: 'Módulos que resolvem seus problemas.\nNão os do mercado.',
    tabs: [
      {
        id: 'agenda',
        title: 'Agenda sob medida',
        description: 'Visão por profissional e sala, regras específicas da sua clínica, bloqueios inteligentes e status em tempo real.',
        image: '/assets/screens/screen-agenda.png',
      },
      {
        id: 'prontuario',
        title: 'Prontuário personalizado',
        description: 'Campos, fluxos e histórico adaptados à sua especialidade. Sem poluição visual, sem dados inúteis.',
        image: '/assets/screens/screen-prontuario.png',
      },
      {
        id: 'dashboard',
        title: 'Painel da sua operação',
        description: 'Os indicadores que importam para você. Atendimentos, ocupação, receita — sem planilha, sem relatório genérico.',
        image: '/assets/screens/screen-dashboard.png',
      },
      {
        id: 'fluxo',
        title: 'Fluxo de atendimento',
        description: 'O caminho do paciente do jeito que sua clínica funciona. Linear, visual e claro.',
        image: '/assets/screens/screen-fluxo.png',
      },
      {
        id: 'mobile',
        title: 'Versão mobile',
        description: 'A mesma operação na palma da mão. Funciona na rotina real, não só no escritório.',
        image: '/assets/screens/screen-mobile.png',
      },
    ],
  },

  ctaFinal: {
    headline: 'Sua clínica merece tecnologia feita para ela.',
    description: 'Vamos conversar sobre como construir a ferramenta que sua operação precisa.',
    cta: {
      label: 'Agendar conversa',
      href: '#contato',
    },
  },

  footer: {
    copyright: '© 2025 73 Code. Todos os direitos reservados.',
    links: [
      { label: 'O Problema', href: '#problema' },
      { label: 'Como funciona', href: '#abordagem' },
      { label: 'O que entregamos', href: '#entregamos' },
      { label: 'Contato', href: '#contato' },
    ],
  },

  faq: [
    {
      question: 'Vocês vendem um software pronto?',
      answer: 'Não. Estudamos a operação da sua clínica e construímos tecnologia personalizada para sua realidade. Nada genérico.',
    },
    {
      question: 'Quanto tempo leva para ter o sistema funcionando?',
      answer: 'Depende da complexidade. Começamos com o que é mais crítico e entregamos de forma incremental — você já usa enquanto evoluímos.',
    },
    {
      question: 'Funciona para clínicas pequenas?',
      answer: 'Sim. Construímos módulos que crescem junto com sua clínica. Você começa pelo que precisa e expande conforme a operação evoluir.',
    },
    {
      question: 'A ferramenta é minha ou pago licença?',
      answer: 'A ferramenta é sua. Construímos para você, não alugamos um produto genérico. Sem dependência eterna.',
    },
    {
      question: 'Preciso trocar meu sistema atual de uma vez só?',
      answer: 'Não. O processo é gradual. Começamos pelos módulos mais críticos e expandimos sem interromper a operação.',
    },
  ],
} as const;

export type SiteContent = typeof siteContent;
