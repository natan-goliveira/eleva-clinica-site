'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ArrowRight, Plus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ButtonCTA } from '../ui/ButtonCTA';

// Registrar plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface CardData {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  image: string;
  stat: { value: string; label: string };
}

export function ParaQuemSection() {
  const { t, locale } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Estado para controlar o card ativo (expandido)
  // No desktop, inicia com o primeiro. No mobile, pode ser null ou o primeiro.
  const [activeId, setActiveId] = useState<string>('aesthetic');

  const cardsData: CardData[] = [
    {
      id: 'aesthetic',
      number: '01',
      category: t.paraQuem.cards.aesthetic.category,
      title: t.paraQuem.cards.aesthetic.title,
      description: locale === 'pt'
        ? 'Protocolos complexos, sessões encadeadas e controle de materiais que nenhum sistema genérico entende.'
        : 'Complex protocols, chained sessions, and material control that no generic system understands.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=90&auto=format&fit=crop',
      stat: {
        value: '180+',
        label: locale === 'pt' ? 'protocolos' : 'protocols'
      },
    },
    {
      id: 'dental',
      number: '02',
      category: t.paraQuem.cards.dental.category,
      title: t.paraQuem.cards.dental.title,
      description: locale === 'pt'
        ? 'Múltiplos profissionais, salas e horários cruzados. Cada dentista com um jeito de trabalhar.'
        : 'Multiple professionals, rooms, and overlapping schedules. Each dentist works differently.',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=90&auto=format&fit=crop',
      stat: {
        value: '150+',
        label: locale === 'pt' ? 'dentistas' : 'dentists'
      },
    },
    {
      id: 'growing',
      number: '03',
      category: t.paraQuem.cards.growing.category,
      title: t.paraQuem.cards.growing.title,
      description: locale === 'pt'
        ? 'A operação cresceu, mas o sistema não acompanhou. Você precisa de tecnologia que escala junto.'
        : 'The operation grew, but the system didn\'t keep up. You need technology that scales with you.',
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=90&auto=format&fit=crop',
      stat: {
        value: '95',
        label: locale === 'pt' ? '% satisfação' : '% satisfaction'
      },
    },
  ];

  // Animação de entrada da seção
  useEffect(() => {
    const ctx = gsap.context(() => {
      const headerElements = headerRef.current?.querySelectorAll('.header-animate');
      const container = containerRef.current;

      if (headerElements) {
        gsap.fromTo(headerElements,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 80%',
              once: true
            }
          }
        );
      }

      if (container) {
        gsap.fromTo(container,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              once: true
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="para-quem"
        className="relative -mt-12 pt-16 md:pt-20 pb-24 md:pb-32 bg-[#F8FAFC] overflow-hidden rounded-t-[2.5rem] z-10"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">

          {/* Header */}
          <div ref={headerRef} className="max-w-3xl mb-16 header-animate">
            <span
              className="inline-block text-[13px] font-semibold uppercase tracking-[0.2em] text-[#427CFA] mb-4"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              {t.paraQuem.label}
            </span>
            <h2
              className="text-[clamp(2rem,4vw,3rem)] font-normal text-[#0F172A] leading-[1.1] tracking-normal mb-6"
              style={{ fontFamily: 'var(--font-radio-grotesk)' }}
            >
              {t.paraQuem.headline}
            </h2>
            <p
              className="text-lg text-[#64748B] leading-relaxed max-w-xl"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              {t.paraQuem.description}
            </p>
          </div>

          {/* Accordion Container */}
          <div
            ref={containerRef}
            className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[500px] transition-all duration-700 ease-out"
          >
            {cardsData.map((card) => {
              const isActive = activeId === card.id;

              return (
                <div
                  key={card.id}
                  onMouseEnter={() => window.innerWidth >= 1024 && setActiveId(card.id)}
                  onClick={() => setActiveId(card.id)}
                  className={`
                  group relative overflow-hidden rounded-[2.5rem] cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                  ${isActive ? 'lg:flex-[3.5] flex-[3] shadow-2xl shadow-[#427CFA]/10' : 'lg:flex-[1] flex-[1]'}
                  bg-[#0F172A] shadow-[0_8px_32px_rgba(0,0,0,0.12)]
                `}
                  style={{
                    minHeight: isActive ? '400px' : '100px', // Mobile height logic
                  }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={card.image}
                      alt={card.title}
                      className={`
                      w-full h-full object-cover transition-transform duration-1000 ease-out
                      ${isActive ? 'scale-105' : 'scale-125'}
                    `}
                    />
                    {/* Overlay */}
                    <div className={`
                    absolute inset-0 transition-all duration-700
                    ${isActive ? 'bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent' : 'bg-[#0F172A]/60 hover:bg-[#0F172A]/50 max-lg:bg-[#0F172A]/70'}
                  `} />
                  </div>

                  {/* Content Wrapper */}
                  <div className="relative z-10 w-full h-full p-8 lg:p-10 flex flex-col justify-between">

                    {/* Top Row */}
                    <div className="flex items-start justify-between">
                      <span className={`
                      text-4xl font-light tracking-tighter transition-colors duration-500
                      ${isActive ? 'text-white/20' : 'text-white/60'}
                    `} style={{ fontFamily: 'var(--font-radio-grotesk)' }}>
                        {card.number}
                      </span>

                      {/* Icon/Indicator */}
                      <div className={`
                      w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-500
                      ${isActive ? 'bg-[#427CFA] border-[#427CFA] rotate-45' : 'bg-white/10 border-white/20 rotate-0 group-hover:bg-white group-hover:text-black'}
                    `}>
                        {isActive ? (
                          <ArrowRight className="w-5 h-5 text-white" />
                        ) : (
                          <Plus className="w-5 h-5 text-white group-hover:text-black" />
                        )}
                      </div>
                    </div>

                    {/* Bottom Content */}
                    <div className={`
                    transform transition-all duration-700 delay-100
                    ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-80'}
                  `}>

                      {/* Title - Separate elements for smooth transition */}
                      <div className="mb-4 relative">
                        {isActive && (
                          <span className="inline-block text-[#427CFA] text-xs font-bold uppercase tracking-widest mb-2 animate-fadeIn">
                            {card.category}
                          </span>
                        )}

                        {/* Expanded Title - Horizontal */}
                        <h3
                          className={`
                            font-normal leading-tight text-3xl md:text-4xl text-white
                            transition-all duration-700 ease-out
                            ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute'}
                          `}
                          style={{ fontFamily: 'var(--font-radio-grotesk)' }}
                        >
                          {card.title}
                        </h3>

                        {/* Collapsed Title - Vertical (for desktop) */}
                        <h3
                          className={`
                            font-normal leading-tight text-xl lg:text-2xl text-white/90
                            transition-all duration-700 ease-out
                            lg:rotate-[-90deg] lg:origin-bottom-left lg:absolute lg:bottom-0 lg:left-0 lg:whitespace-nowrap
                            ${isActive ? 'lg:opacity-0 lg:scale-95' : 'max-lg:hidden lg:opacity-100 lg:scale-100'}
                          `}
                          style={{ fontFamily: 'var(--font-radio-grotesk)' }}
                        >
                          {card.title}
                        </h3>

                        {/* Mobile Collapsed Title */}
                        <h3
                          className={`
                            font-normal leading-tight text-xl text-white/90  
                            transition-all duration-500 ease-out
                            lg:hidden
                            ${isActive ? 'hidden' : 'block'}
                          `}
                          style={{ fontFamily: 'var(--font-radio-grotesk)' }}
                        >
                          {card.title}
                        </h3>
                      </div>

                      {/* Description & Stat - Only visible when active */}
                      <div className={`
                      overflow-hidden transition-all duration-700 ease-out
                      ${isActive ? 'max-h-[200px] opacity-100 mt-2' : 'max-h-0 opacity-0'}
                    `}>
                        <p className="text-white/80 text-lg leading-relaxed max-w-md mb-8" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                          {card.description}
                        </p>

                        <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                          <div>
                            <span className="block text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-radio-grotesk)' }}>
                              {card.stat.value}
                            </span>
                            <span className="text-xs text-white/50 uppercase tracking-wider">
                              {card.stat.label}
                            </span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA - Hover Reveal Design */}
          <div className="mt-20 lg:mt-24">
            <div
              className="group relative h-[280px] md:h-[320px] rounded-[2.5rem] overflow-hidden cursor-pointer bg-neutral-900"
              style={{
                boxShadow: '0 4px 24px rgba(15, 23, 42, 0.12)'
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=90&auto=format&fit=crop"
                  alt="Especialidades médicas"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-60"
                />
                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(180deg, rgba(15,23,42,0.4) 0%, rgba(15,23,42,0.8) 100%)'
                  }}
                />
              </div>

              {/* Top Row - Tag & Arrow */}
              <div className="absolute top-0 left-0 right-0 p-8 flex items-start justify-between z-10">
                {/* Tag */}
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                  <span
                    className="text-[11px] font-semibold text-white/90 tracking-widest uppercase"
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  >
                    {locale === 'pt' ? 'FEITO SOB MEDIDA' : 'CUSTOM BUILT'}
                  </span>
                </span>

                {/* Arrow Icon */}
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-full border border-white/30 text-white/80 transition-all duration-500 group-hover:border-[#427CFA] group-hover:bg-[#427CFA] group-hover:text-white group-hover:rotate-45"
                >
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>

              {/* Bottom Row - Title on left, Button on right (same line) */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                {/* Row with Title and Button aligned at bottom */}
                <div className="flex items-end justify-between gap-6">
                  {/* Left Side - Title only (description appears above on hover) */}
                  <h3
                    className="text-2xl md:text-3xl lg:text-4xl font-normal text-white leading-tight tracking-normal pb-4 transition-transform duration-500 ease-out group-hover:-translate-y-12"
                    style={{ fontFamily: 'var(--font-radio-grotesk)' }}
                  >
                    {locale === 'pt'
                      ? 'Sua clínica não se encaixa nos padrões?'
                      : 'Your clinic doesn\'t fit the standard?'
                    }
                  </h3>

                  {/* Right Side - CTA Button (always visible) */}
                  <ButtonCTA 
                    href="#contato"
                    className="hidden md:inline-flex"
                    variant="white"
                  >
                    {locale === 'pt' ? 'Vamos conversar' : 'Let\'s talk'}
                  </ButtonCTA>
                </div>

                {/* Description - Hidden by default, revealed on hover (positioned absolutely) */}
                <div className="absolute bottom-8 left-8 right-8 overflow-hidden pointer-events-none">
                  <p
                    className="text-white/80 text-lg leading-relaxed max-w-2xl transform translate-y-full opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100"
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  >
                    {locale === 'pt'
                      ? 'É exatamente por isso que construímos tecnologia personalizada. Cada clínica é única e merece um sistema feito para ela.'
                      : 'That\'s exactly why we build custom technology. Every clinic is unique and deserves a system built for it.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
