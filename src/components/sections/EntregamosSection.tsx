'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  CalendarDays,
  FileText,
  LayoutDashboard,
  Workflow,
  Smartphone,
  CheckCircle2,
  AlertCircle,
  Clock,
  TrendingUp,
  Users,
  DollarSign,
  ArrowUpRight,
  Star,
  Activity,
  Bell,
  MessageSquare,
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const tabIcons = [CalendarDays, FileText, LayoutDashboard, Workflow, Smartphone];

export function EntregamosSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { id: 'agenda', title: t.entregamos.tabs.agenda.title, description: t.entregamos.tabs.agenda.description, image: '/assets/screens/screen-agenda.png' },
    { id: 'prontuario', title: t.entregamos.tabs.prontuario.title, description: t.entregamos.tabs.prontuario.description, image: '/assets/screens/screen-prontuario.png' },
    { id: 'dashboard', title: t.entregamos.tabs.dashboard.title, description: t.entregamos.tabs.dashboard.description, image: '/assets/screens/screen-dashboard.png' },
    { id: 'fluxo', title: t.entregamos.tabs.fluxo.title, description: t.entregamos.tabs.fluxo.description, image: '/assets/screens/screen-fluxo.png' },
    { id: 'mobile', title: t.entregamos.tabs.mobile.title, description: t.entregamos.tabs.mobile.description, image: '/assets/screens/screen-mobile.png' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.entregamos-label, .entregamos-headline',
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.65, 
          stagger: 0.14, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.entregamos-headline',
            start: 'top 85%',
            once: true,
          }
        }
      );

      gsap.fromTo('.entregamos-tab-item',
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.5, 
          stagger: 0.1, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.entregamos-sidebar',
            start: 'top 80%',
            once: true,
          }
        }
      );

      gsap.fromTo('.entregamos-content',
        { x: 40, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.entregamos-content',
            start: 'top 80%',
            once: true,
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const switchTab = (newIndex: number) => {
    if (newIndex === activeTab) return;

    const content = contentRef.current;
    if (!content) {
      setActiveTab(newIndex);
      return;
    }

    gsap.to(content, {
      opacity: 0,
      y: 16,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        setActiveTab(newIndex);
        gsap.fromTo(content,
          { opacity: 0, y: -16 },
          { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
        );
      }
    });
  };

  const currentTab = tabs[activeTab];

  return (
    <section 
      ref={sectionRef}
      id="entregamos" 
      aria-label="O que entregamos"
      className="py-[140px] bg-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="entregamos-label inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#427CFA] mb-5 font-dm">
            <span className="w-8 h-[1px] bg-[#427CFA]" />
            {t.entregamos.label}
          </span>
          <h2 
            className="entregamos-headline text-[clamp(2rem,4vw,3rem)] font-normal text-[#0F172A] leading-[1.1] whitespace-pre-line"
            style={{ fontFamily: 'var(--font-radio-grotesk)' }}
          >
            {t.entregamos.headline}
          </h2>
        </div>

        {/* Layout: sidebar tabs + content */}
        <div className="grid lg:grid-cols-[300px_1fr] gap-8 items-start">
          
          {/* Sidebar Tabs */}
          <div className="entregamos-sidebar flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
            {tabs.map((tab, index) => {
              const TabIcon = tabIcons[index];
              return (
                <button
                  key={tab.id}
                  onClick={() => switchTab(index)}
                  className={`entregamos-tab-item flex items-center gap-3 px-5 py-4 rounded-xl text-left transition-all duration-300 whitespace-nowrap lg:whitespace-normal min-w-fit lg:min-w-0 w-full
                    ${activeTab === index 
                      ? 'bg-[#427CFA] text-white shadow-lg shadow-[#427CFA]/20' 
                      : 'bg-white text-[#64748B] hover:bg-white hover:text-[#0F172A] border border-[#E2E8F0] hover:border-[#427CFA]/30'
                    }`}
                >
                  <TabIcon className={`w-5 h-5 flex-shrink-0 ${activeTab === index ? 'text-white' : 'text-[#427CFA]'}`} strokeWidth={1.5} />
                  <span 
                    className="text-sm font-medium font-dm"
                  >
                    {tab.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div
            ref={contentRef}
            className="entregamos-content"
          >
            {/* Dynamic panel per tab */}
            <div className="relative rounded-[1.5rem] overflow-hidden shadow-xl bg-white border border-[#E2E8F0]">
              <div className="p-5">
                {/* Tab header inside panel */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#427CFA]/10 flex items-center justify-center">
                      {React.createElement(tabIcons[activeTab], { className: 'w-4 h-4 text-[#427CFA]', strokeWidth: 1.5 })}
                    </div>
                    <h4 className="text-sm font-semibold text-[#0F172A] font-dm">{currentTab.title}</h4>
                  </div>
                  <Badge variant="outline" className="text-[10px] h-5 text-[#6B7280]">
                    Sob medida
                  </Badge>
                </div>

                {/* Content per tab */}
                {activeTab === 0 && <AgendaPanel />}
                {activeTab === 1 && <ProntuarioPanel />}
                {activeTab === 2 && <DashboardPanel />}
                {activeTab === 3 && <FluxoPanel />}
                {activeTab === 4 && <MobilePanel />}
              </div>
            </div>

            {/* Description below */}
            <div className="mt-5 pl-1">
              <p className="text-sm text-[#64748B] leading-relaxed font-dm max-w-xl">
                {currentTab.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Tab Panels ─────────────────────────────────────────────────────────────

function AgendaPanel() {
  const appointments = [
    { time: '08:00', patient: 'João Santos', type: 'Consulta', status: 'done' },
    { time: '08:30', patient: 'Ana Oliveira', type: 'Retorno', status: 'done' },
    { time: '09:00', patient: 'Carlos Lima', type: 'Avaliação', status: 'now' },
    { time: '09:30', patient: 'Maria Costa', type: 'Estético', status: 'next' },
    { time: '10:00', patient: 'Pedro Souza', type: 'Consulta', status: 'pending' },
    { time: '10:30', patient: 'Lucia Ferreira', type: 'Retorno', status: 'pending' },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-xs text-[#6B7280] font-dm">Terça, 10 de Junho</p>
        <div className="flex items-center gap-3 text-[10px] text-[#9CA3AF] font-dm">
          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Concluído</span>
          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#427CFA]" /> Agora</span>
          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0]" /> Pendente</span>
        </div>
      </div>
      <div className="space-y-1">
        {appointments.map((a) => (
          <div
            key={a.time}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
              a.status === 'now' ? 'bg-[#427CFA]/8 border border-[#427CFA]/20' :
              a.status === 'done' ? 'bg-[#F8FAFC]' : 'bg-white'
            }`}
          >
            <span className="font-mono text-[11px] text-[#9CA3AF] w-10">{a.time}</span>
            <span className={`h-2 w-2 rounded-full flex-shrink-0 ${
              a.status === 'done' ? 'bg-emerald-400' :
              a.status === 'now' ? 'bg-[#427CFA]' : 'bg-[#E2E8F0]'
            }`} />
            <span className={`flex-1 text-[13px] font-medium ${a.status === 'done' ? 'text-[#9CA3AF]' : 'text-[#0F172A]'}`}>{a.patient}</span>
            <span className="text-[11px] text-[#9CA3AF]">{a.type}</span>
            {a.status === 'done' && <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />}
            {a.status === 'now' && <Activity className="h-3.5 w-3.5 text-[#427CFA]" />}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-2 border-t border-[#F1F5F9]">
        <span className="text-[11px] text-[#9CA3AF] font-dm">6 agendamentos hoje</span>
        <Badge className="text-[10px] h-5 bg-[#427CFA]/10 text-[#427CFA] border-0 hover:bg-[#427CFA]/15">87% ocupação</Badge>
      </div>
    </div>
  );
}

function ProntuarioPanel() {
  const fields = [
    { label: 'Queixa principal', value: 'Dor na região cervical há 3 dias' },
    { label: 'Histórico', value: 'Paciente com histórico de cervicalgia recorrente. Última consulta em 15/05.' },
    { label: 'Exame físico', value: 'Tensão muscular em trapézio bilateral. Amplitude reduzida em rotação.' },
    { label: 'Conduta', value: 'Prescrição de anti-inflamatório + fisioterapia 2x/semana' },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 pb-3 border-b border-[#F1F5F9]">
        <div className="w-8 h-8 rounded-full bg-[#427CFA]/10 flex items-center justify-center text-xs font-semibold text-[#427CFA]">CL</div>
        <div>
          <p className="text-[13px] font-medium text-[#0F172A]">Carlos Lima</p>
          <p className="text-[11px] text-[#9CA3AF]">34 anos · Consulta #12 · 10/06/2025</p>
        </div>
        <Badge variant="outline" className="ml-auto text-[10px] h-5 text-emerald-600 border-emerald-200">Em preenchimento</Badge>
      </div>
      <div className="space-y-2.5">
        {fields.map((f) => (
          <div key={f.label}>
            <p className="text-[11px] font-semibold text-[#427CFA] uppercase tracking-wider mb-0.5">{f.label}</p>
            <p className="text-[12px] text-[#374151] leading-relaxed font-dm">{f.value}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 pt-2 border-t border-[#F1F5F9]">
        <Badge className="text-[10px] h-5 bg-[#F1F5F9] text-[#6B7280] border-0">CID: M54.2</Badge>
        <Badge className="text-[10px] h-5 bg-[#F1F5F9] text-[#6B7280] border-0">Cervicalgia</Badge>
        <span className="text-[10px] text-[#9CA3AF] ml-auto font-dm">Campos personalizáveis</span>
      </div>
    </div>
  );
}

function DashboardPanel() {
  const stats = [
    { label: 'Pacientes hoje', value: '24', change: '+12%', icon: Users },
    { label: 'Receita do dia', value: 'R$ 4.850', change: '+8%', icon: DollarSign },
    { label: 'Ocupação', value: '87%', change: '+5%', icon: CalendarDays },
    { label: 'Tempo médio', value: '28min', change: '-3min', icon: Clock },
  ];

  const rooms = [
    { name: 'Sala 1', pct: 92 },
    { name: 'Sala 2', pct: 78 },
    { name: 'Sala 3', pct: 65 },
  ];

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-4 gap-2">
        {stats.map((s) => (
          <div key={s.label} className="bg-[#F8FAFC] rounded-lg p-2.5 border border-[#F1F5F9]">
            <div className="flex items-center justify-between mb-1">
              <s.icon className="h-3.5 w-3.5 text-[#9CA3AF]" />
              <span className="text-[10px] font-medium text-emerald-600 flex items-center gap-0.5">
                <TrendingUp className="h-2.5 w-2.5" />{s.change}
              </span>
            </div>
            <p className="text-base font-semibold text-[#0F172A] leading-none">{s.value}</p>
            <p className="text-[10px] text-[#9CA3AF] mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="bg-[#F8FAFC] rounded-lg p-3 border border-[#F1F5F9]">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-medium text-[#0F172A]">Ocupação por sala</p>
          <Badge className="text-[10px] h-5 bg-emerald-50 text-emerald-700 border-emerald-200">
            <ArrowUpRight className="h-2.5 w-2.5 mr-0.5" />Média 78%
          </Badge>
        </div>
        <div className="space-y-2">
          {rooms.map((r) => (
            <div key={r.name} className="flex items-center gap-3">
              <span className="text-[11px] text-[#6B7280] w-12">{r.name}</span>
              <div className="flex-1 h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                <div className="h-full bg-[#427CFA] rounded-full transition-all" style={{ width: `${r.pct}%` }} />
              </div>
              <span className="text-[11px] font-semibold text-[#0F172A] w-8 text-right">{r.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FluxoPanel() {
  const steps = [
    { label: 'Recepção', sublabel: 'Check-in do paciente', status: 'done', time: '08:55' },
    { label: 'Triagem', sublabel: 'Aferição + anamnese', status: 'done', time: '09:02' },
    { label: 'Atendimento', sublabel: 'Consulta com profissional', status: 'now', time: '09:08' },
    { label: 'Procedimento', sublabel: 'Se necessário', status: 'pending', time: '—' },
    { label: 'Finalização', sublabel: 'Pagamento + retorno', status: 'pending', time: '—' },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 pb-3 border-b border-[#F1F5F9]">
        <div className="w-7 h-7 rounded-full bg-[#427CFA]/10 flex items-center justify-center text-[10px] font-semibold text-[#427CFA]">CL</div>
        <div>
          <p className="text-[13px] font-medium text-[#0F172A]">Carlos Lima</p>
          <p className="text-[10px] text-[#9CA3AF]">Avaliação · Sala 2</p>
        </div>
        <Badge className="ml-auto text-[10px] h-5 bg-[#427CFA]/10 text-[#427CFA] border-0">Em andamento</Badge>
      </div>
      <div className="relative pl-4">
        <div className="absolute left-[7px] top-1 bottom-1 w-[2px] bg-[#E2E8F0]" />
        <div className="space-y-3">
          {steps.map((s, i) => (
            <div key={i} className="relative flex items-start gap-3">
              <div className={`absolute left-[-13px] top-0.5 w-3 h-3 rounded-full border-2 z-10 ${
                s.status === 'done' ? 'bg-emerald-400 border-emerald-400' :
                s.status === 'now' ? 'bg-[#427CFA] border-[#427CFA] ring-4 ring-[#427CFA]/10' :
                'bg-white border-[#E2E8F0]'
              }`} />
              <div className="flex-1 flex items-center justify-between min-w-0">
                <div>
                  <p className={`text-[12px] font-medium ${s.status === 'done' ? 'text-[#9CA3AF]' : 'text-[#0F172A]'}`}>{s.label}</p>
                  <p className="text-[10px] text-[#9CA3AF]">{s.sublabel}</p>
                </div>
                <span className={`text-[10px] font-mono ${s.status === 'now' ? 'text-[#427CFA] font-semibold' : 'text-[#CBD5E1]'}`}>{s.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between pt-2 border-t border-[#F1F5F9]">
        <span className="text-[10px] text-[#9CA3AF] font-dm">Tempo no fluxo: 13min</span>
        <span className="text-[10px] text-[#9CA3AF] font-dm">Média: 22min</span>
      </div>
    </div>
  );
}

function MobilePanel() {
  return (
    <div className="flex items-center justify-center gap-6 py-2">
      {/* Phone mockup */}
      <div className="w-[180px] bg-[#0F172A] rounded-[1.5rem] p-2 shadow-xl">
        <div className="bg-white rounded-[1.1rem] overflow-hidden">
          {/* Status bar */}
          <div className="flex items-center justify-between px-3 py-1.5 bg-[#F8FAFC]">
            <span className="text-[8px] text-[#9CA3AF] font-mono">9:41</span>
            <div className="flex items-center gap-1">
              <Activity className="h-2 w-2 text-[#9CA3AF]" />
              <span className="text-[8px] text-[#9CA3AF]">●●●</span>
            </div>
          </div>
          {/* Content */}
          <div className="px-3 py-2 space-y-2">
            <p className="text-[10px] font-semibold text-[#0F172A]">Agenda de hoje</p>
            {['João S. · 08:00', 'Ana O. · 08:30', 'Carlos L. · 09:00'].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5 bg-[#F8FAFC] rounded-md px-2 py-1.5">
                <span className={`h-1.5 w-1.5 rounded-full ${i < 2 ? 'bg-emerald-400' : 'bg-[#427CFA]'}`} />
                <span className="text-[9px] text-[#374151]">{item}</span>
              </div>
            ))}
            <div className="pt-1.5 border-t border-[#F1F5F9]">
              <p className="text-[9px] font-semibold text-[#0F172A] mb-1">Notificações</p>
              <div className="flex items-center gap-1.5 bg-[#427CFA]/8 rounded-md px-2 py-1.5">
                <Bell className="h-2.5 w-2.5 text-[#427CFA]" />
                <span className="text-[8px] text-[#427CFA]">Próximo: Carlos Lima</span>
              </div>
            </div>
          </div>
          {/* Nav bar */}
          <div className="flex items-center justify-around px-3 py-2 border-t border-[#F1F5F9]">
            <CalendarDays className="h-3 w-3 text-[#427CFA]" />
            <Users className="h-3 w-3 text-[#CBD5E1]" />
            <MessageSquare className="h-3 w-3 text-[#CBD5E1]" />
            <Bell className="h-3 w-3 text-[#CBD5E1]" />
          </div>
        </div>
      </div>

      {/* Features list */}
      <div className="space-y-3 max-w-[200px]">
        {[
          { icon: CalendarDays, label: 'Agenda em tempo real', desc: 'Veja e gerencie de qualquer lugar' },
          { icon: Bell, label: 'Notificações push', desc: 'Alertas de chegada e atrasos' },
          { icon: MessageSquare, label: 'Chat com equipe', desc: 'Comunicação interna rápida' },
          { icon: Star, label: 'Feedback do paciente', desc: 'Avaliação pós-consulta' },
        ].map((f, i) => (
          <div key={i} className="flex items-start gap-2">
            <div className="w-6 h-6 rounded-md bg-[#427CFA]/8 flex items-center justify-center flex-shrink-0 mt-0.5">
              <f.icon className="h-3 w-3 text-[#427CFA]" />
            </div>
            <div>
              <p className="text-[11px] font-medium text-[#0F172A]">{f.label}</p>
              <p className="text-[10px] text-[#9CA3AF]">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
