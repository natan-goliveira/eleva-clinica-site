import json, os

files = {
    "HeroSection": r"""'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useLanguage } from '@/contexts/LanguageContext';
import { ButtonCTA } from '../ui/ButtonCTA';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo('.hero-label',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
      );

      tl.fromTo('.hero-title-line',
        { y: 50, opacity: 0, rotateX: 15 },
        { y: 0, opacity: 1, rotateX: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' },
        '-=0.2'
      );

      tl.fromTo('.hero-divider',
        { scaleX: 0 },
        { scaleX: 1, duration: 0.6, ease: 'power2.inOut' },
        '-=0.3'
      );

      tl.fromTo('.hero-subtitle',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      );

      tl.fromTo('.hero-proof',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
        '-=0.2'
      );

      tl.fromTo('.hero-cta',
        { y: 20, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.4)' },
        '-=0.2'
      );

      tl.fromTo('.hero-visual',
        { x: 80, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out' },
        '-=0.7'
      );

      tl.fromTo('.hero-scroll-indicator',
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        '-=0.3'
      );

      gsap.to('.hero-scroll-indicator', {
        y: 8,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 2
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const titleLines = t.hero.title.split('\n');

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0F172A]" />
      
      {/* Gradient accent */}
      <div 
        className="absolute top-0 right-0 w-[60%] h-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 70% 30%, rgba(66,124,250,0.15) 0%, transparent 60%)'
        }}
      />
      
      {/* Subtle grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Bottom transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #F8FAFC)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl min-h-screen flex items-center px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 w-full py-24 lg:py-20">

          {/* Left Column */}
          <div className="flex-1 max-w-xl">
            <span className="hero-label inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#427CFA] mb-8 font-dm">
              <span className="w-8 h-[1px] bg-[#427CFA]" />
              Tecnologia personalizada
            </span>

            <div className="mb-6 overflow-hidden" style={{ perspective: '600px' }}>
              {titleLines.map((line, i) => (
                <h1 
                  key={i}
                  className="hero-title-line text-[clamp(2.2rem,5vw,3.25rem)] font-normal text-white leading-[1.12] tracking-tight"
                  style={{ fontFamily: 'var(--font-radio-grotesk)' }}
                >
                  {line}
                </h1>
              ))}
            </div>

            <div className="hero-divider w-16 h-[2px] bg-[#427CFA] mb-6 origin-left" />

            <p className="hero-subtitle text-lg text-white/60 leading-relaxed mb-8 font-dm max-w-md">
              {t.hero.subtitle}
            </p>

            <div className="hero-proof mb-8">
              <Image
                src="/assets/provasocial.png"
                alt="Prova social - clientes satisfeitos"
                width={120}
                height={40}
                className="object-contain opacity-80"
              />
            </div>

            <div className="hero-cta flex items-center gap-6">
              <ButtonCTA href="#abordagem">
                {t.hero.cta}
              </ButtonCTA>
              <a 
                href="#problema" 
                className="text-sm text-white/40 hover:text-white/70 transition-colors font-dm hidden sm:block"
              >
                ou veja o problema primeiro
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="hero-visual flex-1 mt-12 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] rounded-full blur-[120px]"
                style={{ background: 'rgba(66,124,250,0.2)' }}
              />
              <Image
                src="/assets/dashboardMobile.image.png"
                alt="Dashboard e aplicativo mobile personalizado"
                width={800}
                height={600}
                className="object-contain w-full h-auto relative z-10 drop-shadow-2xl"
                priority
              />
              <div className="absolute bottom-4 left-4 z-20 bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/10">
                <p className="text-[11px] text-white/50 font-dm uppercase tracking-wider mb-1">Feito sob medida</p>
                <p className="text-sm text-white/90 font-dm font-medium">Para a sua cl&iacute;nica</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[11px] text-white/30 font-dm uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 text-white/30" />
        </div>
      </div>
    </section>
  );
}
""",

    "ProblemaSection": r"""'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  PuzzleIcon,
  LayoutList,
  Clock,
  CircleDollarSign
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const iconMap = {
  'missing-features': PuzzleIcon,
  'unused-features': LayoutList,
  'no-changes': Clock,
  'wasted-money': CircleDollarSign,
};

export function ProblemaSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<Map<number, HTMLSpanElement>>(new Map());

  const cards = [
    {
      icon: 'missing-features',
      title: t.problema.cards.missingFeatures.title,
      description: t.problema.cards.missingFeatures.description,
      stat: { value: 72, suffix: '%', label: t.problema.cards.missingFeatures.statLabel },
    },
    {
      icon: 'unused-features',
      title: t.problema.cards.unusedFeatures.title,
      description: t.problema.cards.unusedFeatures.description,
      stat: { value: 88, suffix: '%', label: t.problema.cards.unusedFeatures.statLabel },
    },
    {
      icon: 'no-changes',
      title: t.problema.cards.noChanges.title,
      description: t.problema.cards.noChanges.description,
      stat: { value: 6, suffix: ' meses', label: t.problema.cards.noChanges.statLabel },
    },
    {
      icon: 'wasted-money',
      title: t.problema.cards.wastedMoney.title,
      description: t.problema.cards.wastedMoney.description,
      stat: { value: 67, suffix: '%', label: t.problema.cards.wastedMoney.statLabel },
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animar label e headline
      gsap.fromTo('.problema-label, .problema-headline',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.14,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.problema-headline',
            start: 'top 85%',
            once: true,
          }
        }
      );

      // Animar cards com stagger
      gsap.fromTo('.problema-card',
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.problema-grid',
            start: 'top 78%',
            once: true,
          }
        }
      );

      // Animar barra vermelha dos cards
      gsap.fromTo('.problema-accent',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.problema-grid',
            start: 'top 75%',
            once: true,
          }
        }
      );

      // Contadores animados
      cards.forEach((card, index) => {
        const el = statsRef.current.get(index);
        if (!el) return;

        const obj = { value: 0 };
        gsap.to(obj, {
          value: card.stat.value,
          duration: 1.8,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            once: true,
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.value) + card.stat.suffix;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [cards]);

  return (
    <section
      ref={sectionRef}
      id="problema"
      aria-label="O problema"
      className="py-[140px] relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-red-500/5 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#427CFA]/5 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="problema-label inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-red-400/80 mb-5 font-dm">
            <span className="w-8 h-[1px] bg-red-400/60" />
            {t.problema.label}
          </span>
          <h2
            className="problema-headline text-[clamp(2rem,4vw,3rem)] font-normal text-white leading-[1.1] tracking-normal whitespace-pre-line"
            style={{ fontFamily: 'var(--font-radio-grotesk)' }}
          >
            {t.problema.headline}
          </h2>
        </div>

        {/* Cards Grid 2x2 */}
        <div className="problema-grid grid md:grid-cols-2 gap-5">
          {cards.map((card, index) => {
            const IconComponent = iconMap[card.icon as keyof typeof iconMap];

            return (
              <div
                key={index}
                className="problema-card group relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-[1.5rem] p-8 hover:bg-white/[0.07] transition-all duration-500 overflow-hidden"
              >
                {/* Accent bar top */}
                <div className="problema-accent absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-400/60 to-transparent origin-left" />

                {/* Icon */}
                <div className="mb-5 w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center group-hover:bg-red-400/10 transition-colors duration-500">
                  <IconComponent className="w-6 h-6 text-red-400/80" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3
                  className="text-[1.1rem] font-medium text-white/90 mb-3"
                  style={{ fontFamily: 'var(--font-radio-grotesk)' }}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-[0.9rem] text-white/40 leading-relaxed mb-5 font-dm">
                  {card.description}
                </p>

                {/* Stat */}
                <div className="inline-flex items-center gap-2 bg-white/[0.04] px-3.5 py-2 rounded-full border border-white/[0.06]">
                  <span
                    ref={(el) => {
                      if (el) statsRef.current.set(index, el);
                    }}
                    className="text-[0.85rem] font-semibold text-red-400 font-dm"
                  >
                    0{card.stat.suffix}
                  </span>
                  <span className="text-[0.75rem] text-white/30 font-dm">
                    {card.stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
""",

    "AbordagemSection": r"""'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search, Code, Key } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const stepIcons = [Search, Code, Key];

export function AbordagemSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const steps = [
    { number: 1, title: t.abordagem.steps.step1.title, description: t.abordagem.steps.step1.description },
    { number: 2, title: t.abordagem.steps.step2.title, description: t.abordagem.steps.step2.description },
    { number: 3, title: t.abordagem.steps.step3.title, description: t.abordagem.steps.step3.description },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.abordagem-label, .abordagem-headline, .abordagem-desc',
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.65, 
          stagger: 0.18, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.abordagem-headline',
            start: 'top 82%',
            once: true,
          }
        }
      );

      gsap.fromTo('.step-card',
        { y: 50, opacity: 0, scale: 0.95 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 0.6, 
          stagger: 0.18, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.steps-grid',
            start: 'top 78%',
            once: true,
          }
        }
      );

      // Animate connector lines
      gsap.fromTo('.step-connector-h',
        { scaleX: 0 },
        { 
          scaleX: 1, 
          duration: 0.5, 
          stagger: 0.2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: '.steps-grid',
            start: 'top 72%',
            once: true,
          }
        }
      );

      gsap.fromTo('.abordagem-highlight',
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.7, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.abordagem-highlight',
            start: 'top 85%',
            once: true,
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="abordagem" 
      aria-label="Nossa abordagem"
      className="py-[140px] bg-white relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header - centered */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="abordagem-label inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#427CFA] mb-5 font-dm">
            <span className="w-8 h-[1px] bg-[#427CFA]" />
            {t.abordagem.label}
            <span className="w-8 h-[1px] bg-[#427CFA]" />
          </span>
          
          <h2 
            className="abordagem-headline text-[clamp(2rem,4vw,3rem)] font-normal text-[#0F172A] mb-6 whitespace-pre-line leading-[1.1]"
            style={{ fontFamily: 'var(--font-radio-grotesk)' }}
          >
            {t.abordagem.headline}
          </h2>
          
          <p className="abordagem-desc text-lg text-[#64748B] leading-relaxed font-dm max-w-2xl mx-auto">
            {t.abordagem.description}
          </p>
        </div>

        {/* Steps - horizontal cards */}
        <div className="steps-grid grid md:grid-cols-3 gap-6 relative">
          {/* Connector lines between cards (desktop only) */}
          <div className="hidden md:block absolute top-[60px] left-[33%] w-[10%] h-[2px]">
            <div className="step-connector-h w-full h-full bg-gradient-to-r from-[#427CFA]/30 to-[#427CFA]/10 origin-left" />
          </div>
          <div className="hidden md:block absolute top-[60px] left-[63%] w-[10%] h-[2px]">
            <div className="step-connector-h w-full h-full bg-gradient-to-r from-[#427CFA]/30 to-[#427CFA]/10 origin-left" />
          </div>

          {steps.map((step, index) => {
            const StepIcon = stepIcons[index];
            return (
              <div 
                key={index}
                className="step-card group relative bg-[#F8FAFC] border border-[#E2E8F0] rounded-[1.5rem] p-8 hover:shadow-lg hover:border-[#427CFA]/20 transition-all duration-500"
              >
                {/* Step number + icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative flex-shrink-0 w-12 h-12 rounded-xl bg-[#427CFA] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <StepIcon className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <span 
                    className="text-5xl font-light text-[#E2E8F0] group-hover:text-[#427CFA]/20 transition-colors duration-500"
                    style={{ fontFamily: 'var(--font-radio-grotesk)' }}
                  >
                    0{step.number}
                  </span>
                </div>
                
                <h4 
                  className="text-xl font-semibold text-[#0F172A] mb-2"
                  style={{ fontFamily: 'var(--font-radio-grotesk)' }}
                >
                  {step.title}
                </h4>
                <p className="text-[0.9rem] text-[#64748B] leading-relaxed font-dm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight box */}
        <div className="abordagem-highlight mt-16 bg-[#0F172A] rounded-[1.5rem] p-10 lg:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#427CFA]/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#427CFA]/5 blur-[80px]" />
          <div className="relative z-10">
            <p 
              className="text-2xl md:text-3xl font-normal text-white/90 leading-tight mb-3"
              style={{ fontFamily: 'var(--font-radio-grotesk)' }}
            >
              A ferramenta &eacute; <span className="text-[#427CFA]">sua</span>.
            </p>
            <p className="text-base text-white/40 font-dm max-w-md mx-auto">
              Sem licen&ccedil;a mensal. Sem depend&ecirc;ncia. Sem surpresas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
""",

    "EntregamosSection": r"""'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';
import { CalendarDays, FileText, LayoutDashboard, Workflow, Smartphone } from 'lucide-react';

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
            {/* Screen mockup */}
            <div className="relative rounded-[1.5rem] overflow-hidden shadow-xl bg-white border border-[#E2E8F0]">
              <div 
                className="aspect-[16/10] flex items-center justify-center"
                style={{
                  background: 'linear-gradient(180deg, #F0F7FF 0%, #E8F0FE 100%)'
                }}
              >
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#427CFA]/10 flex items-center justify-center">
                    {React.createElement(tabIcons[activeTab], { className: 'w-8 h-8 text-[#427CFA]', strokeWidth: 1.5 })}
                  </div>
                  <p className="text-sm text-[#6B7280] font-dm mb-1">{currentTab.title}</p>
                  <p className="text-xs text-[#9CA3AF] font-dm">{currentTab.image}</p>
                </div>
              </div>
            </div>

            {/* Description below mockup */}
            <div className="mt-6 pl-1">
              <h3 
                className="text-xl font-semibold text-[#0F172A] mb-2"
                style={{ fontFamily: 'var(--font-radio-grotesk)' }}
              >
                {currentTab.title}
              </h3>
              <p className="text-base text-[#64748B] leading-relaxed font-dm max-w-xl">
                {currentTab.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
""",

    "CTAFinalSection": r"""'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';
import { ButtonCTA } from '../ui/ButtonCTA';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function CTAFinalSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-final-headline, .cta-final-desc',
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.7, 
          stagger: 0.16, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
            once: true,
          }
        }
      );

      gsap.fromTo('.cta-final-btn',
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: '.cta-final-btn',
            start: 'top 85%',
            once: true,
          },
          onComplete: () => {
            if (glowRef.current) {
              gsap.to(glowRef.current, {
                opacity: 0.4,
                scale: 1.1,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
              });
            }
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="contato" 
      aria-label="Agendar conversa"
      className="relative py-[140px] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0F172A]" />
      
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#427CFA]/8 blur-[200px]" />
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#427CFA]/5 blur-[150px]" />
      
      {/* Subtle grid */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#427CFA] mb-8 font-dm">
          <span className="w-8 h-[1px] bg-[#427CFA]" />
          Pronto para come&ccedil;ar?
          <span className="w-8 h-[1px] bg-[#427CFA]" />
        </span>

        <h2 
          className="cta-final-headline text-[clamp(2rem,4.5vw,3.25rem)] font-normal text-white mb-6 leading-[1.1]"
          style={{ fontFamily: 'var(--font-radio-grotesk)' }}
        >
          {t.cta.headline}
        </h2>
        
        <p className="cta-final-desc text-lg text-white/50 mb-10 font-dm max-w-lg mx-auto">
          {t.cta.subtitle}
        </p>
        
        <div className="cta-final-btn relative inline-flex">
          <div ref={glowRef} className="absolute inset-0 rounded-full bg-[#427CFA]/30 blur-xl scale-100 opacity-0" />
          <ButtonCTA href="#contato">
            {t.cta.button}
          </ButtonCTA>
        </div>
      </div>
    </section>
  );
}
""",
}

base = "/Users/natanoliveira/Desktop/73cod/site73/src/components/sections"

for name, content in files.items():
    filepath = os.path.join(base, f"{name}.tsx")
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Wrote {name}.tsx")

print("All done!")
