'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Locale = 'pt' | 'en';

interface Translations {
  nav: {
    about: string;
    solutions: string;
    contact: string;
    cta: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  paraQuem: {
    label: string;
    headline: string;
    description: string;
    cards: {
      aesthetic: { category: string; title: string; description: string; cta: string };
      dental: { category: string; title: string; description: string; cta: string };
      growing: { category: string; title: string; description: string; cta: string };
    };
  };
  problema: {
    label: string;
    headline: string;
    cards: {
      missingFeatures: { title: string; description: string; statLabel: string };
      unusedFeatures: { title: string; description: string; statLabel: string };
      noChanges: { title: string; description: string; statLabel: string };
      wastedMoney: { title: string; description: string; statLabel: string };
    };
  };
  abordagem: {
    label: string;
    headline: string;
    description: string;
    steps: {
      step1: { title: string; description: string };
      step2: { title: string; description: string };
      step3: { title: string; description: string };
    };
  };
  entregamos: {
    label: string;
    headline: string;
    tabs: {
      agenda: { title: string; description: string };
      prontuario: { title: string; description: string };
      dashboard: { title: string; description: string };
      fluxo: { title: string; description: string };
      mobile: { title: string; description: string };
    };
  };
  cta: {
    headline: string;
    subtitle: string;
    button: string;
  };
  footer: {
    rights: string;
    links: {
      problem: string;
      howItWorks: string;
      whatWeDeliver: string;
      contact: string;
    };
  };
}

const translations: Record<Locale, Translations> = {
  pt: {
    nav: {
      about: 'O PROBLEMA',
      solutions: 'SOLUÇÕES',
      contact: 'CONTATO',
      cta: 'Agendar conversa',
    },
    hero: {
      title: 'Sistemas prontos forçam sua clínica a se adaptar.\nNós fazemos o inverso.',
      subtitle: 'Construímos tecnologia personalizada para clínicas de estética e odontologia que já tentaram soluções prontas e descobriram que não funciona para a realidade delas.',
      cta: 'Ver como funciona',
    },
    paraQuem: {
      label: 'Para quem é',
      headline: 'Clínicas que já tentaram sistemas prontos e não funcionou.',
      description: 'Você contratou um software de gestão. Pagou mensalidade. Treinou a equipe. E mesmo assim, a operação continua travada.',
      cards: {
        aesthetic: { 
          category: 'Estética', 
          title: 'Clínicas de Estética', 
          description: 'Protocolos complexos, sessões encadeadas e controle de materiais que nenhum sistema genérico entende.',
          cta: 'Saiba mais' 
        },
        dental: { 
          category: 'Odontologia', 
          title: 'Clínicas Odontológicas', 
          description: 'Múltiplos profissionais, salas e horários cruzados. Cada dentista com um jeito de trabalhar.',
          cta: 'Saiba mais' 
        },
        growing: { 
          category: 'Em crescimento', 
          title: 'Clínicas em crescimento', 
          description: 'A operação cresceu, mas o sistema não acompanhou. Você precisa de tecnologia que escala junto.',
          cta: 'Saiba mais' 
        },
      },
    },
    problema: {
      label: 'Você já passou por isso',
      headline: 'Você contratou um sistema pronto.\nPrometia resolver tudo.',
      cards: {
        missingFeatures: { title: 'Faltam as funcionalidades que você precisa', description: 'Seu fluxo é diferente. O sistema não comporta. Você adapta o processo ao software — nunca ao contrário.', statLabel: 'precisam de features inexistentes' },
        unusedFeatures: { title: 'Sobram funcionalidades que você não usa', description: 'Tela poluída, processo confuso, equipe perdida. Você paga por 100 funções e usa 12.', statLabel: 'das funções são ignoradas' },
        noChanges: { title: 'Mudanças impossíveis ou demoram meses', description: 'Você abre um ticket. Vira backlog. Ninguém prioriza. Seu problema continua lá.', statLabel: 'tempo médio de resposta' },
        wastedMoney: { title: 'Você paga todo mês sem retorno', description: 'R$ 500, R$ 800, R$ 1.200 por mês. Investimento sem retorno. Dependência sem fim.', statLabel: 'consideram trocar de sistema' },
      },
    },
    abordagem: {
      label: 'Nosso jeito',
      headline: 'Não vendemos licença.\nConstruímos sua ferramenta.',
      description: 'Estudamos como sua clínica funciona hoje. Identificamos os gargalos reais. E desenvolvemos tecnologia que se encaixa na SUA operação — não o contrário. A ferramenta é sua.',
      steps: {
        step1: { title: 'Imersão', description: 'Entendemos seu fluxo real. Como a equipe trabalha, onde trava, o que precisa mudar.' },
        step2: { title: 'Construção', description: 'Desenvolvemos módulos sob medida para sua realidade. Nada genérico, nada que sobre.' },
        step3: { title: 'Propriedade', description: 'A ferramenta é sua. Você tem o sistema, a liberdade e a autonomia. Sem dependência eterna.' },
      },
    },
    entregamos: {
      label: 'O que construímos',
      headline: 'Módulos que resolvem seus problemas.\nNão os do mercado.',
      tabs: {
        agenda: { title: 'Agenda sob medida', description: 'Visão por profissional e sala, regras específicas da sua clínica, bloqueios inteligentes e status em tempo real.' },
        prontuario: { title: 'Prontuário personalizado', description: 'Campos, fluxos e histórico adaptados à sua especialidade. Sem poluição visual, sem dados inúteis.' },
        dashboard: { title: 'Painel da sua operação', description: 'Os indicadores que importam para você. Atendimentos, ocupação, receita — sem planilha, sem relatório genérico.' },
        fluxo: { title: 'Fluxo de atendimento', description: 'O caminho do paciente do jeito que sua clínica funciona. Linear, visual e claro.' },
        mobile: { title: 'Versão mobile', description: 'A mesma operação na palma da mão. Funciona na rotina real, não só no escritório.' },
      },
    },
    cta: {
      headline: 'Sua clínica merece tecnologia feita para ela.',
      subtitle: 'Vamos conversar sobre como construir a ferramenta que sua operação precisa.',
      button: 'Agendar conversa',
    },
    footer: {
      rights: '© 2025 73 Code. Todos os direitos reservados.',
      links: {
        problem: 'O Problema',
        howItWorks: 'Como funciona',
        whatWeDeliver: 'O que entregamos',
        contact: 'Contato',
      },
    },
  },
  en: {
    nav: {
      about: 'THE PROBLEM',
      solutions: 'SOLUTIONS',
      contact: 'CONTACT',
      cta: 'Schedule a call',
    },
    hero: {
      title: 'Ready-made systems force your clinic to adapt.\nWe do the opposite.',
      subtitle: 'We build custom technology for aesthetic and dental clinics that have already tried off-the-shelf solutions — and found they don\'t work for their reality.',
      cta: 'See how it works',
    },
    paraQuem: {
      label: "Who it's for",
      headline: "Clinics that have tried ready-made systems — and it didn't work.",
      description: 'You hired a management software. Paid the monthly fee. Trained the team. And still, the operation remains stuck.',
      cards: {
        aesthetic: { 
          category: 'Aesthetics', 
          title: 'Aesthetic Clinics', 
          description: 'Complex protocols, chained sessions, and material control that no generic system understands.',
          cta: 'Learn more' 
        },
        dental: { 
          category: 'Dentistry', 
          title: 'Dental Clinics', 
          description: 'Multiple professionals, rooms, and overlapping schedules. Each dentist works differently.',
          cta: 'Learn more' 
        },
        growing: { 
          category: 'Growing', 
          title: 'Growing Clinics', 
          description: 'The operation grew, but the system didn\'t keep up. You need technology that scales with you.',
          cta: 'Learn more' 
        },
      },
    },
    problema: {
      label: "You've been through this",
      headline: "You hired a ready-made system.\nIt promised to solve everything.",
      cards: {
        missingFeatures: { title: "Missing the features you need", description: 'Your workflow is different. The system can\'t handle it. You adapt to the software — never the other way around.', statLabel: 'need features that don\'t exist' },
        unusedFeatures: { title: "Features you never use", description: 'Cluttered screens, confusing processes, lost team. You pay for 100 functions and use 12.', statLabel: 'of functions are ignored' },
        noChanges: { title: "Changes take months or never happen", description: 'You open a ticket. It becomes backlog. Nobody prioritizes it. Your problem stays.', statLabel: 'average response time' },
        wastedMoney: { title: "Paying monthly with no return", description: '$500, $800, $1,200 per month. Investment without return. Endless dependency.', statLabel: 'consider switching systems' },
      },
    },
    abordagem: {
      label: 'Our approach',
      headline: "We don't sell licenses.\nWe build your tool.",
      description: 'We study how your clinic works today. Identify real bottlenecks. And develop technology that fits YOUR operation — not the other way around. The tool is yours.',
      steps: {
        step1: { title: 'Immersion', description: 'We understand your real workflow. How the team works, where it gets stuck, what needs to change.' },
        step2: { title: 'Building', description: 'We develop custom modules for your reality. Nothing generic, nothing unnecessary.' },
        step3: { title: 'Ownership', description: 'The tool is yours. You have the system, the freedom, and the autonomy. No eternal dependency.' },
      },
    },
    entregamos: {
      label: 'What we build',
      headline: "Modules that solve your problems.\nNot the market's.",
      tabs: {
        agenda: { title: 'Custom scheduling', description: 'View by professional and room, rules specific to your clinic, smart blocks, and real-time status.' },
        prontuario: { title: 'Custom records', description: 'Fields, workflows, and history adapted to your specialty. No visual clutter, no useless data.' },
        dashboard: { title: 'Your operations panel', description: 'The metrics that matter to you. Appointments, occupancy, revenue — no spreadsheets, no generic reports.' },
        fluxo: { title: 'Care flow', description: 'The patient journey the way your clinic works. Linear, visual, and clear.' },
        mobile: { title: 'Mobile version', description: 'The same operation in the palm of your hand. Works in real routine, not just in the office.' },
      },
    },
    cta: {
      headline: 'Your clinic deserves technology built for it.',
      subtitle: "Let's talk about building the tool your operation needs.",
      button: 'Schedule a call',
    },
    footer: {
      rights: '© 2025 73 Code. All rights reserved.',
      links: {
        problem: 'The Problem',
        howItWorks: 'How it works',
        whatWeDeliver: 'What we deliver',
        contact: 'Contact',
      },
    },
  },
};

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('pt');

  // Persistir preferência no localStorage
  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale;
    if (saved && (saved === 'pt' || saved === 'en')) {
      setLocale(saved);
    }
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  return (
    <LanguageContext.Provider value={{ 
      locale, 
      setLocale: handleSetLocale, 
      t: translations[locale] 
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Hook para usar traduções diretamente
export function useTranslations() {
  const { t } = useLanguage();
  return t;
}
