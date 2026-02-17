'use client';

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
